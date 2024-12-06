'use client';

import CompanyForm, { CompanyFormProps } from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubnit: CompanyFormProps['onSumbit'];
}

const CompanyFormModal = ({ onSubmit, ...rest }: CompanyFormModalProps) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSumbit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
