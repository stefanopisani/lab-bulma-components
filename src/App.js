import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/Signup';
import Message from './Message';
import './App.css';

const App = () => {
  return (
  <div> 
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isPrimary className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSuccess>Button 2</CoolButton>
    <CoolButton isDanger>Button 3</CoolButton>
    <div className="signup"> 
    <Signup />
    </div>
    <Message isInfo title='Hello World'>
    Why do we always use the sentence hello world? <br></br> <strong>I really don't know 🤯 </strong>.
    </Message>
  </div>    
  );
};

export default App;
