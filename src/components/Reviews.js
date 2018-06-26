import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import '../css/review.css';

const CLOUDINARY_UPLOAD_URL ='https://api.cloudinary.com/v1_1/dhdq7bopz';

export default class Reviews extends Component{
    constructor(props){
        super(props)
        this.state = {
            uploadFileCloudinaryUrl: ''
        }
    }
    // setting up cloudinary
    handleImageUpload = (file) => {
        axios.get('/api/upload').then(response => {
            let formData = new FormData()
            formData.append("signature", response.data.signature)
            formData.append("api_key", "229693876484264")
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0])
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
                console.log(response.data)
                this.setState({
                    uploadFileCloudinaryUrl: response.data.secure_url
                })
            }).catch(error => {
                console.log(error)
            })
        })
    }


    render(){
        return(
            <div>
                <div className="review">
                    Reviews
                </div>
                <div className='upload-form'>
                { 
                this.state.uploadedFileCloudinaryUrl
                ? 
                <div className='image-container'>
                    <img src={this.state.uploadedFileCloudinaryUrl} alt='cloudinary example'/>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.handleImageUpload}
                        className='dropzone'
                        >
                        <p>Again</p>
                    </Dropzone>
                </div>
                :
                <div>
                    <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.handleImageUpload}
                    className='dropzone'
                    >
                    <p>Upload</p>
                    </Dropzone>
                    {/* <input type='file' onChange={(e) => this.handleImageUpload(e.target.files)} /> */}
                </div>
                }
                </div>
            </div>
        )
    }
}

