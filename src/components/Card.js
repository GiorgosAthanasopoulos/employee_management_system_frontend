import '../stylesheets/Card.css';

import React from 'react';

const axios = require('axios');

function Card(props) {
    async function deleteEmployee() {
        await axios.delete('http://127.0.0.1:8080/api/v1/employee/' + props.id);
        window.location.reload();
    }
    
    return (
        <div className={'card'}>
            <img src={props.imgurl} alt={'employee-profile-icon'}/>
            <h1>{props.name}, Id: {props.id}</h1>
            <h2>{props.email}</h2>
            <h2>{props.jobPosition}</h2>
            <button className={'delete'} onClick={deleteEmployee}>X</button>
        </div>
    );

}
export default Card;
