import React from 'react'
import img from '../images/user.png'
import {Link } from 'react-router-dom'
import { CardDetail } from './CardDetail';

export const ContactCard = (props) => {

    const {id, name,email} = props.contact;

    return (
        <div>

            <div className="item" style={{display:"flex", justifyContent:"space-between",margin:"20px" ,borderBottom:"0.5px solid lightgrey"}}>
        
                <div className="content">

                    <Link to={{pathname:`/CardDetail/${id}` , state:{contact: props.contact}}}>
                        <img src={img} className="avatar image ui" alt="" />
                        <div className="header">{name}</div>
                        <div >{email}</div>
                    </Link>
                   
                </div>

                <div>

                <Link to={{pathname:`/edit/${id}`, state:{contact : props.contact} }}>
                    <i className="icon edit outline alternate" style={{color:"red"}}        ></i>
                </Link>

                <i className="icon trash outline alternate" style={{color:"red"}}        ></i>
                </div>
            
           
            </div>
            
        </div>
    )
}

