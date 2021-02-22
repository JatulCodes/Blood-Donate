import React from 'react' 
import './postregister.css'

const Postrequire = (props) => {
    const Booking = ({Listing}) =>{
        if(Listing){
            return Listing.map((item) => {
                return(
                    <tr>
                    <td> {item.bloodgroup} </td>
                    <td> {item.units} </td>
                    <td> {item.reason} </td>
                    <td> {item.requirementbefore} </td>
                    <td> {item.hospitalname} </td>
                    <td> {item.patientname} </td>
                    <td> {item.patientage} </td>
                    <td> {item. mobileno} </td>
                </tr>
                )
            })
        }else{
            return(
                <div>
                    <img src="/image/loader.gif"/>
                </div>
            )
        }
    }  
    return(
        <React.Fragment>
            <div className="container">
                <h2> <center> FOLLOWING BLOOD REQUIRED</center>  </h2>
                        <table className="table" id="donarrtable">
                            <thead>
                                <tr>
                                <th> Blood Group </th>
                                <th> No of Units </th>
                                <th> Reason for Requirement </th>
                                <th> Required Before </th>
                                <th> Hospital Name </th>
                                <th> Patient Name </th>
                                <th> Patient Age</th>
                                <th> Mobileno </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Booking(props)} 
                            </tbody>
                        </table> 
            </div>
        </React.Fragment>
    )
}

export default Postrequire