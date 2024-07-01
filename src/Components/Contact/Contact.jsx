import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img from '../../assets/developer03.png';
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
                    <div className="col-md-4">
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
                            <button type="submit" className="btn btn-outline-danger d-flex align-items-center contact-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"></path>
                                </svg>
                                Send
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
