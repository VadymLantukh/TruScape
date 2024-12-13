import Header from '@/app/components/header';

export interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  return <Header>{`Company (${params.id})`}</Header>;
};

export default Page;
