
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import './Style.css'
function App() {
  return (
  <div>
 
 <div style = {{border: "solid 1px black", maxWidth: "100vw"}}>

<h1 className = "title red"> Amira </h1>



<img src = { imageInSrc} alt='imageInSrc'/> 



<img src = "/imageInPublic.jpg" alt="imageInPublic.jpg"/> 

</div>
<video width="750" height="500" controls >
      <source src="/myVideo.mp4" type="video/mp4"/>
</video>


    </div>
  );
};



export default App;
