import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <p>Coulnd not found company</p>
      <Link className="text-blue-500" href="/companies">
        Back to companies
      </Link>
    </div>
  );
};
export default NotFound;
