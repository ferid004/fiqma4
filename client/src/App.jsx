import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./Layout/mainLayout";
import "./assets/scss/main.scss";
import About from "./pages/About";
import Home from './pages/Home';
import Login from "./pages/Login";
import Sing__u from "./pages/Sing__u";

function App() {

  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Sing__u />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App
