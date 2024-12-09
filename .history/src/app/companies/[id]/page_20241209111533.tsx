export interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
};

export default Page;
