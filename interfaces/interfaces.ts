import {StaticImageData} from "next/image";

export interface IRestaurant {
    id: string,
    name: string
    menu: IMenu,
    location: ILocation
    previousAvgOrderCount: number,
    newAvgOrderCount: number,
    tables: ITable[]
}

export interface IMenu {
    id: string,
    MenuItems: IMenuItems[]
}

export interface IMenuItems {
    id: string,
    title: string,
    description: string,
    image?: StaticImageData,
    availability: boolean,
    category: ICategory[],
    price: number
}

export interface ICategory {
    id: string,
    title: string,
    Icon?: any
}

export interface ILocation {
    latitude: number,
    longitude: number,
    coordinates: string
}

export interface ITable {
    id: string,
    menu: IMenu
    tableNumber: number,
}

