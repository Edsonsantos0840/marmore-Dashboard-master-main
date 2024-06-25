
import { getCurrentUser } from "../../../../../libs/session"; 
import FormComment from "../../../components/form/FormComment";

export default async function Início({params}: any) {
 
  const user = await getCurrentUser()
  const id = params.id

  return (
    <div >
      <FormComment dat={id} userId={user?.email || ''} />
    </div>
  );
}
