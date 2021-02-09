import React from 'react'
import './compability.css'
const Comp = () => {
    return (
        <React.Fragment>
               {/* <div className="tableedit"> 
                   <h3> Red Blood cell compatibility Table </h3>
               </div> */}
               
              <div class="container" >
              <h2 className="tableheading" > Red Blood cell compatibility Table </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    Recipient blood type
                                </th>
                                <th colspan="8">
                                    Donor red blood cells must be:
                                </th>
                            </tr>
                           
                        </thead>
                        <tbody>
                            <tr>
                                <td class="edittable">
                                    O+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    O+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>      
                            <tr>
                                <td class="edittable">
                                    A-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>      
                            <tr>
                                <td class="edittable">
                                    A+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    A+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                
                            </tr>    
                            <tr>
                                <td class="edittable"> 
                                    B-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr> 
                            <tr>
                                <td class="edittable">
                                    B+
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    B+
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    -
                                </td>
                            </tr>    
                            <tr>
                                <td class="edittable">
                                    AB-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                   - 
                                </td>
                                <td>
                                    AB-
                                </td>
                                <td>
                                    - 
                                 </td>
                            </tr>   
                            <tr>
                                <td class="edittable">
                                    AB-
                                </td>
                                <td>
                                    O-
                                </td>
                                <td>
                                    O+
                                </td>
                                <td>
                                    A-
                                </td>
                                <td>
                                    A+
                                </td>
                                <td>
                                    B-
                                </td>
                                <td>
                                    B+
                                </td>
                                <td>
                                    AB-
                                </td>
                                <td>
                                    AB+
                                </td>
                            </tr>       
                        </tbody>
                    </table>
              <h4 className="tableheading2" > Plasma compatibility Table </h4>
                    <table class="table" id="secondtable">
                        <thead>
                            <tr>
                                <th>
                                    Recipient blood type
                                </th>
                                <th>
                                    Donor plasma must be:
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="edittable">
                                    AB
                                </td>
                                <td>
                                    AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    A
                                </td>
                                <td>
                                    A or AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    B
                                </td>
                                <td>
                                    B or AB
                                </td>
                            </tr>
                            <tr>
                                <td class="edittable">
                                    O
                                </td>
                                <td>
                                    O, A, B or AB
                                </td>
                            </tr>
                        </tbody>
                    </table>
              </div>
        </React.Fragment>
    )
}

export default Comp ;