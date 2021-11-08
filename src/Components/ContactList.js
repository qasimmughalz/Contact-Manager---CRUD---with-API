import React from 'react'
import { Link } from 'react-router-dom'
import { ContactCard } from './ContactCard'

const ContactList = (props) => {


    const deleteContactHandler = (id)=>{
    
        props.remove(id)
    };

 

    const list = props.contact.map((data)=>{
        return(
           <ContactCard contact={data} deleteContact={deleteContactHandler} key={data.id} ></ContactCard>
        )
    })


    


    return (
        <div className="ui celled list" style={{marginTop:"60px"}}>

            <Link to="/add"> <button className="ui button blue right">Add Contact</button> </Link>
           
            <h2>Contacts List</h2>
            {list}
        </div>
    )
}

export default ContactList
