import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app';
// import Resume from './resume';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config();

console.log('pathname: ', window.location.pathname, ' matches? ', window.location.pathname?.includes('resume'));

/*if(window.location.pathname?.includes('resume')) {
    ReactDOM.render(<Resume />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}*/
// ReactDOM.render(window.location.pathname?.includes('resume') ? <Resume /> : <App />, document.getElementById('root'));

if(!window.location.pathname?.includes('resume')) {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
} else {
    // window.location.href = '/resume/resume.html';
    // ReactDOM.render()
    // document.createElement('', )
    document.body.innerHTML = `
    <div style="background-color: #fff !important; width: 100vw; height: 100%;">
        <embed src="/resume/resume_page_1.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
        <embed src="/resume/resume_page_2.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
        <embed src="/resume/resume_page_3.svg" style="width: 100vw; height: 100%; display: block; margin-left: auto; margin-right: auto;"/>
    </div>
    `;
}
