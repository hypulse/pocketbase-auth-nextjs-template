import Login from "@/components/Login";
import getPb from "@/pb/getPb";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pb = await getPb();

  if (!pb.authStore.isValid) return <Login />;

  return <>{children}</>;
}
