import './App.css';
import ListOfGifs from './components/ListOfGifs.js';
import { Route } from 'wouter';


export default function App() {
  return (
    <div className="App">
      <section className="App-content">

        <Route path="/gif/:keyword">
          {params => <ListOfGifs keyword={params.keyword} />}
        </Route>

        <h1>Gifs App</h1>
        <ListOfGifs keyword= "panda" />
        <p>Powered by Giphy</p>
      
      </section>
    </div>
  );
}


