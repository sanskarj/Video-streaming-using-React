import React from 'react';
import ReactDom from 'react-dom';
import {deletestream,getstream} from '../../Actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from '../Modal';
class Streamdelete extends React.Component{
    rendermodal=()=>{
        const buttons = (
            <React.Fragment>
              <button className="btn btn-primary" onClick={()=>{
                  this.props.deletestream(this.props.match.params.id);
              }}>Yes</button>
              <Link to ="/"> <button className="btn btn-danger">No</button></Link>
             </React.Fragment> 
        );
        return (
            <Modal path='/' que='Are you sure you want to delete this stream?' buttons = {buttons} />
           
        );
    }
    componentDidMount(){
        this.props.getstream(this.props.match.params.id);
    }
    render(){
        return ReactDom.createPortal(
            this.rendermodal()
        ,document.querySelector('#container-modals'));
    }
   
}
export default connect(null,{
    deletestream : deletestream,
    getstream : getstream
})(Streamdelete);