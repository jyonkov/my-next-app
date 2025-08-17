import Image from "next/image";
import MyButton from './MyButton';
import NameForm from './NameForm';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <MyButton label="Click Me" />
      <NameForm />
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