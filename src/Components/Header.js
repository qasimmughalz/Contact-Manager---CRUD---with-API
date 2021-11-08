import react from 'react'


const Header = ()=>{
    return (
        <div className="ui fixed  " style={{padding:"25px 20px" , boxShadow :"0 1px 5px 0 lightgrey", background:"lightgrey"}}>
            <div className="ui container " style={{textAlign:"center"}}>
                <h2 >Contact Manager</h2>
            </div>

        </div>
    )
}

export default Header