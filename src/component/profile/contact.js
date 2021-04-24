
import React, { Component } from 'react'
/*import contact from './src/component/public/image/contact.png';
import mailme from './src/component/public/image/images.png';*/


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src='./contact' width="180" height="180" alt="contactlogo"/>
                <h3> <strong></strong></h3>
                
                <h4>Email Id: sirinebennaceur@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/u/1/?hl=fr#inbox"><img id="mailmelogo" src='./images.png' alt=""/>Click Here To Send Mail</a>
                <h4>Contact Info: +21626167697</h4>

                
                
                        <a href="https://www.facebook.com/sirine.bennaceur.10/">
                        <span className="icon fa fa-facebook" style={{color:'blue'}} ></span>
                        </a>
                        <a href="https://github.com/sirine454">
                                <span className="icon fa fa-github" style={{color:'blue'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/sirine-bennaceur-15762b132/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'blue'}}></span>
                        </a>
                        
                
            </section>
        )
    }
}

export default Contact