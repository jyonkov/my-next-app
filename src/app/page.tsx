import Image from "next/image";
import MyButton from './MyButton';
import NameForm from './NameForm';
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <MyButton label="Click Me" />
      <NameForm />
      <Link href="/about" className="text-blue-600 hover:underline">
        About This App
      </Link>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        style={{ filter: 'invert(1)' }}
      />
    </main>
  );
}