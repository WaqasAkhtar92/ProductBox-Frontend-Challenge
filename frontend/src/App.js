import './App.css';
import DataProvider from './components/contexts/Context';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/shared/Header';
import ShCart from './components/ShCart';

function App() {
  return (

    <DataProvider>

    <div className="App">
      <Router>
        
        <Header />
        <ShCart />

      </Router>

    </div>

    </DataProvider>
  );
}

export default App;
