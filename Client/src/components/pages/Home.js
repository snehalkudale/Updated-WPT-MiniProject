//import { Alert, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React from 'react'
import './Home.css';
// import './Footer.jsx';

export function Home()  {
  return (
<nav>
      
    

  <div class="container0">
    
        
  <h2 class="h2"><b>TruthLens</b></h2>
  <br/><br/>

  <div className="container4">
  
  <h4><b>Uncovering Fake News in the NewsFlow.</b></h4>
  <h4><b>Where you can spot the fake news.</b></h4>
 
  
  <p>Fake news, a term denoting false or misleading information presented as authentic, manifests in various forms
  such as news articles, social media posts, videos, and images.

  Its dissemination is often driven by deceptive intentions, contributing to the widespread issue it has become in
  recent years.

  To address this challenge, we've developed innovative solutions incorporating advanced technologies.
  
  This initiative seeks to combat fake news by empowering individuals with tools to verify the authenticity of
  information sources.
  
  In an era where misinformation can have profound consequences, promoting media literacy and critical thinking is
  paramount.

  Our project endeavours to play a crucial role in fostering a more informed and discerning society.</p>

  <br/>
  <button type="button" className='btn'> <Link to="/verifyNews" className="a">Try It!!!</Link></button>
  </div>
  </div>
  </nav>
  )
}
