import React, {useEffect, useState} from 'react';
import Card from './Card';

import '../stylesheets/EmployeeList.css';

const axios = require('axios');

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function getEmployees() {
            const response = await axios.get('http://127.0.0.1:8080/api/v1/employee/');
            return await response.data;
        }

        getEmployees().then(data => setEmployees(data));
    }, []);
    
    console.log(employees[0]);
    let cards = [];
    for(let i=0; i<employees.length; i++) {
        let obj = JSON.parse(employees[i]);
        cards.push(
            <Card name={obj.name} email={obj.email} 
            jobPosition={obj.jobPosition} imgurl={obj.imgurl}
            key={i}/>
        );
    }
    
    return (
        <div id={'employee-list'}>
            {cards}
        </div>
    );
}

export default EmployeeList;
