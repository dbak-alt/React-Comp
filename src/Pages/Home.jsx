import React from 'react';
import '../styles/home.css';
import arrow from '../../src/assets/arrowright.png';

function Home() {
    return (
        <div className="home">
            <h1>
                Welcome to <span className="react-comp">react-comp</span> - React utility package
            </h1>

            <p>A comprehensive React utility package designed to simplify your development process and enhance your web applications.
                This project aims to provide a robust collection of reusable React components,
                including buttons, modals, and more, all meticulously crafted to meet modern design standards and best practices.
            </p>

            <button className="cta-button">
                <p className='start-button-text'>Get Started</p>
                <img src={arrow} className="arrow-icon" alt="Arrow" />
            </button>
        </div>
    );
}

export default Home;
