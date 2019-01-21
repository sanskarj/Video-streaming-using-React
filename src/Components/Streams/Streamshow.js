import React from 'react';
import {connect} from 'react-redux';
import {getstream} from '../../Actions/index';
import flv from 'flv.js';

class Streamshow extends React.Component{
    constructor(props){
        super(props);
        this.videoref = React.createRef();
    }
    componentDidMount(){
        this.props.getstream(this.props.match.params.id);
        this.buildplayer();



    }
    componentDidUpdate(){
        this.buildplayer();
    }
    buildplayer(){
        if(this.player||!this.props.stream)
        {
            return;
        }
        else{

        
        this.player = flv.createPlayer({
            type : 'flv',
            url : `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoref.current);
        this.player.load();
      
    }

    }
    componentWillUnmount(){
        this.player.destroy();
        
    }
    render(){

       
       if(!this.props.stream)
       {
           return (
               <div>Loading.....</div>
           );
       }
       else{
          
           return(<div className="video-containers">
               <video id="videoElement" controls ref={this.videoref} style={{height:"40rem",width:"100%"}}>
                   
               </video>
           </div>);
       }

    }

}
const mapstatetoprops =(state,ownProps)=>{
    return {
       stream : state.streamReducer[ownProps.match.params.id]
    }
}
export default connect(mapstatetoprops,{
    getstream : getstream

})(Streamshow);