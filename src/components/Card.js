import React from 'react';

import {toggleFormPut, refresh} from '../lib/lib';

import '../stylesheets/Card.css';

const axios = require('axios');

function Card(props) {
    async function deleteEmployee() {
        await axios.delete('http://127.0.0.1:8080/api/v1/employee/' + props.id);
        refresh();
    }

    function updateEmployee() {
        document.getElementById('form-input-name-put').value = props.name;
        document.getElementById('form-input-email-put').value = props.email;
        document.getElementById('form-input-jobPosition-put').value = props.jobPosition;
        document.getElementById('form-input-imgurl-put').value = props.imgurl;
        sessionStorage.setItem('update-id', props.id);
        toggleFormPut();
    }

    return (
        <div className={'card'}>
            <img src={props.imgurl} alt={'employee-profile-icon'}/>
            <h1>{props.name}, Id: {props.id}</h1>
            <h2>{props.email}</h2>
            <h2>{props.jobPosition}</h2>
            <button className={'delete'} onClick={deleteEmployee}>X</button>
            <button className={'update'} onClick={updateEmployee}>🖉</button>
        </div>
    );

}
export default Card;
