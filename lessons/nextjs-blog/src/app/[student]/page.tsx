type paramsType = { name: string };
type searchParamsType = { id: string };
// export async function generateStaticParams(){
//     const names: string[] = ["zia", "zeeshan", "hira"];
//
//     return names.map((name) => ({
//         name: name,
//     }));
// }
export default function NameNav({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { id: string };
}) {
  return (
    <div>
      Name is {params.name}
      Search id is {searchParams.id}
    </div>
  );
}
