import {createContext} from "react";
const CreateContextApi = createContext({
    value: {
        map(element: (item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => JSX.Element) {
            return undefined;
        }
    },
    services: {
        map(element: (item: { name: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined }) => JSX.Element) {
            return undefined;
        }
    },
    mentor: {
        map(element: (item: {name: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined}) => JSX.Element) {
            return undefined;
        }
    },
    changeValue: () => {},
    changeServices: () => {},
    changeMentor: () => {},
});
export default CreateContextApi;
