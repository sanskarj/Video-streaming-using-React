import axios from 'axios';
import history from '../history';
export const signin=(userid)=>{
    return {
        type : "SIGN_IN",
        payload : userid
    
    }

}
export const signout=()=>{
    return {
        type : "SIGN_OUT"
    }
}
export const poststream=(stream)=>{
    return async (dispatch,getState)=>{
       const response = await axios.post('http://localhost:3001/streams',{...stream,userId:getState().signstate.userid});
       dispatch({type:"POST_STREAM",payload:response.data});
       history.push('/');
    }
}
export const getstream = (id)=>{
    return async (dispatch)=>{
        const response = await axios.get(`http://localhost:3001/streams/${id}`);
        dispatch({type:"GET_STREAM",payload:response.data});
    }
}
export const getlistofstreams = ()=>{
    return async (dispatch)=>{
        const response = await axios.get('http://localhost:3001/streams');
        dispatch({type:"LIST_OF_STREAMS",payload:response.data});
    }
}
export const deletestream = (id)=>{
    return async (dispatch)=>{
        await axios.delete(`http://localhost:3001/streams/${id}`);
        dispatch({type:"DELETE_STREAM",payload:id});
        history.push('/');
        
    }
}
export const updatestream = (id,newvalues)=>{
    return async (dispatch)=>{
        const response = await axios.patch(`http://localhost:3001/streams/${id}`,newvalues);
        dispatch({type:"UPDATE_STREAM",payload:response.data});
        history.push('/');
    }
}
export const deleteaction =(element)=>{
    return {
        type : "DELETE_ALERT",
        payload : element
    }
}

