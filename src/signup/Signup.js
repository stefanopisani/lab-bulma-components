import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import './Signup.css'

const Signup = () => {
  return (
    <div>
        <Navbar />
        <div className="signup-form"> 
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="your password here" />
            <CoolButton isSuccess> Signup</CoolButton>
        </div> 
    </div>   
  );
};

export default Signup;
