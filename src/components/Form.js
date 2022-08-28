import React from 'react';
import {toggleForm} from '../lib/lib';

import '../stylesheets/Form.css';

function Form(props) {
    async function submit() {  
        toggleForm();
        // TODO post - put
        window.location.reload();
    }

    return (
        <div id={'form'}>
            <form action={'javascript:;'} onSubmit={submit}>
                <h1>{props.title}</h1>

                <label htmlFor={'name'}><b>Name</b></label>
                <input type={'text'} placeholder={'Enter name'} name={'name'} required/>
                
                <label htmlFor={'email'}><b>Email</b></label>
                <input type={'text'} placeholder={'Enter email'} name={'email'} required/>
                
                <label htmlFor={'jobPosition'}><b>Job Position</b></label>
                <input type={'text'} placeholder={'Enter job position'} name={'jobPosition'} required/>
                
                <label htmlFor={'imgurl'}><b>Image URL</b></label>
                <input type={'text'} placeholder={'Enter image url'} name={'imgurl'} required/>
                
                <button className={'button'} id={'submit'} type={'submit'}>Submit</button>
                <button className={'button'} id={'cancel'} type={'cancel'} onClick={toggleForm}>Cancel</button>
            </form>
        </div>
    );
}

export default Form;
