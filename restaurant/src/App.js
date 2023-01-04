import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails';
import {Routes,Route} from 'react-router-dom'
//Header and footer is common so its called outside to Routes--
//after that column :id is dynamic changes content
function App() {
  return (
   <>
       <h1>hi welcome</h1>
      <Header/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          
          <Route path='/restaurant/:name/:id' element={<RestaurantDetails/>}/>
        </Routes>
      <Footer/>
     
    </>
    
  );
}

export default App;
