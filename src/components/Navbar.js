import React from 'react';

import '../stylesheets/Navbar.css';

function authors_github_clicked() {
    window.open('https://www.github.com/giorgosathanasopoulos', '_blank');
}

function source_code_clicked() {
    window.open('https://www.github.com/giorgosathanasopoulos/employee_management_system', '_blank');
}

function search_value_changed() {
    sessionStorage.setItem('search-key', document.getElementById('search-bar').value);
}
    
function Navbar() {
    return(
        <div id={'navbar'}>
            <h1>Employee Management System</h1>

            <div>
                <input type={'text'} id={'search-bar'} placeholder={'Filter by name...'} onChange={search_value_changed}/>
                <button className={'button-link'} onClick={source_code_clicked}>Source Code</button>
                <button className={'button-link'} onClick={authors_github_clicked}>Author's Github</button>
            </div>
        </div>
    );
}

export default Navbar;
