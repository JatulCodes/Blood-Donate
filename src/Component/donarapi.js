import React from 'react'
import Donarlist from './donarlist'

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
