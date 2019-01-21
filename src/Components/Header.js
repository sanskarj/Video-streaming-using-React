import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import {connect} from 'react-redux';
class Header extends React.Component{
    rendercreate=()=>{
        if(this.props.signininfo===true)
        {
            return (
                <Link to ="/create"> create stream </Link>
            );
            
        }
        else{
            return (
                <div></div>
            );
        }
    }

    render(){
       return (<div className="row header-row align-items-center">
           <div className="col-md-6">
  
               <Link className="para para-1" to="/">Streamer</Link>
           </div>
           <div className="col-md-2">
               <Link className="para para-2" to="/">Streams</Link>
           </div>
           <div className="col-md-2">
              {this.rendercreate()}
           </div>
           
           <div className="col-md-2">
               <Login />
           </div>
        </div>);
    }
}
const mapstatetoprops=(state)=>{
    return {
        signininfo : state.signstate.signstatus 
    }
}
export default connect(mapstatetoprops)(Header);