import React from 'react'
import Donarlist from './donarlist'
import './donarlist.css'

const url = "https://blood-donr.herokuapp.com/register"

class Donarapi extends React.Component{
    constructor(){
        super()
        
            this.state = {
                list : ''
            }
    } 
    render(){
        return(
            <React.Fragment>
                    <div className="groupfilter" >
                        <center> <b> Blood Group </b> </center> <br/>
                        <label> <input type="radio" value="" name="group"/> 
                            All 
                        </label> <br/>
                        <label> <input type="radio" value="1" name="group"/> 
                            A+
                        </label><br/>
                        <label>  <input type="radio" value="2" name="group"/> 
                            A-
                        </label> <br/>
                        <label> <input type="radio" value="3" name="group"/>
                            B+
                        </label> <br/>
                        <label> <input type="radio" value="4" name="group"/>
                            B- 
                        </label> <br/>
                        <label> <input type="radio" value="5" name="group"/> 
                            AB+
                        </label> <br/>
                        <label> <input type="radio" value="5" name="group"/> 
                            AB-
                        </label> <br/>
                        <label> <input type="radio" value="5" name="group"/> 
                            O+
                        </label> <br/>
                        <label> <input type="radio" value="5" name="group"/> 
                            O-
                        </label> 
                    </div>
                    <Donarlist Listing = {this.state.list} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({list:data}))
    }
}

export default Donarapi
