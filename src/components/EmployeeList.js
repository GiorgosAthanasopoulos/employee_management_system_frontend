import React, {useEffect, useState} from 'react';
import Card from './Card';
import {closeForms} from '../lib/lib';

import '../stylesheets/EmployeeList.css';

const axios = require('axios');

function EmployeeList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getEmployees() {
            const response = await axios.get('http://127.0.0.1:8080/api/v1/employee/');
            return await response.data;
        }

        getEmployees().then(data => {  
            closeForms();
            
            let cards = [];
            for (let i = 0; i < data.length; i++) {
                // TODO new line every 3 cards
                cards.push(
                    <Card name={data[i]['name']} email={data[i]['email']}
                          jobPosition={data[i]['jobPosition']} id={data[i]['id']}
                          imgurl={data[i]['imgurl']} key={i}/>
                );
            }
            setCards(cards);
        });
    }, []);

    return (
        <div id={'employee-list'}>
            {cards}
        </div>
    );
}

export default EmployeeList;
