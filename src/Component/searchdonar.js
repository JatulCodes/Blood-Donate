import React from 'react'
import './searchdonar.css' 
const url = "https://blood-donr.herokuapp.com/group"
class Searchdonar extends React.Component {
        constructor(){
            super()

                this.state = {
                    bloodtype: ''
                }
        }
            
        rendergroup=(data) => {
                if(data){
                    return data.map((item) => {
                        return(
                            <option value= {item.Blood_Group} ></option>
                        )
                    })
                }else{
                    <span> connection Fail </span>
                }
         }
    render(){
        // console.log(this.state.bloodtype)
        return (
            <div className="container">
                <div className="jumbotron">
                    <select  className ="optionstyle">
                        <option  selected disabled > Select Blood Group which you require </option>
                        {this.rendergroup(this.state.bloodtype)}
                    </select> 
                </div> 
                <div className="panel panel-success ">
                    <div className="panel-heading">Blood Donors List</div>
                    <div className="panel-body">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th> OrderId </th>
                            <th> Name </th>
                            <th> DOB </th>
                            <th> Bloodgroup </th>
                            <th> Weight </th>
                            <th> Area </th>
                            <th> Mobileno </th>
                            </tr>
                        </thead>
                        <tbody>
                             
                        </tbody>
                    </table>
                    
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({bloodtype:data}))
    }
   
}

export default  Searchdonar  ;