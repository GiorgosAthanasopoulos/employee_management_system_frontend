import '../stylesheets/Card.css';

import React from 'react';

function Card(props) {
    return (
        <div className={'card'}>
            <img src={props.imgurl} alt={'employee-profile-icon'}/>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.jobPosition}</h2>
        </div>
    );
}

export default Card;
