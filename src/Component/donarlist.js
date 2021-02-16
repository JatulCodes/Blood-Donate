import React from 'react' ;
import './donarlist.css' 
const Donarlist = (props) =>{
    const Booking = ({Listing}) =>{
        if(Listing){
            return Listing.map((item) => {
                return(
                    <tr>
                    {/* <td> {item._id} </td> */}
                    <td> {item.name} </td>
                    {/* <td> {item.gender} </td> */}
                    <td> {item.DOB} </td>
                    <td> {item.bloodgroup} </td>
                    <td> {item.weight} </td>
                    <td> {item.area} </td>
                    <td> {item.mobileno} </td>
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

export default Donarlist

