import mobileIcon from "../../../public/assets/icons/phone.png";
import webIcon from "../../../public/assets/icons/laptop.png";
import testIcon from "../../../public/assets/icons/testing.png";
import desinIcon from "../../../public/assets/icons/design.png";
import marketingIcon from "../../../public/assets/icons/marketing.png";
import mobile from "../../../public/assets/services/mobile.png"
import web from "../../../public/assets/services/web.png"
import design from "../../../public/assets/services/dizayn.png"
import test from "../../../public/assets/services/social-marketing.png"
import {SERVICE_DATA_TYPES} from "../../../types";
export const SERVICE_DATA: SERVICE_DATA_TYPES[] = [
    {
        id: 0,
        name: "Android Dasrturlash,",
        icons: mobileIcon,
        category: 0,
        image: mobile,
    },
    {
        id: 1,
        name: "Ijtimoiy tarmoqlar marketingi,",
        icons: marketingIcon,
        category: 1,
        image: web,
    },
    {
        id: 2,
        name: "UI/UX dizayner,",
        icons: desinIcon,
        category: 2,
        image: design,
    },
    {
        id: 3,
        name: "Web-Site Yaratish,",
        icons: webIcon,
        category: 3,
        image: test,
    },
    {
        id: 4,
        name: "Dasturlarning Tekshirish,",
        icons: testIcon,
        category: 4,
        image: mobile,
    },
]
