import Navbar from './Navbar';
import EmployeeList from './EmployeeList';
import Footer from './Footer';
import Form from './Form'
import React from 'react';
import {toggleForm} from '../lib/lib';

function App() {
    return (
        <>
            <Navbar/>
            <EmployeeList/>
            <Form/>
            <Footer/>
        </>
    );
}

export default App;
