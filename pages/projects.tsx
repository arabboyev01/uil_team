import Head from 'next/head'
import {Box} from "@mui/system";
import Projects from "../src/components/Portfolios/Portfolios";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bizning proyektlarimiz.</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <Projects />
            </Box>
        </div>
    )
}