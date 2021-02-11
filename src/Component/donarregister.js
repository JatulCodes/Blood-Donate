import React from 'react'
import './donarregister.css'
const url = "https://blood-donr.herokuapp.com/registration"

class Register extends React.Component {
    constructor(){
        super()

            this.state = {
                register:''
            }

    }
    render(){
        return (
            <div class="container"  id="form">
               <h2> <center>DONAR REGISTER  </center> </h2>
                 <div class="form-group">
                     <label> Name </label>
                     <input type="text" placeholder="Enter Name"  
                     class="form-control"/>
                 </div>
                 <div class="form-group">
                     <label  > Gender 
                     <input type="radio" value="Male"  name="gender"  /> Male
                     <input type="radio" value="Female"  name="gender" /> Female
                 </label>
                 </div>
                 <div class="form-group">
                     <label> Date Of Birth </label>
                     <input type="date" class="form-control"/>
                 </div>
                 <div class="form-group">
                     <label> Blood Group </label>
                     <select class="form-control" >
                         <option disabled selected > select blood group </option>
                         <option> A+ </option>
                         <option> A- </option>
                         <option> B+ </option>
                         <option> B- </option>
                         <option> AB+ </option>
                         <option> AB- </option>
                         <option> O+ </option>
                         <option> O- </option>
                     </select>
                 
                 </div>
                 <div class="form-group">
                     <label> weight </label>
                     <input type="number" class="form-control" placeholder="Enter Weight" />
                     
                 </div>
                 <div class="form-group">
                     <label> Area </label>
                     <input type="text" class="form-control" placeholder="Enter Area" />
                 </div>
                 <div class="form-group">
                     <label> Mobile no </label>
                     <input type="number" class="form-control" placeholder="Mobile number" />
                 </div>
                 <div class="btn btn-success btn btn-lg" >
                     Register
                 </div>
           </div>
        )
    }
  
}

export default  Register  ;