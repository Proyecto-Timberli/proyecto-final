import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/navbar/NavBar.js'
import LandingPage from '../src/components/landingPage/LandingPage.js'
import Login from '../src/components/login/Login.js';
import Register from '../src/components/register/Register.js'
import Home from '../src/components/home/Home.js'
import User from '../src/components/user/User.js'
import Project from '../src/components/project/Project.js'
import NewProject from '../src/components/newProject/NewProject.js'
import About from '../src/components/about/About.js'
import Footer from '../src/components/footer/Footer.js'
import Page404 from '../src/components/Page404/Page404.js';
import Payment from '../src/components/payment/Payment';
import PaAdmin from '../src/components/panelAdmin/Home/Home.js';
import ListadoProjects from '../src/components/panelAdmin/ListadoProjects/ListadoProjects.js'
import ListadoUsers from '../src/components/panelAdmin/ListadoUsers/ListadoUsers.js'
import ListadoSuspendidos from '../src/components/panelAdmin/ListaSuspendidos/ListadoS.js'
import Stats from './components/panelAdmin/Stats/stats';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/user/:id" element={<User />} />
        <Route exact path="/project/:id" element={<Project />} />
        <Route exact path="/newProject" element={<NewProject />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/admin" element={<PaAdmin />} />
        <Route exact path="/admin/ListadoSuspendidos" element={<ListadoSuspendidos />} />
        <Route exact path="/admin/stats" element={<Stats />} />
        <Route exact path="/admin/listadoProjects" element={<ListadoProjects />} />
        <Route exact path="/admin/ListadoUsers" element={<ListadoUsers />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
