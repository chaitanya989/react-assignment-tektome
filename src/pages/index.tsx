import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Link href="/users" className="text-blue-600 underline">Go to Users</Link>
      <Link href="/tasks" className="text-blue-600 underline">Go to Tasks</Link>
    </div>
  );
}
