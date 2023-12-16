import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Patientdashboard from './pages/patientdashboard/Patientdashboard'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './pages/About/About'



function App() {


  return (
    <>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
        </Router>
    </>
  )
}

export default App
