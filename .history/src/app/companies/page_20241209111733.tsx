export interface IPageProps {}

const Page = ({ }: IPageProps) => {
    return (
      <>
        <Header>Companies</Header>
        <main>
          <ToolBar></ToolBar>
        </main>
      </>
    );
};