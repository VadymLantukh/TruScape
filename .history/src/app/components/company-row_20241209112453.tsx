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
    [Status.NotActive]: 'Not Active'
    [Status.Pending]: "Pending"
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
