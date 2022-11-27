import Head from 'next/head'
import {Box} from "@mui/system";
import SinglePortfolio from "../src/components/SinglePortfolio/SinglePortfolio";
import {useContext} from "react";
import CreateContextApi from "../src/context/createContext";

export default function Home() {
    const ctxSetValue = useContext(CreateContextApi);
    const {value} = ctxSetValue;
    // @ts-ignore
    const title = value[0]
    return (
        <div>
            <Head>
                <title>{title.name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <SinglePortfolio data={value}/>
            </Box>
        </div>
    )
}
