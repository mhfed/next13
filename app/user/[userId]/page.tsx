import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import Link from 'next/link';
import React, { Suspense } from 'react';
import UserPost from './components/UserPosts';
import type { Metadata } from 'next';

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<TUser> = getUser(userId);
  const user = await userData;
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<TUser> = getUser(userId);
  const userPostsData: Promise<TPost[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  //   console.log(userPosts);
  const user = await userData;
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostsData} />
      </Suspense>
    </>
  );
}
