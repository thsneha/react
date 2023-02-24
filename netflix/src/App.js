
import './App.css';
import Row from './components/Row'
import requests from './request'
// App.js is a parent component 
function App() {
  return (
    <div className="App">
      <Row 
      title = "Netflix originals"
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row 
      title = "Top rated"
      fetchUrl={requests.fetchTopRated}/>

      <Row 
      title = "Trending Now"
      fetchUrl={requests.fetchTrending}/>
      <Row 
      title = "Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
      <Row 
      title = "Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
      <Row 
      title = "Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row 
      title = "Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row 
      title = "Documentaries"
      fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
  
}

export default App;
