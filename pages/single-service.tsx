import Head from 'next/head'
import {Box} from "@mui/system";
import SingleServices from "../src/components/SingleService/SingleService";
import {useContext} from "react";
import CreateContextApi from "../src/context/createContext";

export default function Home() {
    const ctxSetValue = useContext(CreateContextApi);
    const {services} = ctxSetValue;
    return (
        <div>
            <Head>
                <title>Xizmat turi</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <SingleServices data={services}/>
            </Box>
        </div>
    )
}
