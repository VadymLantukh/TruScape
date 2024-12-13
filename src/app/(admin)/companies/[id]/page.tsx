export interface IPageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: IPageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}
