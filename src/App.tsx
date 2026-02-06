import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components/layout';
import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { TeacherModalPage } from '@/pages/teacher-modal-page';

import './styles/index.scss';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/teacher/:teacherId" element={<TeacherModalPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
