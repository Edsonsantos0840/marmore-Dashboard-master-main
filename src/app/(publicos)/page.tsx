import { getCurrentUser } from "../../../libs/session";


export default async  function Home() {
const user = await getCurrentUser()
 console.log(user)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-14">
      <div>
      <h1>{user?.name}</h1>
       <p>tudo bem</p>
       <p>{user?.email}</p>
      </div>

    </main>
  );
}