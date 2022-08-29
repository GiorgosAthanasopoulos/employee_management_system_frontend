import Navbar from './Navbar';
import EmployeeList from './EmployeeList';
import Footer from './Footer';
import Form from './Form'
import React from 'react';
import {refresh} from '../lib/lib';

const axios = require('axios');

function App() {
    async function createEmployee() {
        let name = document.getElementById('form-input-name-post').value;
        let email = document.getElementById('form-input-email-post').value;
        let jobPosition = document.getElementById('form-input-jobPosition-post').value;
        let imgurl = document.getElementById('form-input-imgurl-post').value;
        
        await axios.post('http://127.0.0.1:8080/api/v1/employee', {
            name: name,
            email: email,
            jobPosition: jobPosition,
            imgurl: imgurl
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        
        refresh();
    }
    
    async function updateEmployee() {
        let name = document.getElementById('form-input-name-put').value;
        let email = document.getElementById('form-input-email-put').value;
        let jobPosition = document.getElementById('form-input-jobPosition-put').value;
        let imgurl = document.getElementById('form-input-imgurl-put').value;
        
        await axios.put('http://127.0.0.1:8080/api/v1/employee/' + sessionStorage.getItem('update-id'), {}, {
            headers: {
                name: name,
                email: email,
                jobPosition: jobPosition,
                imgurl: imgurl,
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        
        refresh();
    }
    
    return (
        <>
            <Navbar/>
            <EmployeeList/>
            <Form id={'post'} title={'Create employee'} onSubmit={createEmployee}/>
            <Form id={'put'} title={'Update employee'} onSubmit={updateEmployee}/>
            <Footer/>
        </>
    );
}

export default App;
