
// import React, { useState } from 'react';
// import './index.css';
// import iconss from '../Images/iconss.png';
// // import logo2 from '../Images/logo.png';
// import chama from '../Images/Chamas.jpeg';
// import logo2 from '../Images/logo2.png';



// const Landingpage = () =>{
//     return(
//      <>
//     <div className='landing'>
//         <div id='navbar'>
//     <div id='logo-image'>
//     <div className='logobrand'><img id='logo2' src={logo2}  /><p id='brandname'><b>EconTrust</b></p></div>
//     </div>
//         <div className='nav'>
//         <li className='nav'><b>Home</b></li>
//         <li className='nav'> <b>About Us</b></li>
//         <li className='nav'><b>Services</b></li>
//         <li className='nav'><b>Team</b></li>
//         <li className='nav'><b>Contact Us</b></li>
//         </div>
//       </div>
//       <div id='first'>
//     <div className='intro'>
//     <p className='h1'><b>Let some elegance</b><br></br><b>Into your finance</b></p>
//        {/* <p className='h1'><b>Into your finance</b></p> */}
//        <p className='p'>Simplify your financial journey with us</p>
//        <p className='p'>Join us today and experience hassle free saving</p>
//     </div>
//     <div>
//         <img id='chama'src={chama}/>
//     </div>
//     </div>

//        <br></br>
//        <br></br>

//        <button className='learnmore'>Learn more</button>
//        <br></br>
//        <img id='playstore'src={iconss}/>
   

//     </div>
//     </>
//        )  
//     }

//     export default Landingpage;

import React, { useState } from 'react';
import './index.css';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="navbar">
        <div className="nav">
          <img src="/Image/logo2.png" alt="Logo" id='logo'/>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className='Text'>
      
       <div>
       <h1>Let some elegance</h1><br></br><h1>Into your finance</h1>
       <p className='paragraph'>
        Simplify your financial journey with us
        Join us today and experience hassle free saving
        </p>
      </div>
      <img src="/Image/Chamas.jpeg" alt="Chama" id='chama'/>

    </div>
    <button id='learnmore'>learnmore</button>
    <br></br>
    <img src="/Image/iconss.png" alt="icons" id='icons'/>

    </div>
    
  );

}
export default Homepage;



 

