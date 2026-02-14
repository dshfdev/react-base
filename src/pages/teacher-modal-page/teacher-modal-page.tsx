import { useNavigate, useParams } from 'react-router-dom';

import { Modal } from '@/components/modal';

import { TeacherModalContent } from './components/teacher-modal-content';

export const TeacherModalPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  if (!teacherId) {
    return null;
  }

  return (
    <Modal isOpen onClose={handleModalClose}>
      <TeacherModalContent teacherId={Number(teacherId)} />
    </Modal>
  );
};
