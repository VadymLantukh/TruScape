export interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
    return <>
        <Header>Company ({ params})</Header>
    </>
};

export default Page;
