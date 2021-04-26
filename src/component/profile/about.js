import React, { Component } from 'react'
import Htmllogo from '../logos/image/HTMLLOGO.png'
import csslogo from '../logos/image/CSSLOGO.png'
import jsreact from '../logos/image/REACTJS.png'
import js from '../logos/image/JSLOGO.png'








class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    
                    <div><img src={Htmllogo} width="100" height="100" alt="js"/></div>
                    <div><img src={csslogo} width="100" height="100" alt="html"/></div>  
                    <div><img src={jsreact} width="100" height="100" alt="css"/></div>
                    <div><img src={js} width="100" height="100" alt="react"/></div>
                    
                
            </section>
        )
    }
}

export default Project