import React from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const PrivacyPolicy = () => {
    return (
        <>
        <Header />
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <h1>Privacy Policy - Havi Fashion</h1>
            </header>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px', lineHeight: '1.6' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Introduction</h2>
                <p>We take your privacy seriously. This Privacy Policy describes how Havi Fashion collects, uses, and protects your personal information when you use our website.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Information We Collect</h2>
                <p>We collect personal information that you provide to us voluntarily when you register an account, place an order, or contact us for support. This information may include your name, email address, shipping address, and payment details.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>How We Use Your Information</h2>
                <p>We use the information we collect to process your orders, communicate with you, and provide customer support. We may also use your information to improve our website and services, and to personalize your experience.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Information Security</h2>
                <p>We are committed to ensuring the security of your personal information. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Changes to this Privacy Policy</h2>
                <p>We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically for any updates or changes.</p>

                <h2 style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Contact Us</h2>
                <p>If you have any questions or concerns about our Privacy Policy, please contact us at privacy@havifashion.com.</p>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
