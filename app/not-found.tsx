import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>this page is not found</h1>
      <Link href={"/"}>Go To Homepage</Link>
    </div>
  );
}
