import React from 'react';

import {connect} from 'react-redux';
import {signin,signout} from '../Actions/index';
class Login extends React.Component{
    
    componentDidMount(){
       
       window.gapi.load("client:auth2",()=>{
           window.gapi.client.init({
               clientId : "523478280370-e46p8t44bgc2q1s15jb08ilok7oinijq.apps.googleusercontent.com",
               scope : "email"
           }).then(()=>{
               this.auth = window.gapi.auth2.getAuthInstance();
               this.onauthchange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onauthchange);
           }
             

           );
       })
    }
    onauthchange=(issignedin)=>{
       
        if(issignedin)
        {
            this.props.signin(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signout();
        }

    }
    dosignin=()=>{
        this.auth.signIn();
    }
    dosignout=()=>{
        this.auth.signOut();
    }
    
    
    render(){
       
        
      if(this.props.signState.signstatus==null)
      {
          return  (<div>loading.....</div>);
      }
      else if(this.props.signState.signstatus==true)
      {
          return (<div>signed in <button onClick={this.dosignout} className="btn btn-primary">Sign out</button> </div>);
      }
      else{
          return (<div><button onClick={this.dosignin} className="btn btn-secondary">Login</button></div>);
      }
    }
}
const mapstatetoprops=(state)=>{
    
    return {
        signState : state.signstate
    }

}
export default connect(mapstatetoprops,{
    signin :signin,
    signout : signout
    
    

})(Login);
