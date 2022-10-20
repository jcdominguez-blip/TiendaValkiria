import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './components/Item';
import AppContainer from './components/AppContainer';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"





function App() {
  return (
    <div className="App">


    <Navbar/>
    

    {/*Carrusel boop--------*/}
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"https://images.pexels.com/photos/1319417/pexels-photo-1319417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100  " alt=""/>
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
    {/*fin Carrusel boop--------*/}

    {/*Cards boop--------*/}
    
      <main>        
      

    <AppContainer/>

    <AppContainer/>

                      
      </main>
  
    {/* Fin Cards boop--------*/}
      <Footer/>
</div>
  );
}

export default App;
