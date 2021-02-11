import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from './Home'
import Eligibility from './eligibility' ;
import Comp  from './compability'
import Blood  from './Bloodfacts'
import Register  from './donarregister'
import Searchdonar  from './searchdonar'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Nav'
import Postdisply from './Post'
import Donarapi from './donarapi'

const Routing = () => {
    return(
       
            <BrowserRouter>
             <div>
                <Navbar/>
                <Header/> 
                <Route exact path='/' component={Home}/>
                <Route exact path='/Home' component={Home}/>
                <Route  path='/Home/:id' component={Postdisply}/>
                <Route  path ='/ELIGIBILITY' component={Eligibility}/>
                <Route  path ='/Compability' component={Comp}/> 
                <Route  path ='/Bloodfacts' component={Blood}/>
                <Route  path ='/Donarregister' component={Register}/>
                <Route  path ='/Searchdonar' component={Searchdonar}/> 
                <Route  path ='/bookinglist' component={Donarapi}/> 
                <Footer/>
            </div>
            </BrowserRouter>
        
    )
}

export default Routing