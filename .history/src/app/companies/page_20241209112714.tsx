import AddCompanyButton from '../components/add-company-button';
import Header from '../components/header';
import SearchInput from '../components/search-input';
import Toolbar from '../components/toolbar';

export interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            conutry="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
};
