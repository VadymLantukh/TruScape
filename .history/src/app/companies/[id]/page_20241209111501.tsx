export interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
    return <>
        <Header>Company </Header>
    </>
};

export default Page;