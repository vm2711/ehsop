import React from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const TermsAndConditions = () => {
    return (
        <>
        <Header />
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <h1>Terms and Conditions - Havi Fashion</h1>
            </header>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px', lineHeight: '1.6' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Introduction</h2>
                <p>Welcome to Havi Fashion. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Havi Fashion if you do not agree to all the terms and conditions stated on this page.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Return Policy</h2>
                <p>We offer a 7-day return policy from the date of delivery. If you are not satisfied with your purchase, you may return the item(s) in their original condition for a refund or exchange. Please note that certain items may be non-returnable. For more information, please contact our customer service.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Order Cancellation</h2>
                <p>Once an order is placed, it cannot be cancelled. We strive to process orders quickly to ensure timely delivery to our customers. Please review your order carefully before confirming the purchase.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Disclaimer</h2>
                <p>All product descriptions, images, and prices are provided for informational purposes only. While we strive to ensure accuracy, errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Acceptance of Terms</h2>
                <p>By using our website and placing an order, you agree to accept and abide by our terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.</p>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
