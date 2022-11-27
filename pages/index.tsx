import Head from 'next/head'
import {Box} from "@mui/system";
import HomeComponent from "../src/components/Home/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bosh sahifa.</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
        <Box>
            <HomeComponent />
        </Box>
    </div>
  )
}
