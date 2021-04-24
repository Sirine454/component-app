
import './App.css';
import Profilphoto from './component/profile/profilphoto'
import Fullname from './component/profile/Fullname'
import Adress from './component/profile/adress'
import Navbar from './component/profile/navbar'
import Contact from './component/profile/contact'
import  About from './component/profile/about'
import './App.css'
function App() {
  return (
    <div className="App">
<Navbar />
<br />

     <Profilphoto />
     <br />
     <Fullname/>
     <br />
      <Adress />
     <br />
     <hr />
     <h1 className="skillheader">My SKills</h1>
      <hr />
     <About/>
     <br />
     
     <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
<Contact />
    </div>
  );
}

export default App;
