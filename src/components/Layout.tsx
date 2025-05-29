import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/users" className="hover:underline">Users</Link></li>
          <li><Link href="/tasks" className="hover:underline">Tasks</Link></li>
        </ul>
      </nav>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
