import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { getTeachersList } from '@/api/mock-api';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { MainPageContent } from '@/modules/main-page-content';
import { MainPageContext } from '@/store/main-page';
import type { TeacherListType } from '@/types/teacher';

export const MainPage = () => {
  const [teachersList, setTeachersList] = useState<TeacherListType[] | []>([]);

  useEffect(() => {
    getTeachersList()
      .then((data) => setTeachersList(data))
      .catch(console.error);
  }, []);

  useScrollToHash();

  return (
    <MainPageContext.Provider value={{ teachersList }}>
      <MainPageContent />
      <Outlet />
    </MainPageContext.Provider>
  );
};
