import Head from 'next/head'
import {Box} from "@mui/system";
import Contacts from "../src/components/Contacts/Contacts";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Biz bilan bog`&#39;`laning</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <Contacts />
            </Box>
        </div>
    )
}
