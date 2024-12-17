'use client';

import { getPromotions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Promotion from './promotion';

export interface ICompanyPromotionsProps {
  companyId: string;
}

const CompanyPromotions = ({ companyId }: ICompanyPromotionsProps) => {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <div>
      {data?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
