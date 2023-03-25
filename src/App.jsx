import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(true)
  const [start, setStart] =useState("tv-main")
  const [mainPage,setMainPage] = useState('page')
  const [displays, setDisplay] = useState("flex")
  const [clicked, setClicked] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState("0")

  
  useEffect(() => {
    let theDisplay1;
    let theDisplay2;
    if (clicked) {
      theDisplay1 = setTimeout(() => {
        setDisplay("none")
      }, 2000);
      theDisplay2 = setTimeout(() => {
        setSecondDisplay("1")
      }, 300);
    }
    return () => clearTimeout(theDisplay1,theDisplay2);
  }, [clicked]);

 
  
  
  
  
  function handleClick(){
      setCount(count)
      count?setStart("tv-main-2"):setStart("tv-main")
      count?setMainPage("page-main"):setStart("page")
      setClicked(true);
  }
  
  console.log(displays);

  return (
    <div className="App">
      <div
      
       style={{display:`${displays}`}} className='img-container'>
        <div className='screen'></div>
        <img 
        onClick={handleClick} 
        className={start}
         src='src\assets\pngwing.com.png'> 
        </img>
        
      </div>
      <div
      style={{opacity:`${secondDisplay}`}} className={mainPage}>
        <div className="components">
        <nav>
        <div className="nav-container">
          <h1 className="left">Zaharenco</h1>
          <div className="mid"> 
            <div>About</div>
            <div>Songs</div>
            <div>Contact</div>
          </div>
          <div className="spotify">Spotify</div>
         
        </div>
        </nav>
        <main>
          <h2>Primordial feelings</h2>
          <div className="album-image"><img src='src\assets\257402019_111385201360055_4339298082473236043_n.jpg'></img></div>
        </main>
      </div>
      </div>
    </div>
  )
}

export default App
