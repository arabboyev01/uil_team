import Head from 'next/head'
import {Box} from "@mui/system";
import {useContext} from "react";
import CreateContextApi from "../src/context/createContext";
import SingleMentor from "../src/components/SingleMentor/SingleMentor";

export default function Home() {
    const ctxSetValue = useContext(CreateContextApi);
    const {mentor} = ctxSetValue;
    return (
        <div>
            <Head>
                <title>Bizning Dasturchi.</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <SingleMentor data={mentor}/>
            </Box>
        </div>
    )
}
