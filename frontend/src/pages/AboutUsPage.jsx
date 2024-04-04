import React from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
        <Header />
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <h1>About Us - Havi Fashion</h1>
            </header>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px', lineHeight: '1.6' }}>
            <h2 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontStyle: 'italic' }}>Namaste! <img src="https://shopmen.vercel.app/static/media/havilogo.5124b9d9bc247c333c1b.png" alt="Havi Fashion Logo" style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px', height: '40px' }} /></h2>
                <p>Havi Fashion is your one-stop destination for authentic Jaipuri shirts and kurtas. We bring you the finest collection of traditional and contemporary designs, handcrafted with care and expertise.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px', color: '#333' }}>Our Mission</h2>
                <p>Our mission at Havi Fashion is to promote the rich heritage of Jaipuri textiles and craftsmanship. We aim to provide our customers with high-quality, ethically sourced products that celebrate the cultural diversity and artistic traditions of Rajasthan.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px', color: '#333' }}>Why Choose Us?</h2>
                <p><strong>• Authenticity:</strong> We take pride in offering genuine Jaipuri shirts and kurtas, crafted by skilled artisans using traditional techniques.</p>
                <p><strong>• Quality:</strong> Each of our products undergoes rigorous quality checks to ensure that you receive nothing but the best.</p>
                <p><strong>• Variety:</strong> From classic designs to contemporary styles, we offer a diverse range of options to suit every taste and occasion.</p>
                <p><strong>• Customer Satisfaction:</strong> Your satisfaction is our top priority. We strive to provide excellent customer service and a seamless shopping experience.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px', color: '#333' }}>Contact Us</h2>
                <p>If you have any questions or feedback, feel free to reach out to us by clicking on <Link to="/contact-us" style={{ textDecoration: 'underline', fontWeight: 'semibold' }}>Contact Us</Link>.</p>
                {/* <ul>
                    <li><strong>Email:</strong> info@havifashion.com</li>
                    <li><strong>Phone:</strong> +91 1234567890</li>
                    <li><strong>Address:</strong> 123 Jaipur Marg, Jaipur, Rajasthan, India</li>
                </ul> */}
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
