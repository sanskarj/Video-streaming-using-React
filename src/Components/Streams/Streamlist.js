import React from 'react';
import {connect} from 'react-redux';
import {getlistofstreams} from  '../../Actions/index';
import {Link} from  'react-router-dom';
import {deleteaction} from '../../Actions/index';
class Streamlist extends React.Component{
    componentDidMount(){
          this.props.getlistofstreams();
    }
    renderlist=()=>{
        return this.props.streams.map((element)=>{
            return (
                <div className="stream-container">
                   <div className="details-container">
                    <div className="image">
                        <img src="image.jpg" className="image-1"/>
                    </div>
                    <div className="stream-des">
                       <Link to ={`/show/${element.id}`}><h5 className="stream-title">
                            {element.title}
                        </h5></Link>
                        <p className="stream-description">
                            {element.description}
                        </p>
                    </div>
                </div>
                {this.deleteandedit(element)}
                </div>
            );
        });
    }
     deleteandedit=(element)=>{
        if(element.userId===this.props.currentuser)
        {
                    return(<div className="btn-container"> <Link to={`/delete/${element.id}`}> <button className="delete button btn btn-danger" >Delete</button></Link>
               <Link to={`/edit/${element.id}`}><button className="edit-button btn btn-primary">Edit</button></Link>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }
    
    render(){
        return (
            <div className="main-stream-container">

            {this.renderlist()}
            </div>
        );
    }

}
       
const mapstatetoprops=(state)=>{
      return {
          streams : Object.values(state.streamReducer),
          currentuser  : state.signstate.userid
      }
}

export default connect(mapstatetoprops,{
    getlistofstreams : getlistofstreams,
    deleteaction :deleteaction
})(Streamlist);