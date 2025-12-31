import React from 'react';

import { MainBenefits } from './components/main-benefits';
import { MainForm } from './components/main-form';
import { MainPackages } from './components/main-packages';
import { MainPromo } from './components/main-promo';
import { MainTeachers } from './components/main-teachers';

export const MainPageContent = () => {
  return (
    <>
      <MainPromo />
      <MainBenefits />
      <MainTeachers />
      <MainPackages />
      <MainForm />
    </>
  );
};
