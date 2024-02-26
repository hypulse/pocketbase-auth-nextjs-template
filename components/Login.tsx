import { handleLogin } from "@/app/admin/actions";

export default function Login() {
  return (
    <form action={handleLogin}>
      <input type="text" name="identity" placeholder="Username or Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
