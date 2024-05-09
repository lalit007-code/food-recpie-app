import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>welcome to recipe app</div>
      <Link href={"recipe-list"}>Explore recipes</Link>
    </div>
  );
}
