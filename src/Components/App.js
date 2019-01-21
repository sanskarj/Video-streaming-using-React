import React from 'react';
import {Router,Route,Link,HashRouter} from 'react-router-dom';
import Streamcreate from './Streams/Streamcreate';
import Streamedit from './Streams/Streamedit';
import Streamshow from './Streams/Streamshow';
import Streamlist from './Streams/Streamlist';
import Streamdelete from './Streams/Streamdelete';
import Header from './Header';
import history from '../history';




const App =()=>{
    return (
        
    <div className="container">
         
         <Router history={history}>
         <div className="main-container">
                 <Header />
                <Route path="/create" exact component={Streamcreate} />
                <Route path="/show/:id" exact component={Streamshow} />
                <Route path="/delete/:id" exact component={Streamdelete} />
                <Route path="/" exact component={Streamlist} />
                <Route path="/edit/:id" exact component={Streamedit} />
           
           </div>
         </Router>
         
    </div>
   );
}
export default App;