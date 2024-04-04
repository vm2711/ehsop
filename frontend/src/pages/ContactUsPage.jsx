import React from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const ContactUs = () => {
    return (
        <>
        <Header />
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <h1>Contact Us - Havi Fashion</h1>
            </header>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px', lineHeight: '1.6' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Contact Information</h2>
                <ul>
                    <li><strong>Email:</strong> fashionhavi@gmail.com </li>
                    <li><strong>Phone:</strong> +91 6377186885</li>
                    <li><strong>Address:</strong> Room -1919,Deshmukh wadi, Shiv Colony,4 Th Lane,Airoli Village, Navi Mumbai- 400708, Maharashtra, India.</li>
                </ul>

                <div style={{ marginTop: '40px', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '8px' }}>
                    <h2 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Fill this form and submit your query. We will get back to you within 48 hours.</h2>
                    <form style={{ marginBottom: '20px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Name:</label>
                            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Email:</label>
                            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="message" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Message:</label>
                            <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
