
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Footer, Navbar,Hero,About } from '../components';
import NavLink from '../app/nav-link';
const inter = Inter({ subsets: ['latin'] })

const Page = () => (
  <div className="bg-primary-black ">
    <Hero/>
    <About/>
    <Footer/>
  </div>
);

export default Page;

