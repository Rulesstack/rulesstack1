import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/rulesstack/">@rulesstack</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          ©  {new Date().getFullYear()} <a href="https://rulesstack.com/">Rulesstack</a>. All rights reserved. 
          
        </span>
      </div>
    </footer>
  </div>
)
