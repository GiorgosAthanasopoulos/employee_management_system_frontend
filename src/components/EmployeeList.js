import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Card from './Card';
import {closeForms} from '../lib/lib';

import '../stylesheets/EmployeeList.css';

function EmployeeList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getEmployees() {
            const response = await axios.get('http://127.0.0.1:8080/api/v1/employee/filter/', {
                headers: {
                    filter: sessionStorage.getItem('search-key')
                }
            });
            return await response.data;
        }

        closeForms();
        sessionStorage.setItem('search-key', '');
        
        setInterval(() => {
            getEmployees()
                .then(data => {
                    let cards = [];
                    for (let i = 0; i < data.length; i++) {
                        // TODO new line every 3 cards
                        cards.push(<Card name={data[i]['name']} email={data[i]['email']}
                                         jobPosition={data[i]['jobPosition']} id={data[i]['id']}
                                         imgurl={data[i]['imgurl']} key={i}/>);
                    }

                    setCards(cards);
                })
        }, 100);

    }, []);

    return (<div id={'employee-list'}>
        {cards}
    </div>);
}

export default EmployeeList;
