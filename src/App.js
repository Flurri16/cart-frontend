import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Store from './pages/Store';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/store' element={<Store></Store>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
