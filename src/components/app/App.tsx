import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { REGISTRATION, MY_RESUMES, CANDIDATES, CREATE_RESUME, RESUME } from 'constants/routes';
import Candidates from 'pages/candidates';
import CreateResume from 'pages/create_resume';
import Registration from 'pages/registration';
import Resume from 'pages/resume';
import UserResumes from 'pages/user_resumes';

import Layout from '../layout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to={CANDIDATES} />} />
          <Route path={CANDIDATES} element={<Candidates />} />
          <Route path={REGISTRATION} element={<Registration />} />
          <Route path={MY_RESUMES} element={<UserResumes />} />
          <Route path={CREATE_RESUME} element={<CreateResume />} />
          <Route path={RESUME} element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
