import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Store from './pages/Store';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyProfile from './pages/MyProfile';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import {ToastContainer} from 'react-toastify'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './redux/authSlice';
import ItemPage from './pages/ItemPage';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMe())
  })
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/store' element={<Store></Store>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
        <Route path="/add" element={<AddProductPage></AddProductPage>}/>
        <Route path="/items/:id" element={<ItemPage></ItemPage>}/>
      </Routes>
      <ToastContainer position="bottom-right"></ToastContainer>
    </Layout>
  );
}

export default App;
