export  interface IFilterControlState{
    fileName :string,
    path:string,
    selectedFile: [],
    loaded:0
}
export  interface IFilterUploadControlState{
    selectedFile: [],
    loaded:0
}


export interface  IFilterControlProps{
    fileName :string,
    path:string,
    selectedFile: [],
    loaded:0
}

export interface  IFilterUploadControlProps{
    selectedFile: [],
    loaded:0
}