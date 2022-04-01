
import './App.css';
import Home from './componet/Home';
import About from "./componet/About";
import My_works from "./componet/My_works";
import Contact from "./componet/Contact";
import Login from "./componet/Login";
import Blogs from "./componet/Blogs";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Forget from './componet/Forget';
import FormSignup from './componet/FormSignup';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/About' element={<About/>} />
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/My_works' element={<My_works/>} />
      <Route exact path='Blogs' element={<Blogs/>}/>
      <Route exact path='/forget' element={<Forget/>}/>
      <Route exact path='/FormSignup' element={<FormSignup/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
