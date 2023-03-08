import '../styles/globals.css';
import Link from 'next/link';
import NavLink from './nav-link';
import { Navbar,Hero, About,Footer } from '@/components';

export const metadata = {
  title: 'RaiseRocket',
  description: 'Crowdfunding platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}</body>
    </html>
  )
}
