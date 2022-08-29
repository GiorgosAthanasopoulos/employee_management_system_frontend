import React from 'react';
import {closeForms} from '../lib/lib';

import '../stylesheets/Form.css';

function Form(props) {
    return (
        <div id={'form-' + props.id}>
            <form action={'javascript:;'} onSubmit={props.onSubmit}>
                <h1>{props.title}</h1>

                <label htmlFor={'name'}><b>Name</b></label>
                <input type={'text'} placeholder={'Enter name'} name={'name'} id={'form-input-name-' + props.id} required/>
                
                <label htmlFor={'email'}><b>Email</b></label>
                <input type={'text'} placeholder={'Enter email'} name={'email'} id={'form-input-email-' + props.id} required/>
                
                <label htmlFor={'jobPosition'}><b>Job Position</b></label>
                <input type={'text'} placeholder={'Enter job position'} name={'jobPosition'} id={'form-input-jobPosition-' + props.id} required/>
                
                <label htmlFor={'imgurl'}><b>Image URL</b></label>
                <input type={'text'} placeholder={'Enter image url'} name={'imgurl'} id={'form-input-imgurl-' + props.id} required/>
                
                <button className={'button'} id={'submit'} type={'submit'}>Submit</button>
                <button className={'button'} id={'cancel'} type={'cancel'} onClick={closeForms}>Cancel</button>
            </form>
        </div>
    );
}

export default Form;
