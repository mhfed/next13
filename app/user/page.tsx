import { Metadata } from 'next';
import React from 'react';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Users',
};
export default async function UserPage() {
  const usersData: Promise<TUser[]> = getAllUsers();

  const users = await usersData;

  return (
    <section>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>
              <Link href={`/user/${user.id}`}>{user.name}</Link>
            </li>
            <br />
          </ul>
        );
      })}
    </section>
  );
}
