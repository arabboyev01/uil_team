import {createContext} from "react";
const CreateContextApi = createContext({
    value: {},
    services: {},
    mentor: {},
    changeValue: () => {},
    changeServices: () => {},
    changeMentor: () => {},
});
export default CreateContextApi;
