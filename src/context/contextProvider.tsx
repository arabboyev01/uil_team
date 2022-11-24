import CreateContextApi from "./createContext";
import {useContext, useState} from "react";
export const ContextProvider = function(props: any){
    const useCtx = useContext(CreateContextApi);
    const [initValue, setInitValue] = useState(useCtx.changeValue);
    const [initService, setInitService] = useState(useCtx.changeServices);
    const [initMentor, setInitMentor] = useState(useCtx.changeMentor);
    const handleChangeValue = function(e: any){
        setInitValue(e);
    }
    const handleChangeServices = function(e: any){
        setInitService(e);
    }
    const handleChangeMentors = function(e: any){
        setInitMentor(e);
    }
    return(
        <CreateContextApi.Provider
        value={{
            // @ts-ignore
            value: initValue,
            // @ts-ignore
            services: initService,
            // @ts-ignore
            mentor: initMentor,
            // @ts-ignore
            changeValue: handleChangeValue,
            // @ts-ignore
            changeServices: handleChangeServices,
            // @ts-ignore
            changeMentor: handleChangeMentors,
        }}
        >
            {props.children}
        </CreateContextApi.Provider>
    )
}
