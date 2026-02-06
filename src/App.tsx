import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/layout';
import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';

import './styles/index.scss';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      {/*<Route path="/teacher/:teacherId" element={<TeacherModalPage />} />*/}
    </Routes>
  </BrowserRouter>
);
