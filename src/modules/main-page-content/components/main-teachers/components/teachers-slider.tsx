import React, { useEffect, useRef } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Button } from '@/components/button';
import { useWindowSize } from '@/hooks';
import type { TeacherListType } from '@/types/teacher';

import { TeacherCard } from './teachers-slider/components/teacher-card';

import styles from './teachers-slider.module.scss';

interface TeachersSliderProps {
  teachersList: TeacherListType[];
}

export const TeachersSlider = ({ teachersList }: TeachersSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      swiperRef.current.scrollbar.init();
    }
  }, [teachersList]);

  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const createSlideChangeHandler = (direction: 'next' | 'prev') => () => {
    if (!swiperRef.current) {
      return;
    }

    if (direction === 'next') {
      swiperRef.current.slideNext();
      return;
    }

    swiperRef.current.slidePrev();
  };

  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 'auto' : 3}
        spaceBetween={isMobile ? 20 : 40}
        className={styles.teachersSlider}
        onInit={onSwiperInit}
        modules={[Scrollbar]}
        scrollbar={{
          el: scrollbarRef.current,
          draggable: true,
        }}
      >
        {teachersList.map((teacherItem) => (
          <SwiperSlide key={teacherItem.id} className={styles.slide}>
            <TeacherCard teacherCard={teacherItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.sliderControls}>
        <div ref={scrollbarRef} className={styles.scrollbar}></div>
        {!isMobile && (
          <div className={styles.buttons}>
            <Button
              variant={'text'}
              additionalClassname={styles.button}
              onClick={createSlideChangeHandler('prev')}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              variant={'text'}
              additionalClassname={styles.button}
              onClick={createSlideChangeHandler('next')}
            >
              <ArrowRightIcon />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
