import {useState, useEffect} from "react";
export default function saveData(data: any, secondData: any, getData: any, ){
    const myId = typeof window !== "undefined" ? window.localStorage.getItem("id") : undefined;
    const [initData, setInitData] = useState([]);
    useEffect(() => {
        const filtered = secondData.filter((item: any) => item.category == myId);
        // @ts-ignore
        setInitData(filtered);
    }, []);
    useEffect(() => {
        const mainData = data === undefined ? initData : data;
        getData(mainData)
    }, [ myId, initData]);
}
