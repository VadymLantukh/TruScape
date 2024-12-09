export interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
    return <>
        <Header></Header>
    </>
};

export default Page;
