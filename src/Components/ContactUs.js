import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
    return ( <
        section classNameName = "section" >
        <
        div className = "container" >
        <
        div className = "parent_div " >
        <
        div className = "child_div" >
        <
        h1 className = "h1tag" > contact us < /h1> <
        /div>

        <
        form className = "form"
        action = "https://formcarry.com/s/S2thQbCqEvW"
        method = "POST" >
        <
        div className = "form-group" >
        <
        label className = "labels" > Full Name < /label> <
        input name = "user-name"
        type = "text"
        className = "form-control boder shadow"
        placeholder = "John Doe" / >
        <
        /div>

        <
        div className = "form-group" >
        <
        label className = "labels" > Email address < /label> <
        input name = "email"
        type = "email"
        className = "form-control boder shadow"
        id = "exampleFormControlInput1"
        placeholder = "name@example.com" / >
        <
        /div>

        <
        div className = "form-group" >
        <
        label className = "labels" > message < /label> <
        textarea name = "message"
        className = "form-control boder shadow"
        id = "exampleFormControlTextarea1"
        rows = "3" > < /textarea> <
        /div><br></br >
        <
        button type = "submit"
        className = "btn"
        style = {
            { background: "skyblue" } } > < span > Submit < /span></button >
        <
        /form> <
        /div> <
        /div> <
        /section>
    )
}