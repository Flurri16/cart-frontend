import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Store from './pages/Store';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/store' element={<Store></Store>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
