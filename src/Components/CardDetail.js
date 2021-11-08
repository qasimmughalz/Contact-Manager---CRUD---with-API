import React from 'react'
import {Link } from 'react-router-dom'
import user from '../images/user.png'

export const CardDetail = (props) => {

    const {name, email} = props.history.location.state.contact;   
    console.log(props)

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="image"></img>
                </div>

                <div className="content">
                        <div className="header">{name}    </div>
                        <div className="description">{email}</div>
                </div>

                <Link to="/">
                <button className="ui blue button center"> Back to Page</button>
            </Link>

            </div>

            
        </div>
    )
}
