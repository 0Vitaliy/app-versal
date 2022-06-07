import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { REGISTRATION } from '../../constants/routes';
import Candidates from '../../pages/candidates';
import Registration from '../../pages/registration';
import Layout from '../layout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/candidates" />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path={REGISTRATION} element={<Registration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
