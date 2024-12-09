export interface CompanyRowProps {
  id: number;
  catefory: string;
  compamy: string;
  status: Status;
  promotion: string;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
    [Status.Active]: 'Active'
    [Status.NotActive]: 'Now Active'
}

const CompanyRow = ({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}) => {};

export default CompanyRow;
