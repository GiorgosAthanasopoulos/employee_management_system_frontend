import '../stylesheets/Navbar.css';
import React from 'react';

function authors_github_clicked() {
    window.open('https://www.github.com/giorgosathanasopoulos', '_blank');
}

function source_code_clicked() {
    window.open('https://www.github.com/giorgosathanasopoulos/employee_management_system_frontend', '_blank');
}

function Navbar() {
    return(
        <div id={'navbar'}>
            <h1 className={'text'}>Employee Management System</h1>

            <div>
                <button className={'button-link'} onClick={source_code_clicked}>Source Code</button>
                <button className={'button-link'} onClick={authors_github_clicked}>Author's Github</button>
            </div>
        </div>
    );
}

export default Navbar;
