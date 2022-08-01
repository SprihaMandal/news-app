import './App.css';
import ReactDOM from "react-dom/client";
import Homepage from './Home';
import LoginComp from './Login';
import Layout from './Layout';
import Dashboard from './Dashbord';
import Subscriber from './Subscriber';
import Admin from './Admin';
import Jobs from './Jobs';
import Signup from './Signup';
import Adminlogin from './Adminlogin';
import About from './About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Feedback from './Feedback';

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<LoginComp />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="subscriber" element={<Subscriber/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path="jobs" element={<Jobs/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="adminlogin" element={<Adminlogin/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="feedback" element={<Feedback/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
