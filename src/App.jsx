import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(true)
  const [start, setStart] =useState("tv-main")
  const [mainPage,setMainPage] = useState('page')
  const [displays, setDisplay] = useState("flex")
  const [clicked, setClicked] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState("0")
  const [compenentOverflow , setComponentOverflow] = useState("hidden")

  
  useEffect(() => {
    let theDisplay1;
    let theDisplay2;
    let componentDisplay;
    if (clicked) {
      theDisplay1 = setTimeout(() => {
        setDisplay("none")
      }, 2000);
      theDisplay2 = setTimeout(() => {
        setSecondDisplay("1")
      }, 300);
      componentDisplay = setTimeout(() => {
        setComponentOverflow("scroll")
      }, 500);
    }
    return () => clearTimeout(theDisplay1,theDisplay2, componentDisplay);
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
         src='https://raw.githubusercontent.com/paluras/new/master/src/assets/pngwing.com.png'> 
        </img>
        
      </div>
      <div
      style={{opacity:`${secondDisplay}`}} className={mainPage}>
        <div style={{overflowY:`${compenentOverflow}`}}  className="components">
        <nav>
          <div className="nav-container">
              <div>About</div>
              <div>Songs</div>
              <img className='logo' src='src\assets\Asset 4.svg'></img>
              <div>Contact</div>
            <div className="projects">Projects</div>
          
          </div>
        </nav>
        <main>
          
          <div className="first-page">
              
              
              <div className="album-image">
                
                <img className='album' src='src\assets\257402019_111385201360055_4339298082473236043_n.jpg'></img>
                <h2>Primordial feelings</h2>
              </div>
          </div>
          
         
        </main>
        
        <div className='second-page'>
            <div className='about-me'>About </div>
            <p className='description one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque laboriosam minima labore commodi vero sapiente in, reiciendis deleniti nulla, delectus cum unde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci dolorum saepe tenetur beatae ea error, non nostrum voluptas veniam culpa soluta exercitationem esse omnis quos modi voluptatum nesciunt reprehenderit! quas eum aut magnam vel nihil? Aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil facere! Similique veniam nam quia doloribus facere dolorem obcaecati facilis perspiciatis consequatur quaerat maiores odio, deleniti quam quae corrupti nihil.</p>
            <div className="poze-component">
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
                <img className='elPian' src='src\assets\Eu pian Chroma Copac.png'></img>
                <img src="src\assets\R1-05143-0011.JPG" alt="" />
              </div>
              <div className="align-decription">
             <div className="description two">
</div>
             <div className="description three">Lorem ipsum dolor sit 
             </div>  
             </div>     
      </div>
      <div className='second-page'>
            <div className='about-me'>Projects </div>
            <p className='description one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque laboriosam minima labore commodi vero sapiente in, reiciendis deleniti nulla, delectus cum unde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci dolorum saepe tenetur beatae ea error, non nostrum voluptas veniam culpa soluta exercitationem esse omnis quos modi voluptatum nesciunt reprehenderit! quas eum aut magnam vel nihil? Aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil facere! Similique veniam nam quia doloribus facere dolorem obcaecati facilis perspiciatis consequatur quaerat maiores odio, deleniti quam quae corrupti nihil.</p>
            
              <div className="align-decription">
             <div className="description two">
</div>
             
              
             </div>     
      </div>
      


       
        
      </div>
      
      </div>
      
    </div>
  )
}

export default App
