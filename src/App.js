import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Rentals from './Components/Rentals';
import Movies from './Components/Movies';
import Customers from './Components/Customers';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route key='home' exact path='/' element={<Movies />}></Route>
          <Route key='movies' exact path='/movies' element={<Movies />}></Route>
          <Route key='customers' exact path='/customers' element={<Customers />}></Route>
          <Route key='rentals' exact path='/rentals' element={<Rentals />}></Route>
          <Route key='login' exact path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
