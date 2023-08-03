import Link from 'next/link';

type Props = { promise: Promise<TPost[]> };

export default async function UserPost({ promise }: Props) {
  const posts = await promise;
  return (
    <section>
      <h1>
        <Link href='/'>Back to home</Link>
      </h1>
      {posts.map((p) => (
        <>
          <h2>{p.title}</h2>
          <p>{p.body}</p>
          <br />
        </>
      ))}
    </section>
  );
}
