import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
require('dotenv').config();

if(!window.location.pathname?.includes('resume')) {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
} else {
    document.body.innerHTML =
    `
    <div style="background-color: #fff !important; width: 100vw; height: 100%;">
        <embed src="/resume/resume_page_1.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
        <embed src="/resume/resume_page_2.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
        <embed src="/resume/resume_page_3.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
    </div>
    `;
}
