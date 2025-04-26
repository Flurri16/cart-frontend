import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Store from './pages/Store';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyProfile from './pages/MyProfile';
import MainPage from './pages/MainPage';
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/store' element={<Store></Store>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
      </Routes>
      <ToastContainer position="bottom-right"></ToastContainer>
    </Layout>
  );
}

export default App;
