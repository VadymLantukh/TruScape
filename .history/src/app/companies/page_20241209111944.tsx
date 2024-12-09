import AddCompanyButton from '../components/add-company-button';

export interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <ToolBar action={<AddCompanyButton />}>
          <SearchInput />
        </ToolBar>
        <CompanyTable>
                  <CompanyRow id={1} category="Products" company="Costco" status={Status.}></CompanyRow>
        </CompanyTable>
      </main>
    </>
  );
};
