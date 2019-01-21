import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import _ from 'lodash';
const signstate=(initial={
    signstatus : null,
    userid : null
},action)=>{
    if(action.type==="SIGN_IN")
    {
        return {...initial,signstatus:true,userid:action.payload};
    }
    else if(action.type==="SIGN_OUT"){
        return {...initial,signstatus:false,userid:null};
    }
    else{
        return initial;
    }
}
const streamReducer = (streams={},action)=>
{
    if(action.type==="POST_STREAM"){
        return {...streams,[action.payload.id]:action.payload};
    }
    else if(action.type==="GET_STREAM")
    {
        return {...streams,[action.payload.id]:action.payload};
    }
    else if(action.type==="LIST_OF_STREAMS")
    {
        return {...streams,..._.mapKeys(action.payload,'id')  };
    }
    else if(action.type==="DELETE_STREAM")
    {
        return _.omit(streams,action.payload);
    }
    else if(action.type==="UPDATE_STREAM")
    {
        return {...streams,[action.payload.id]:action.payload};
    }
    else{
        return streams;
    }
}
const elementdelete=(initial={},action)=>{
    if(action.type==="DELETE_ALERT")
    {
        return action.payload;
    }
    else{
        return initial;
    }

}
export default combineReducers({
    signstate :signstate,
    form :formReducer,
    streamReducer : streamReducer,
    elementdelete : elementdelete

});