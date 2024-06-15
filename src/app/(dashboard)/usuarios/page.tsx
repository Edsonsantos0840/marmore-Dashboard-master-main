import TopoAdd from "../../components/topos/TopoAdd";
import UserCard from "../../components/cards/UserCard";
import getData from "../../components/function/GetData";

export default async function Usuarios() {
  const url: string = `http://localhost:3000/api/users `;

  const user: any = await getData(url);

  return (
    <section className="w-full md:absolute md:top-0 md:left-[20%]  md:w-10/12 m-auto p-1   ">
      <TopoAdd />

      {user &&
        user.map((e: any) => (
          <div key={e.id}>
            <UserCard data={e} />
          </div>
        ))}
    </section>
  );
}
