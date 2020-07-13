import React, { useState } from 'react';
import Button from '../Button/Button';
import TitlePages from '../TitlePages/TitlePages';


const ContactUs = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleChangeInputSubject = (event) => {
        setSubject(event.target.value)
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChangeInputEmail = (event) => {
        if(validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null
            })
        }else {
            setErrors({
                ...errors,
                email: 'Email is not valid'
            });
        }  
    };
    const handleChangeTextarea = (event) => {
        setDescription(event.target.value)
    };
    const handleSubmit = () => {
        console.log("subject", subject);
        console.log("email", email);
        console.log("description", description);

    };
    const handleCancel = () => {
        console.log("cancel");
    };

 
    return(
        <div className="main">
            <TitlePages />
            <div className="contactPage" >
                <h2 className="Title">فرم ارتباط با مدیریت </h2>
                <div className="form">
                    <div className="formControl">
                        <label className="lbl"> نام و نام خانوادگی :</label>
                        <input onChange={handleChangeInputSubject} type="text" className="txt"></input>
                    </div>
                    <div className="formControl">
                        <label className="lbl"> پست الکترونیک :</label>
                        <input onChange={handleChangeInputEmail} type="text" className="txt"></input>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="formControl">
                        <label className="lbl"> متن پیام :</label>
                        <textarea onChange={handleChangeTextarea}
                         className="txtarea"></textarea>
                    </div>
                    <div className="formControl">
                        <Button handleClick={handleSubmit} className="btn"> ثبت</Button>
                        <Button handleClick={handleCancel} className="btn btn2"> انصراف</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactUs