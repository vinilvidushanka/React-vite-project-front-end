import "./Contact.css";
import { useForm } from "react-hook-form";
// import * as React from "react";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form data submitted:', data);
        alert(`Submitted your case: ${data.name}`);
    };

    return (
        <>
            <div className="formContainer">
                <h2>Contact Us</h2>
                <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', {
                            required: 'Name is required',
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: 'Invalid name format'
                            }
                        })}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        {...register('message', {
                            required: 'Message is required',
                            pattern: {
                                value: /^[\w\s.,!?'-]+$/,
                                message: 'Invalid message format'
                            }
                        })}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message.message}</span>}

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
}
