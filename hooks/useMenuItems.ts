import {useMemo} from "react";

export default function useMenuItems(allMenuItems, currentCategory, cartItems) {

    return useMemo(()=> {
        if(currentCategory === "All") {
            return allMenuItems
        } else {
            return allMenuItems.filter(item => item.category === currentCategory)
        }
    },[allMenuItems, currentCategory, cartItems])
}