import React from "react";
import "bulma/css/bulma.css";
import './Message.css';

function Message ({children, title}) {
return (
<div> 
<article class="message is-info">
  <div class="message-header">
    <p>{title}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {children}
  </div>
</article>
</div>
)
}

export default Message;