import React from 'react';
import {connect} from 'react-redux';
import {getstream,updatestream} from '../../Actions/index';
import Streamform from './Streamform';

class Streamedit extends React.Component{
    componentDidMount(){
        this.props.getstream(this.props.match.params.id);

    }
    editsubmit=(formvalues)=>{
        this.props.updatestream(this.props.match.params.id,{...formvalues,userId:this.props.currentuser});
    }

    render()
    {
        if(!this.props.stream)
        {
            return (
                <div>Loading...</div>
            );
        }
      
        return (
           <Streamform initialValues={{title : this.props.stream.title,description:this.props.stream.description}} onsubmit={this.editsubmit}/>
        );
    }
}
const mapstatetoprops=(state,ownProps)=>{
    return {
        stream : state.streamReducer[ownProps.match.params.id],
        currentuser : state.signstate.userid
    }
}

export default connect(mapstatetoprops,{
    getstream : getstream,
    updatestream : updatestream

})(Streamedit);