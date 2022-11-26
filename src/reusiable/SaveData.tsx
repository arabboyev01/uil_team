import {useState, useEffect} from "react";
export default function SaveData(data: any, secondData: any, setData: any,): void{
    const [initData, setInitData] = useState([]);
    useEffect(() => {
        const myId = typeof window !== "undefined" ? window.localStorage.getItem("id") : undefined;
        const filtered = secondData.filter((item: any) => item.category == myId);
        // @ts-ignore
        setInitData(filtered);
    }, [secondData]);
    useEffect(() => {
        const mainData = data === undefined ? initData : data;
        setData(mainData)
    }, [data, initData, setData]);
}
