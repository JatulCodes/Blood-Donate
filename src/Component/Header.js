import React from 'react';
import './Header.css' 

const Header = ()=>{
    return(
       <React.Fragment>
            <header id="headd">
                <div className="row"> 
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12"> 
                        <p id="edit"> Donate blood and be the reason of smile to many faces </p>
                    </div>
                    <div className=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <img id="image1" src="./image/blood1.jpg" width="10%" alt="icon"/>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
export default Header  
