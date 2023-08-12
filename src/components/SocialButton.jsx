import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

export default function SocialButton() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="circle-container">
                <div className="circle-icon">
                    <i className="bi bi-facebook text-dark fs-2"></i>
                </div>
            </div>
            <div className="circle-container">
                <div className="circle-icon">
                    <i className="bi bi-github text-dark fs-2"></i>
                </div>
            </div>
            <div className="circle-container">
                <div className="circle-icon">
                    <i className="bi bi-linkedin text-dark fs-2"></i>
                </div>
            </div>
        </div>
    );
}

