import React from 'react'
import './delete.css'
 class Deldonar extends React.Component{
    constructor(){
        super()
    } 
    render(){ 
        return(
            <div className="container" id="delpage">
                <p id="deltext"> If you want to cancel your registration, then select the question and answer that you had done at the time of registration to find out that you are the same donar.... </p>
                 <div class="form-group"> 
                     <label> Select question </label> 
                     <select class="form-control"  autoComplete="off" required  >
                         <option  selected > Select question </option> 
                         <option> What is your favourite five digits.... </option> 
                         <option> What is your friend name... </option> 
                         <option> What is your favourite book name... </option> 
                     </select>
                 </div> 
                 <div class="form-group">
                     <label> Answer the question  </label>
                     <input type="text" name="answer"  class="form-control" placeholder="Answer the question for any change after register.... " autoComplete="off" required />
                 </div>
                 <div>
                     <input class="btn btn-danger btn btn-lg"  id="deldon"  type="button" value="Delete"/>
                 </div>
            </div>
        )
    }
 }

 export default Deldonar