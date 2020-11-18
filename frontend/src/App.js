import './App.css';
import DataProvider from './_contexts/Context';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './_components/shared/Header'
import Shcart from './_components/ShCart'

function App() {
  return (

    <DataProvider>

    <div className="App">
      <Router>
        
        <Header />
        <Shcart />

      </Router>

    </div>

    </DataProvider>
  );
}

export default App;
