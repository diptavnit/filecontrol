
import React, { Component } from 'react';
import { IFilterControlProps, IFilterControlState } from './ch-widget-filecontrol';
import FileUpload from './ch-fileupload-control/ch-fileupload-control';



 class FileControl extends Component<IFilterControlState,IFilterControlProps>  {
    constructor(props) {
        super(props);
        this.state = {
          selectedFile: [] ,
          loaded:0,
          fileName:"",
          path:""
        }
      }
    render()
    {        
        return (
            <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working!</p>
             <FileUpload  {...this.state}{...this.props}/>                                    
            </div>
          );  
    };
}
export default FileControl;

 