import React from 'react';
import {poststream} from '../../Actions/index';
import {connect}  from 'react-redux';
import Streamform from './Streamform';

class Streamcreate extends React.Component{
      onformsubmit=(formvalues)=>{
          this.props.poststream(formvalues);
         

      }
      render(){
          return(
              <div className="streamcreate">
              <div className="heading">
                 <h3 className="create-head">Create a Stream</h3>
              
              </div>
              <Streamform onsubmit={this.onformsubmit} />
              </div>
          );
      }
      

  

}
export default connect(null,{
    poststream : poststream
})(Streamcreate);