import React from 'react' 
import './Post.css'

class Postdisply extends React.Component {
    render(){
        return(
            <React.Fragment>
                 <form>
                 <div class="container"  id="form" className="row">
                    <h2> <center> Post Your Requirement </center> </h2>
                   
                    <div className="col-md-4 col-sm-4 col-xs-4" id="form1">        
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
                            <label> No of Units </label>
                            <input type="number" required class="form-control" placeholder="No of unit require blood" />
                        </div> 
                        <div class="form-group">
                            <label> Reason for Requirement </label>
                            <input type="text" class="form-control" placeholder="Reason for Requirement" />
                        </div>
                        <div class="form-group">
                            <label> Required Before </label>
                            <input type="text" class="form-control" placeholder="Required Before" />
                        </div> 
                        <div class="form-group">
                            <label> Hospital Name </label>
                            <input type="text" class="form-control" placeholder=" Hospital Name" />
                        </div>
                        <div class="form-group">
                            <label> Mobile no </label>
                            <input type="number" class="form-control" placeholder="Mobile number" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4" id="form2" >
                    <div class="form-group">
                            <label> Patient Name </label>
                            <input type="text" placeholder="Patient Name"  
                            class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label> Patient Age </label>
                            <input type="number" class="form-control" placeholder="Patient age" />
                        </div> 
                        <div class="form-group">
                            <label> Date Of Birth </label>
                            <input type="date" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label> Gender 
                            <input type="radio" value="Male"  name="gender"  /> Male
                            <input type="radio" value="Female"  name="gender" /> Female
                        </label>
                        </div>
                    </div>
                    <br/>
                    </div>   
                    <input id="submit" type="submit" value="Submit"/>
                    
                    </form>
                 
              
             
            </React.Fragment>
        )
    }
}

export default Postdisply