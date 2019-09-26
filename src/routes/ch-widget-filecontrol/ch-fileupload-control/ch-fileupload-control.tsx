
import React, { Component } from 'react';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { IFilterControlProps, IFilterControlState, IFilterUploadControlState, IFilterUploadControlProps } from '../ch-widget-filecontrol';


class FileUpload extends Component<IFilterUploadControlState,IFilterUploadControlProps> {

    constructor(props) {
      super(props);
      this.onChangeHandler.bind(this);
      this.onClickHandler.bind(this);
      this.state = {
        selectedFile: [] ,
        loaded:0
      }
    }

    onChangeHandler = (event)=>{
        var files = event.target.files;
        // if return true allow to setState
           this.setState({
           selectedFile: files,
           loaded:0
        });
    }

    onClickHandler = ()=>{
    const data = new FormData() ;
    for(var x = 0; x < this.state.selectedFile.length ; x++) {
    data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/upload", data, {
    onUploadProgress: ProgressEvent => {
        
    },
    })
    .then(res => { // then print response status
              toast.success('upload success')
     })
     .catch(err => { // then print response status
              toast.error('upload fail')
      });
    }
    render()
    {
        return (
            <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                 <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                <ToastContainer />
                <Progress max="100" color="success" value={this.state.loaded} >{this.state.loaded}%</Progress>                
                </div>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
             </div>
            </div>
        </div>
        );  
    };
}
export default FileUpload;
