import  { Nav , Navlink } from "@/components/Nav";

export default function Homepage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <Navlink href="/Homepage">Home</Navlink>
        <Navlink href="/admin/aboutus">Aboutus</Navlink>
        <Navlink href="/admin/product">Home</Navlink>
        <Navlink href="/admin/us">Home</Navlink>
      </Nav>
      <div>
        {children}
      </div>
    </>
  );
}
