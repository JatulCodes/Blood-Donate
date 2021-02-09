import React from 'react'
import './searchdonar.css' 

<alert> hiiii  </alert>
class Searchdonar extends React.Component {

    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <select  className ="optionstyle">
                        <option  selected disabled > Select Blood Group which you require </option>
                        <option> A+ </option>
                        <option> A- </option>
                        <option> B+ </option>
                        <option> B- </option>
                    </select> 
                </div> 
                <div className="panel panel-success ">
                    <div className="panel-heading">Blood Donors List</div>
                    <div className="panel-body">
                    <form>
                        
                    </form>
                    
                    </div>
                </div>
            </div>
        )
    }
   
}

export default  Searchdonar  ;