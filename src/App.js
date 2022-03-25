import './App.css';
import Home from './container/Home/index';
import Signin from './container/Signin/Signin';
import Signup from './container/Signup/Signup';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
