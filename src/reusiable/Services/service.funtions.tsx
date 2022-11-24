import {SERVICE_DATA} from "./serviceData";

export default function ServiceFuntions(btnId: number){
    return SERVICE_DATA.filter(item => item.category === btnId);
}
