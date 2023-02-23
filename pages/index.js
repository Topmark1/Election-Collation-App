import Head from 'next/head';
import Login from '../components/Login'
import Header from '../components/Header';
import ElectionPage from '../components/ElectionPage';


import {useSession} from 'next-auth/react';
import {db} from '../firebase';
import {collection,orderBy,query,getDocs} from 'firebase/firestore';


export default function Home({posts}){
 
const{data:session} = useSession();
 
if(session) return <Login />;
return (
    <div className='bg-gray-50 overflow-y-scroll scrollbar-hide ml-1 mr-1'>
      <Head>
        <title>ElectionPage</title>
      </Head>
      {/*Header*/}
      <Header />
     {/*ElectionPage*/}
      <ElectionPage />
    </div>
  )
}