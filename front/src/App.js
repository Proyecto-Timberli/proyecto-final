import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/navbar/NavBar.js'
import Login from './components/navbar/login/Login.js';
import Register from './components/navbar/register/Register.js'
import Home from '../src/components/home/Home.js'
import User from '../src/components/user/User.js'
import Project from '../src/components/project/Project.js'
import NewProject from './components/home/newProject/NewProject.js'
import About from './components/footer/about/About';
import Footer from '../src/components/footer/Footer.js'
import Page404 from './components/componentesGenerales/Page404/Page404.js';
import Payment from '../src/components/footer/payment/Payment';
import PaAdmin from '../src/components/panelAdmin/Home/Home.js';
import ListadoProjects from '../src/components/panelAdmin/ListadoProjects/ListadoProjects.js'
import ListadoUsers from '../src/components/panelAdmin/ListadoUsers/ListadoUsers.js'
import ListadoSuspendidos from '../src/components/panelAdmin/ListaSuspendidos/ListadoS.js'
import Stats from './components/panelAdmin/Stats/stats';
import Community from './components/community/community';
import Contributions from './components/panelAdmin/contributions/contributions.js'
import Index from './components/index';
import Reportes from './components/panelAdmin/Reportes/Reportes.js'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isAdmin } from './redux/actions/actionCreators';


function App() {
  let dispatch=useDispatch()
  let admin = useSelector(state => state.isAdmin)
  useEffect(() => {
    dispatch(isAdmin())
  },[dispatch])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/user/:id" element={<User />} />
        <Route exact path="/project/:id" element={<Project />} />
        <Route exact path="/newProject" element={<NewProject />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/payment" element={<Payment />} />
        {admin ?
          <>
            <Route exact path="/admin" element={<PaAdmin />} />
            <Route exact path="/admin/ListadoSuspendidos" element={<ListadoSuspendidos />} />
            <Route exact path="/admin/stats" element={<Stats />} />
            <Route exact path="/admin/listadoProjects" element={<ListadoProjects />} />
            <Route exact path="/admin/ListadoUsers" element={<ListadoUsers />} />
            <Route exact path="/admin/contribuciones" element={<Contributions />} />
            <Route exact path="/admin/reportes" element={<Reportes />} />
          </>

          :
          <Route path='*' element={<Page404 />} />
        }
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
