import { Inter } from 'next/font/google'
import styles from '../../styles'
import { Campaigncreate } from '../../components';
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const Create= () => (
  <div className="bg-primary-black">
    <Campaigncreate/>
  </div>
);

export default Create;

