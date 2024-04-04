const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Razorpay = require("razorpay");

// Initialize Razorpay instance with your Razorpay API key and secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const { amount } = req.body;

    // Create Razorpay order
    const orderOptions = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
    };

    const razorpayOrder = await razorpay.orders.create(orderOptions);

    res.status(200).json({
      success: true,
      order_id: razorpayOrder.id,
      currency: razorpayOrder.currency,
      amount: razorpayOrder.amount,
    });
  })
);

router.get(
  "/razorpayapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ razorpayApiKey: process.env.RAZORPAY_API_KEY });
  })
);

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Becodemy",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);


router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  })
);


module.exports = router;