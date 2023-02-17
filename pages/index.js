//import { Inter } from '@next/font/google'
import Layout from "@/pages/src/Layout";
import List from "@/pages/src/List";
import HeadMeta from "@/pages/src/HeadMeta";
import Write from "@/pages/src/Write";
import Update from "@/pages/src/Update";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <HeadMeta title=" index" />
        <List />
      </Layout>
    </>
  );
}
