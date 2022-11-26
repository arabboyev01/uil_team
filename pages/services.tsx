import Head from 'next/head'
import {Box} from "@mui/system";
import About from "../src/components/About/About";
import Services from "../src/components/Services/Services";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bizning xizmatlarimiz.</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <Services />
            </Box>
        </div>
    )
}