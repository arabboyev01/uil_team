import mobileIcon from "../../../public/assets/icons/phone.png";
import webIcon from "../../../public/assets/icons/laptop.png";
import testIcon from "../../../public/assets/icons/testing.png";
import desinIcon from "../../../public/assets/icons/design.png";
import marketingIcon from "../../../public/assets/icons/marketing.png";
import mobile from "../../../public/assets/services/mobile.png"
import web from "../../../public/assets/services/web.png"
import design from "../../../public/assets/services/dizayn.png"
import test from "../../../public/assets/services/social-marketing.png";
import main1 from "../../../public/assets/services/main-dizayn.png"
import main2 from "../../../public/assets/services/main-mobile.png"
import main3 from "../../../public/assets/services/main-social.png"
import main4 from "../../../public/assets/services/main-web.png"
import {SERVICE_DATA_TYPES} from "../../../types";
export const SERVICE_DATA: SERVICE_DATA_TYPES[] = [
    {
        id: 0,
        name: "Android Dasrturlash,",
        icons: mobileIcon,
        category: 0,
        image: mobile,
        mainImage: main2,
        desc: "iOS va Android Native ilovalari Agar siz murakkab va noyob mobil ilova yaratmoqchi bo'lsangiz, mahalliy rivojlanish yondashuvi sizning eng yaxshi tanlovingiz bo'ladi. Biz barcha biznes talablaringizni hisobga olgan holda va platformaga xos barcha nuanslarni hisobga olgan holda iOS va Android ilovalarini yaratamiz.\n" +
            "  Oʻzaro platformali mobil ilovalar Oʻzaro platformali ilovalarni ishlab chiqish bir vaqtning oʻzida iOS va Android uchun yechimlar yaratish imkonini beradi. Agar bu yondashuv loyiha g‘oyangizga mos kelsa, biz tez va xavfsiz, yoqimli UX taklif qiladigan va talabga ko‘ra kengaytirilishi mumkin bo‘lgan platformalararo mobil ilovalarni yaratamiz.\n" +
            "  Progressiv veb-ilovalar Agar siz progressiv veb-ilovani (PWA) yaratmoqchi bo'lsangiz, biz sizning ishlab chiqish hamkoringiz bo'lishimiz mumkin. Bizning jamoamiz yorqin va samarali progressiv veb-ilovalarni yaratish uchun barcha so'nggi vositalar va ramkalar haqida keng bilimga ega.",
    },
    {
        id: 1,
        name: "SMM xizmati,",
        icons: marketingIcon,
        category: 1,
        image: web,
        mainImage: main3,
        desc: "Ijtimoiy media marketingi barcha o'lchamdagi biznes uchun istiqbollar va mijozlarga erishishning kuchli usulidir. Odamlar ijtimoiy tarmoqlarda brendlarni kashf etadilar, o'rganadilar, kuzatib boradilar va sotib oladilar, shuning uchun agar siz Facebook, Instagram va LinkedIn kabi platformalarda bo'lmasangiz, buni sog'inasiz! Ajoyib ijtimoiy media marketingi sizning biznesingizga ajoyib muvaffaqiyat keltirishi, sodiq brend himoyachilari yaratishi va hatto yetakchilar va savdolarni yaratishi mumkin va biz sizga yordam bera olmaymiz.",
    },
    {
        id: 2,
        name: "UI/UX dizayner,",
        icons: desinIcon,
        category: 2,
        image: design,
        mainImage: main1,
        desc: "Prototiplash va Wireframing O'z fikringizni tasdiqlash va oxirgi foydalanuvchilar uchun qanday ko'rinishini tasavvur qilish uchun sizga UI prototiplari kerak bo'ladi. UIL - bu UI/UX dizayn xizmatlari kompaniyasi bo'lib, u sizning tasavvuringizga sho'ng'iydi, chuqur izlanishlar olib boradi va keng qamrovli simli ramkalar va syujetlar jadvallarini ishlab chiqadi.\n" +
            "  Mobile UI/UX Design Biz turli sohalarda mobil ilovalarni ishlab chiqdik va ishlab chiqdik va dasturiy mahsulotlarni foydalanuvchilar uchun chinakam zavqli qilish usullarini bilamiz. Biz ajoyib mobil UI/UX dizaynlarini yaratish uchun eng yangi texnologiyalar va platformaga xos barcha tafsilotlardan foydalanamiz.\n" +
            "  Web UI/UX dizayni Biz tez, ishonchli va interaktiv bo'lgan kengaytiriladigan va sezgir veb-saytlar va veb-platformalarni loyihalashtiramiz. Biz siz tasavvur qilgan har qanday veb-interfeysni hayotga keltira olamiz va u har qanday brauzer va qurilmada barqaror ishlashni namoyish etadi.",
    },
    {
        id: 3,
        name: "Web-Site Yaratish,",
        icons: webIcon,
        category: 3,
        image: test,
        mainImage: main4,
        desc: "Siz ishonishingiz mumkin bo'lgan veb-ishlab chiqish kompaniyasi Bizning to'liq stekli veb-saytlarni ishlab chiqish xizmatlari sizga moslashadi. Biz sizning qarashlaringiz, biznes ehtiyojlaringiz va hal qilmoqchi bo'lgan muammolaringiz asosida veb-saytlar va veb-ilovalarni yaratamiz. UIL muhandislari mustahkam backends va vizual jozibali frontendlarni yaratish uchun nima kerakligini biladilar, shaffof ishlab chiqish jarayoni esa mijozlarimizga har bir mahsulot xususiyatini doimo kuzatib borish imkonini beradi.\n" +
            "  Murakkab veb-platformalar Agar sizga tez va interaktiv veb-ilova kerak bo'lsa, siz to'g'ri joyga keldingiz. Biz SaaS bizneslari, elektron tijorat va boshqa kompaniyalarga veb-ilovalarni ishlab chiqish xizmatlarini taqdim etamiz, mavjud echimlarni yaxshilaymiz yoki yangilarini yaratamiz.\n" +
            "  Korporativ veb-saytlar Agar siz kompaniyangiz imidjini samarali sayt bilan ko'tarmoqchi bo'lsangiz, biz siz uchun sayt yaratishimiz mumkin. TRIARE har qanday murakkablikdagi veb-ishlab chiqish xizmatlarini taklif qiladi, xoh siz shunchaki ba'zi xususiyatlarni o'zgartirishingiz yoki ma'lumotlar bilan to'ldirilgan keng ko'lamli loyihani yaratishingiz kerak bo'ladimi.",
    },
    {
        id: 4,
        name: "Dasturlarni Tekshirish,",
        icons: testIcon,
        category: 4,
        image: mobile,
        mainImage: main1,
        desc: "Ijtimoiy media marketingi barcha o'lchamdagi biznes uchun istiqbollar va mijozlarga erishishning kuchli usulidir. Odamlar ijtimoiy tarmoqlarda brendlarni kashf etadilar, o'rganadilar, kuzatib boradilar va sotib oladilar, shuning uchun agar siz Facebook, Instagram va LinkedIn kabi platformalarda bo'lmasangiz, buni sog'inasiz! Ajoyib ijtimoiy media marketingi sizning biznesingizga ajoyib muvaffaqiyat keltirishi, sodiq brend himoyachilari yaratishi va hatto yetakchilar va savdolarni yaratishi mumkin va biz sizga yordam bera olmaymiz.",
    },
]
