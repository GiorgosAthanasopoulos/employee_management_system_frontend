import React from 'react';

import {toggleFormPost} from '../lib/lib';

import '../stylesheets/Footer.css';

function Footer() {
    return (
        <footer id={'footer'}>
            <h1 id={'copyright'}>&copy;Giorgos Athanasopoulos@<a id={'github-link'} href={'https://www.github.com/'} target={'_blank'}>Github.com</a></h1>
            <button id={'create-employee'} onClick={toggleFormPost}>Create Employee</button>
        </footer>
    );
}

export default Footer;
