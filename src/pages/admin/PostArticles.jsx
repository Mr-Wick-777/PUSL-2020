import React, { useState } from 'react';
// import axios from 'axios';
import CleanCityLogo from "../../assets/CleanCityLogo.png";

function PostArticles() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
      const handleContentChange = (e) => {
        setDescription(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
       
      
        console.log('Form data:', formData);
      };
    
  
    return (


        <div className="reg-container">
      <div className="register-inner-container">
      <div className="auth-header-logo">
          <img src={CleanCityLogo} alt="" className="auth-header-logo-img" />
        </div>
        <h1>Post Article</h1>

        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <div className="form-content">
           
            <div className="input-field">
              <label htmlFor="full-name" className="input-label">
               Article title
              </label>
              <input
                type="text"
                className="input-control"
                id="article-title"
                placeholder="Name"
                autoComplete="off"
                required
                onChange={handleTitleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="full-name" className="input-label">
                Content
              </label>
              <input
                type="textarea"
                className="input-control"
                id="article-content"
                placeholder="Name"
                autoComplete="off"
                required
                onChange={handleContentChange}
              />
            </div>
            
            
            
            <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
  
export default PostArticles;
