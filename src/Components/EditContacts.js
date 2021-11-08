import react from 'react'
import { Link } from 'react-router-dom'

class EditContacts extends react.Component{
    constructor(props){
        super(props)
        const {id, name, email } = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        }
    }


    edit = (e)=>{
        
        e.preventDefault();

        if(this.state.name === "" || this.state.email === ""){
            alert("Add fields please ");
            return;
        }
        
        console.log(this.state)
        this.props.EditContacts(this.state)
        this.setState({name:"", email:""})
        this.props.history.push("/")
        
    };



    



    render(){
        return (
            <div className="ui main container" style={{marginTop:"60px"}}>
                <Link to="/"> <button className="ui button right ">Contact List</button></Link>
                <h2>Add Contact </h2>
                <form action="" className="ui form" onSubmit={this.edit}>
                
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text"  placeholder="Name" 
                        value={this.state.name}
                        onChange={(e)=>{ this.setState({name : e.target.value })}}/>
                    </div>

                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="text"  placeholder="Email"
                         value={this.state.email}
                         onChange={(e)=>{ this.setState({email : e.target.value })}}/>
                    </div>

                    <button className="ui button blue">Update</button>

                </form>
               
            </div>
        )
    }

}

export default EditContacts