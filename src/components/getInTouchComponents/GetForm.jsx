import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';

const GetForm = () => {
    const [check, setCheck] = useState(false)
    const [translite, setTranslite] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        occasion: '',
        event_date: '',
        message: '',
        hear_about_us: '',
        agree: '',
    })

    const handlChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        occasion: '',
        event_date: '',
        hear_about_us: '',
        agree: '',
    })

    const minDate = () => {
        const today = new Date()
        today.setDate(today.getDate() + 2)
        return today.toISOString().split("T")[0]
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name must have!'
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = 'Name must not contain numbers or special characters.'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email must have!'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email must not contain numbers or special characters, only English letters.!'
        }

        if (!formData.occasion) {
            newErrors.occasion = 'Need to Choose!'
        }

        if (!formData.hear_about_us) {
            newErrors.hear_about_us = 'Need to Choose!'
        }

        if (!formData.event_date) {
            newErrors.event_date = 'Need to Choose Date!'
        }

        if (!formData.agree) {
            newErrors.agree = 'Need to agree!'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setTranslite(false)
            return
        }




        axios.post('http://localhost:3000/Orders', formData)
            .then((res) => {
                console.log(res.data)
                setFormData({
                    name: '',
                    email: '',
                    occasion: '',
                    event_date: '',
                    message: '',
                    hear_about_us: '',
                    agree: '',
                })
                setErrors({
                    name: '',
                    email: '',
                    occasion: '',
                    event_date: '',
                    hear_about_us: '',
                    agree: '',
                })
                setCheck(!check)
                setTranslite(true)
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <div className='flex flex-col items-center my-30 space-y-10 px-10 shadow-2xl pb-30'>
            <div className='text-center max-w-210 text-main-rose space-y-5'>
                <h3 className='italic text-xl'>“Ah, good conversation -there’s nothing like it, is there? The air of ideas is the only air worth breathing”</h3>
                <h3 className='text-2xl'>– EDITH WHARTON</h3>
            </div>
            <div className='flex gap-10 justify-around w-full lg:items-normal flex-col items-center lg:flex-row'>
                <div className=' space-y-10 pt-10 pb-7'>
                    <div className='max-w-165 text-lg space-y-5'>
                        <p className='Simple'>We love conversations and getting to know your unique stories, the Erzulie experience is all about building these connections and sparking brilliant ideas.</p>
                        <p className='Simple'>If you’re a couple getting in touch to have us design your impeccable wedding cake, or a planner reaching out on behalf of your clients, nothing makes us happier. Due to the exclusive nature of the Erzulie experience, it would be very helpful if you include your chosen wedding/occasion date in the message.</p>
                        <p className='Elegant text-5xl mt-10'>We can’t wait to hear from you.</p>
                    </div>
                    <div>
                        <img src="/FormImage.jpg" alt="Cake Image" className='rounded-2xl max-w-160 max-h-235 w-full lg:block hidden' />
                    </div>
                </div>
                <div className='sm:min-w-110 sm:max-w-115 px-3 lg:flex flex-col lg:justify-around space-y-10 pt-7'>
                    <h2 className='Elegant text-center text-6xl '>Order Form!</h2>
                    <form className='space-y-6' onSubmit={(e) => { handleSubmit(e) }}>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Name <span className='text-red-700'>*</span></label>
                            <input type="text" name='name' value={formData.name} onChange={handlChange} placeholder='Enter your name' className='border sm:w-115 w-78 px-4 h-13 border-main-rose' />
                            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Email <span className='text-red-700'>*</span></label>
                            <input type="text" name='email' value={formData.email} onChange={handlChange} placeholder='Enter your email' className='border sm:w-115 w-78 px-4 h-13 border-main-rose' />
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" >Occasion <span className='text-red-700'>*</span></label >
                            <select name="occasion" className='border sm:w-115 w-78 px-4 h-13 border-main-rose' value={formData.occasion} onChange={handlChange}>
                                <option value="">--Select occasion--</option>
                                <option value="Corporate Events">Corporate Events</option>
                                <option value="Wedding Cakes">Wedding Cakes</option>
                                <option value="Wedding Favours Only">Wedding Favours Only</option>

                            </select>
                            {errors.occasion && <p className='text-red-500 text-sm'>{errors.occasion}</p>}

                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Event Date <span className='text-red-700'>*</span></label>
                            <input type="date" name='event_date' className='border sm:w-115 w-78 px-4 h-13 border-main-rose' min={minDate()} placeholder='Choose date' value={formData.event_date} onChange={handlChange} />
                            {errors.event_date && <p className='text-red-500 text-sm'>{errors.event_date}</p>}
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Tell us how we can help</label>
                            <textarea rows={10} name='message' placeholder='Enter your message' className='border sm:w-115 w-78 px-4 py-3 h-35 border-main-rose' value={formData.message} onChange={handlChange} />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" >How did you first hear about us? <span className='text-red-700'>*</span></label >
                            <select name="hear_about_us" className='border sm:w-115 w-78 px-4 h-13 border-main-rose' value={formData.hear_about_us} onChange={handlChange}>
                                <option value="">--Choose your option--</option>
                                <option value="Blog Post">Blog Post</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Google">Google</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Saplier Referral">Saplier Referral</option>
                                <option value="Word of mouth">Word of mouth</option>
                            </select>
                            {errors.hear_about_us && <p className='text-red-500 text-sm'>{errors.hear_about_us}</p>}

                        </div>
                        <div className='space-y-6'>
                            <p className='Simple'>We are committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below</p>
                            <label htmlFor="" className='flex items-center gap-4 Simple'>
                                <div className='border-2 border-main-rose min-w-7 min-h-7 grid justify-center items-center'
                                    onClick={() => {
                                        setCheck(!check);
                                        setFormData(prev => ({
                                            ...prev,
                                            agree: !check
                                        }));
                                    }}>
                                    {check && <FaCheck className='text-xl' />}
                                </div>
                                I agree to receive communications such as newsletters
                            </label>
                            {errors.agree && <p className='text-red-500 text-sm'>{errors.agree}</p>}

                        </div>
                        <div>
                            <button className='bg-main-purple text-white px-12 py-3 Simple text-xl'>Submit</button>
                            {translite && <p className='text-green-600 text-sm mt-5'>Your order has been successfully submitted. Please wait for our response in your email!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetForm
