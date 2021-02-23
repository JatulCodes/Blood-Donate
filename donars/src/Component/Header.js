import React from 'react';
import './Header.css' 
const url = "https://blood-donr.herokuapp.com/register"

class Header extends React.Component{
    constructor(){
        super() 
         this.state = {
             donars:'' 
         }
    } 
    Activedonar=(data) => {
        if(data){
            const add = data.length
            return(
                <>
                 {data.length} 
                
                </>

            )
           
        }else{
            <span> connection Fail </span>
        }
 } 
    render(){
        return(
            <React.Fragment>
            <header id="headd">
                <div className="row" id="rowdesign"> 
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12"> 
                        <p id="edit"> Donate blood and be the reason of smile to many faces </p>
                    </div>
                    <div className=" col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <img id="image1" src="./image/blood1.jpg" width="10%" alt="icon"/>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <p className="active"> Active Donars <br/>  <p id="donars" > {this.Activedonar(this.state.donars)}  </p> </p>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <img id="image2" src="./image/blood.jpg" width="10%" alt="icon"/>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <p id="edit1" > Donate blood and be a  hero of someone's life </p> 
                    </div>
                </div> 
            </header> 
        </React.Fragment>
        )
    }

    componentDidMount(){
        fetch( url ,{method:'GET'}) 
        .then((res) => res.json())
        .then((data) => this.setState({donars:data}))
    }

}
export default Header  
