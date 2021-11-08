
import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Addcontact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import { Component } from 'react';
import { CardDetail } from './Components/CardDetail';
import api from "./api/contact"
import contact from './api/contact';
import EditContacts from './Components/EditContacts';


function App() {

  const LOCAL_Key="contacts"
  const [contacts, setContacts] = useState([]);


  


  // const getdata = (contact) => {
  //    setContacts([...contacts, { id : uuid(), ...contact}])    
  // }



  const getdata = async (contact)=>{
    const request ={
      id: uuid,
      ...contact,
    }

    const sendData = await api.post("/contacts", request)
    setContacts ([...contacts , sendData.data])
  }


  const  removeContact = (id)=>{
    const newContactList = contacts.filter((contact)=>{
     
      return contact.id !== id;
    });
    setContacts(newContactList)
  } 



  const retrieveContacts = async ()=> { 
    const response = await api.get("/contacts")
    return response.data;
  }



  // useEffect( ()=>{
  //  const retrieve = JSON.parse(localStorage.getItem(LOCAL_Key));
  //  if(retrieve) setContacts(retrieve);
  // }, [])

  useEffect( ()=>{  
    const getallContacts = async ()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);

     
    }
    getallContacts();
  },[])



  useEffect( ()=>{

    // localStorage.setItem( LOCAL_Key , JSON.stringify(contacts))

  }, [contacts])

 
 const updateHandler = async (contact)=>{
      const update = await api.put(`/contacts/${contact.id}` , contact);

      setContacts(contacts.map(contact =>{
        return update.data

      }))
   }


  return (
    <div className="ui container">

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/add" render={ (props)=> <Addcontact {...props}  getContacts={getdata}/>}></Route>
          <Route path="/" exact render={ (props )=> <ContactList {...props} contact={contacts} remove={removeContact} />}></Route>
          <Route path={`/cardDetail/:id`} component={CardDetail} ></Route>
          <Route path={`/edit/:id`} render={(props)=><EditContacts  {...props}  EditContacts={updateHandler} /> } ></Route>
        </Switch>
      </Router>


      
    
      {/* <Addcontact getContacts={getdata}></Addcontact>
      <ContactList contact={contacts} remove={removeContact}></ContactList> */}
      
    </div>
  );
}

export default App;
