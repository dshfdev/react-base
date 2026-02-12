import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Modal } from '@/components/modal';

import { TeacherModalContent } from './components/teacher-modal-content';

export const TeacherModalPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const handleModalClose = () => {
    setIsOpenModal(false);
    navigate('/', {
      preventScrollReset: true,
    });
  };

  if (!teacherId) {
    return null;
  }

  return (
    <Modal isOpen={isOpenModal} onClose={handleModalClose}>
      <TeacherModalContent teacherId={Number(teacherId)} />
    </Modal>
  );
};
