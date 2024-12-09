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
                  <CompanyRow></>
        </CompanyTable>
      </main>
    </>
  );
};
