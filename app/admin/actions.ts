import login from "@/pb/login";
import logout from "@/pb/logout";

async function handleLogin(formData: FormData) {
  "use server";
  const identity = (formData.get("identity") as string) ?? "";
  const password = (formData.get("password") as string) ?? "";

  if (!identity || !password) {
    return;
  }

  await login(identity, password);
}

async function handleLogout() {
  "use server";
  await logout();
}

export { handleLogin, handleLogout };
