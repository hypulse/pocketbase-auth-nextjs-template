import { handleLogout } from "@/app/admin/actions";

export default function Logout() {
  return (
    <form action={handleLogout}>
      <button type="submit">Logout</button>
    </form>
  );
}
