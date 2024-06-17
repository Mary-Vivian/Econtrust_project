

import Landingpage from "./Landing Page"
import Navbar from "./Navbar";
import About from "./About/about";
import Services from "./services";
import Mission from "./Mision/Mision";
function App(){
  return(
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <Services/>
      <Mission/>


      
   
    </div>
  )
}
export default App;