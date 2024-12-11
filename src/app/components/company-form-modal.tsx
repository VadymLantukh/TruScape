'use client';

import CompanyForm, { CompanyFieldValues } from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFieldValues['onSubmit'];
}

const CompanyFormModal = ({ onSubmit, ...rest }: CompanyFormModalProps) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
