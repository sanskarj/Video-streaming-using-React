import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';


class Modal extends React.Component{
    rendermodal=()=>{
        return (
         <div id="modals-container" onClick={()=>{
             history.push(this.props.path);

         }}>
            <div className="modals" onClick={(e)=>{
                    e.stopPropagation();
            }}>
                 <div className="que">
                    <h4 className="que-head">{this.props.que}</h4>
                 </div>
                 <div className="btns-delete-container">
                     {this.props.buttons}
                    
                 </div>
            </div>
         </div>
        );
    }
   
    render(){
        return ReactDom.createPortal(
            this.rendermodal()
        ,document.querySelector('#container-modals'));
    }
   
}
export default Modal;
