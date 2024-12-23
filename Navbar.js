import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  let btnText="";
  if (props.mode === 'light') {
    btnText = "Enable dark mode";
  } else {
    btnText = (
      <span style={{ color: 'white' }}>
        Enable light mode
      </span>
    );
  }
  return (
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid ">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">About</a>
          </li>
          
        </ul>
       
        <div class={`form-check form-switch text -${props.mode==='light'?'dark':'light'}`}>
        <input class="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
      </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // `isRequired` ensures `title` is passed
   
  };