'use client';

import { useRouter } from 'next/navigation';
import Button from './button';

export interface IAddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton = ({ companyId }: IAddPromotionButtonProps) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotion
    </Button>
  );
};

export default AddPromotionButton;
