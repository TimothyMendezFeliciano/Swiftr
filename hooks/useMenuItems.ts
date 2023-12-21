import {useMemo} from "react";
import {MenuItemsType} from "@/types/MenuItems";

export default function useMenuItems(allMenuItems: MenuItemsType[], currentCategory: string, cartItems: MenuItemsType[]): MenuItemsType[] {

    return useMemo(() => {
        if (currentCategory === "All") {
            return allMenuItems
        } else {
            return allMenuItems.filter(item => item.category === currentCategory)
        }
    }, [allMenuItems, currentCategory, cartItems])
}