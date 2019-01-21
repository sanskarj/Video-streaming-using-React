import React from 'react';
import {Field,reduxForm} from 'redux-form';


class Streamform extends React.Component{
    renderInput=(formprops)=>{
        return(
           <div className="form-group">
              <label className="col-md-3 col-sm-8 col-8">{formprops.label}</label> 

              <div className="col-md-8">
              <input className="form-control" {...formprops.input} autoComplete="off"/>
              </div>
              {this.rendererror(formprops.meta)}

              

               
            
           </div>
        );
    }
    rendererror=(meta)=>{
          if(meta.error && meta.touched)
          {
              return(<div className="alert alert-warning">
              
                {meta.error}
          </div>);
          }
          else{
              return (<div></div>);
          }

    }
    onSubmit=(formvalues)=>{
        this.props.onsubmit(formvalues);
   }
    render(){
        
        return (
            <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name ="description" component={this.renderInput} label="Enter Description"/>
                <button className="btn-submit btn btn-danger" type="submit">Submit</button>
            </form>
        );
    }
}
const validate=(formvalues)=>{
    const errors={};
    if(!formvalues.title)
    {
        errors.title = "you must enter the title for your video";
    }
    if(!formvalues.description)
    {
       errors.description = "you must enter the description of the video you want to upload";
        
    }
    return errors;
}


export default reduxForm({
    form : 'streamcreation',
    validate : validate

})(Streamform);