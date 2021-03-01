import React from 'react' ;
import {Link} from 'react-router-dom';
import './donarlist.css' 
const Donarlist = (props) =>{
    const Booking = ({Listing}) =>{
        if(Listing){  
            if(Listing.length>0){
                return Listing.map((item) => {
                    return(
                        <tr>
                        <td> {item.name} </td>
                        <td> {item.DOB} </td>
                        <td> {item.bloodgroup} </td>
                        <td> {item.weight} </td>
                        <td> {item.area} </td>
                        <td> <input type="button" id="editdonar"  value="Edit"/> </td>
                        <Link to="/del"> <td> <input type="button" id="deletedonar" value="Delete"/> </td>  </Link> 
                    </tr>
                    )
                })
            }
            else{
                return(
                    <tr> <td colSpan="7"> <h3> Donar Not Available </h3> </td>  </tr>
                )
            }
        }
        else{
            return(
                <div>
                    <img src="/image/loader.gif"/>
                </div>
            )
        } 
    } 
        return(
            <React.Fragment>
                <div className="container" id="tabledesign">
                        <h3>   Donar  List   </h3>
                        <table className="table" id="donartable">
                            <thead>
                                <tr>
                                {/* <th> OrderId </th> */}
                                <th> Name </th>
                                {/* <th> Gender </th> */}
                                <th> DOB </th>
                                <th> Bloodgroup </th>
                                <th> Weight </th>
                                <th> Area </th>
                                <th> Edit Donar </th>
                                {/* <th> Mobileno </th> */}
                                <th> Delete Donar </th>
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

export default Donarlist

