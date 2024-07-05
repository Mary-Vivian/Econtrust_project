import "./index.css"
const LandingPage=()=>{

    return(
        <>
        <div className="Text">
        <div>
          <p id='paragraph'>Let some elegance<br/>Into your finance</p>
          <p className="paragraph">
            Simplify your financial journey with us
            <br/>
            <br/>
            Join us today and experience hassle free saving
          </p>
        </div>
        <div>
        <img src="/Image/WOMEN-CHAMA.jpg" alt="Chama" id='chama' />
      </div>
      </div>
      <button id="learnmore"><b>Learn more</b></button>
      <br />
      <div className='icons'>
      <img  src="/Image/iconss.png" alt="icons" id="icons" /></div>
      
      </>
    )


}
export default LandingPage