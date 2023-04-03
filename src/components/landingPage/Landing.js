import React from 'react';
import {Link} from 'react-router-dom'
import './Landing.css'

function Landing(props) {

    return (
        <div style={{backgroundColor: 'white'}}>
            <h2>WHO'S WATCHING?</h2>
            <div className='userList'>
            <Link to={'/catalog'}>
                <div style={{backgroundColor: 'lightgreen',}} className='userBox'>
                    <h2>{props.users[0]}</h2>
                </div>
            </Link>
            <Link to={'/catalog'}>
                <div style={{backgroundColor: 'yellow',}} className='userBox'>
                    <h2>{props.users[1]}</h2>
                </div>
            </Link>
            <Link to={'/catalog'}>
                <div style={{backgroundColor: 'lightred',}} className='userBox'>
                    <h2>{props.users[2]}</h2>
                </div>
            </Link>
            <Link to={'/catalog'}>
                <div style={{backgroundColor: 'lightblue',}} className='userBox'>
                    <h2>{props.users[3]}</h2>
                </div>
            </Link>
            </div>
        </div>
    )
}


export default Landing