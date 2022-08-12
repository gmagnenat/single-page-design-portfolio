import React from 'react';
import './BookCall.scss';

const BookCall = () => {
    return (
        <div className="bookCall">
            <h3 className="bookCall__title">Book a call with me</h3>
            <p className="bookCall__body">
                I’d love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
            </p>
            <button className="btn btn--alt">Free consultation</button>
        </div>
    );
};

export default BookCall;
