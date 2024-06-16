
import './index.css';
import iconss from '../Images/iconss.png';
import logo from '../Images/logo.png';
import chama from '../Images/Chamas.jpeg';



const Landingpage = () =>{
    return(
     <>
    <div className='landing'>
        <div id='navbar'>
    <div id='logo-image'>
    <img id='logo'src={logo}/>
    </div>
        <div className='nav'>
        <li className='nav'>Home</li>
        <li className='nav'> About</li>
        <li className='nav'>Our vision</li>
        <li className='nav'>Our Mission</li>
        <li className='nav'>Contacts</li>
        </div>
      </div>
      <div id='first'>
    <div className='intro'>
    <h1 className='h1'>Let some elegance</h1>
       <h1 className='h1'>Into your finance</h1>
       <p className='p'>Simplify your financial journey with us</p>
       <p className='p'>Join us today and experience hassle free saving</p>
    </div>
    <div>
        <img id='chama'src={chama}/>
    </div>
    </div>

       <br></br>
       <br></br>

       <button className='learnmore'>Learn more</button>
       <br></br>
       <br></br>
       <img id='playstore'src={iconss}/>
   

    </div>
    </>
       )  
    }

    export default Landingpage;
    

