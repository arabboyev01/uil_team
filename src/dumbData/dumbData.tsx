import brochure1 from "../../public/assets/images/about-brochure.png";
import brochure2 from "../../public/assets/images/happy-customers.png";
import mentor1 from "../../public/assets/mentors/mentor1.jpg"
import mentor2 from "../../public/assets/mentors/mentor2.png"
import mentor3 from "../../public/assets/mentors/mentor3.png"
import mentor4 from "../../public/assets/mentors/mentor4.png"
import {CONTACT_DATA_TYPES, EFFORT_DATA_TYPES, MENTORS_DATA_TYPES} from "../../types";
import mobileIcon from "../../public/assets/icons/phone.png";
import laptopIcon from "../../public/assets/icons/laptop.png";
import testingIcon from "../../public/assets/icons/testing.png";
import designIcon from "../../public/assets/icons/design.png";
import image1 from "../../public/assets/services/web.png";
import image2 from "../../public/assets/services/mobile.png";
import image3 from "../../public/assets/services/dizayn.png";
import image4 from "../../public/assets/services/social-marketing.png";
export const ABOUT_BROCHURE = {
    subTitle: "Qisqa tanishtiruv.",
    title: "Eng ilg'or Software agentstva va IT yechim albatta UILda.",
    image:brochure1,
    description: "Biz sizga samoviy va'dalarni bermaymiz! Sunnatga amal qilamiz va qolgani Allohdandir.",
    offer: "O‘zbekistondagi IT bozoriga rivojlanish olib kelish va unda o‘z o‘rnimizni egallash.",
}
export const SECOND_ABOUT_BROCHURE = {
    subTitle: "Mijozlarimizning fikri.",
    title: "Kompaniya haqida nima deya olamiz ?",
    image:brochure2,
    description: "Ular allaqachon bilgan platformada o'zlarining Grafik dizayni bilan yaxshi va o'zlarini qulay his qilishadi.. Men haqimda men My WP Blog/saytlarim uchun maxsus dasturiy ta'minotdan foydalanaman. Men boshqa pudratchilar bilan davom etishni afzal ko'raman.",
    offer: "Innavatsion websitelar yechimini shu yerda topishingiz mumkin.",
}
export const MENTORS_DATA: MENTORS_DATA_TYPES[] = [
    {
        id: 0,
        name: "Abbosbek Arabboev",
        image: mentor1,
        category: 0,
        bgImage:image1 ,
        job: "Frontend Dasturchi",
        desc: "Salom! Mening ismim Abbos va men internetda yashovchi narsalarni yaratishni yoqtiraman. Mening veb-saytlarni ishlab chiqishga bo'lgan qiziqishim 2017 yilda o'zimning ijtimoiy veb-saytlarim mavzularini yaratishga qaror qilganimda boshlangan edi - ma'lum bo'lishicha, maxsus reblog tugmachasini buzish menga HTML va CSS haqida ko'p narsalarni o'rgatgan!\n" +
            "\n" +
            "Bugungi kunga shoshiling va men reklama agentligida, startapda, yirik korporatsiyada va talabalar boshchiligidagi dizayn studiyasida ishlash sharafiga muyassar bo'ldim. Bugungi kunda mening asosiy e'tiborim turli mijozlar uchun Upstatement-da qulay, inklyuziv mahsulotlar va raqamli tajribalarni yaratishdir. ",
        skills: [
            {
                name: '',
            }
        ],
    },
    {
        id: 1,
        name: "Abdulboriy Nomonov",
        image: mentor2,
        category: 1,
        bgImage: image2,
        job: "Frontend Dasturchi",
        desc: "",
        skills: [
            {
                type: 'Javascript',
            },
            {
                type: 'Typescript',
            },
            {
                type: 'Next Js',
            },
            {
                type: 'React Js',
            },
            {
                type: 'React Native',
            },
        ],
    },
    {
        id: 2,
        name: "Behzodbek  Arabboev",
        image: mentor3,
        category: 2,
        bgImage: image3,
        job: "Frontend Dasturchi",
        desc: "",
        skills: [
            {
                name: '',
            }
        ],
    },
    {
        id: 3,
        name: "Umidjon Xusniddin o'g'li",
        image: mentor4,
        category: 3,
        bgImage: image4,
        job: "Frontend Dasturchi",
        desc: "",
        skills: [
            {
                name: '',
            }
        ],
    },
]

export const EFFORT_DATA: EFFORT_DATA_TYPES[] = [
    {
        id: 0,
        title: "Website Dasturlash",
        description: "Agar siz progressiv veb-ilovani (PWA) yaratmoqchi bo'lsangiz, biz sizning rivojlanish hamkoringiz bo'lishimiz mumkin. Bizning jamoamiz yorqin va samarali progressiv veb-ilovalarni yaratish uchun barcha so'nggi vositalar va ramkalar haqida keng bilimga ega.",
        icon: laptopIcon,
    },
    {
        id: 1,
        title: "Dasturlarni tekshirish",
        description: "Avtomatlashtirishni sinovdan o'tkazish vositalari bo'yicha nou-xau bilan bizning jamoamiz rekord tezlikda benuqson sifatga erishishingizga yordam beradi. Ushbu yondashuv vaqtni tejaydi va sifatni buzmasdan sinov qamrovini oshiradi.",
        icon: testingIcon,
    },
    {
        id: 2,
        title: "UI/UX dizayn.",
        description: "Biz tez, ishonchli va interaktiv bo'lgan kengaytiriladigan va sezgir veb-saytlar va veb-platformalarni loyihalashtiramiz. Biz siz tasavvur qilgan har qanday veb-interfeysni hayotga keltira olamiz va u har qanday brauzer va qurilmada barqaror ishlashni namoyish etadi.",
        icon: designIcon,
    },
    {
        id: 3,
        title: "Mobile Dasturlash",
        description: "Agar siz kompaniyangiz imidjini samarali sayt bilan ko'tarmoqchi bo'lsangiz, biz siz uchun sayt yaratishimiz mumkin. TRIARE har qanday murakkablikdagi veb-ishlab chiqish xizmatlarini taklif qiladi, xoh siz shunchaki ba'zi xususiyatlarni o'zgartirishingiz yoki ma'lumotlar bilan to'ldirilgan keng ko'lamli loyihani yaratishingiz kerak bo'ladimi.",
        icon: mobileIcon,
    },
];
export const CONTACT_DATA: CONTACT_DATA_TYPES[] = [
    {
        id: 0,
        title: "Biz har doim tayyormiz",
        description: "Biz sizga o'z biznesingizni online olamga olib kirishingizga yordam beramiz",
    },
    {
        id: 1,
        title: "Manzilimiz",
        description: "Loyihaviy Mashrab 7-uy, Andijon Shahri",
    },
    {
        id: 2,
        title: "ALoqadamiz",
        description: "Ro'yhatdan o'ting",
    },
]
