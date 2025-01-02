import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y1myt8q', 'template_vgcegmq', form.current, 'fPx116jZ5Pssc5Cs_')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success('Email successfully sent!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send email: ' + error.text);
                },
            );
    };

    return (
        <div className='contact-Container pt-4'>
            <h1 className='text-center'>Contact</h1>
            <div className="container mb-4">
                <h3 className='contact-title pb-4'>🌟 Feel free to contact me.</h3>
                <div className="row align-items-center">
                    <div className="col-md-6 text-center contact-img">
                    </div>
                    <div className="col-md-4 form-container">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="user_name"
                                    required
                                    placeholder='Name'
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="user_email"
                                    required
                                    placeholder='Email'
                                />
                            </div>
                            <div className="form-group mb-4">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder='Message'
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-danger d-flex align-items-center contact-btn">Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
