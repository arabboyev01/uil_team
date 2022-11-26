export interface NAV_DATA_TYPES {
    id: number,
    name: string,
    link: string,
    transition: number,
}
export interface SERVICE_DATA_TYPES {
    id: number,
    name: string,
    icons: any,
    category: number,
    image: any,
    mainImage:  any,
    desc: string,
}
export interface PORTFOLIO_DATA_TYPES {
    id: number,
    image: any,
    category: number,
    name: string,
    description: string,
    link: string,
}
export interface TESTEMONIAL_DATA_TYPES {
        id: number,
        name: string,
        image: any,
        title: string,
        description: string,
}
export interface MENTORS_DATA_TYPES {
    id: number,
    name: string,
    image: any,
    category: number,
    bgImage: any,
    job: string,
    desc: string,
    skills: any,
}
export interface EFFORT_DATA_TYPES  {
    id: number,
    title: string,
    description: string,
    icon: any,
}
export interface CONTACT_DATA_TYPES {
    id: number,
    title: string,
    description: string,
}
