import React from 'react';
import "bulma/css/bulma.css";
import './CoolButton.css'

function CoolButton({ children, isSmall, isDanger, isPrimary, isSuccess, isInfo}) {
return (
    
    <div> 
    {isSmall===true ? <button class="button is-small">{children}</button>
    : isDanger===true ? <button class="button is-danger">{children}</button> 
    : isSuccess===true ? <button class="button is-success">{children}</button> 
    : isPrimary===true ? <button class="button is-primary">{children}</button> 
    : isInfo===true ? <button class="button is-info">{children}</button> 
    : <p> no class, no button</p>}
    </div>
    
)
}

export default CoolButton;