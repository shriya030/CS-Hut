import React from 'react';
import './Feedback.css';

export default function Feedback() {
    return (
        <section classNameName="section">
            <div className="container">
                <div className="parent_div " >
                    <div className="child_div">
                        <h1 className="h1tag" >FeedBack</h1>
                    </div>

                    <form className="form">
                        <div className="form-group">
                            <label className="labels">Full Name</label>
                            <input type="text" className="form-control boder shadow" placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label className="labels">Email address</label>
                            <input type="email" className="form-control boder shadow" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className="form-group">
                            <label className="labels">Your Feed Back </label>
                            <textarea className="form-control boder shadow" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div><br></br>
                        <button type="button" className="btn" style={{ background: "skyblue" }}><span>Submit</span></button>
                    </form>
                </div>
            </div>
        </section>
    )
}