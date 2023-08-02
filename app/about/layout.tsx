import React from 'react';
import styles from './style.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Next App',
  description: 'This is About Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
