'use client'
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MenuCategories from "@/components/MenuCategories";
import {useState} from "react";
import MenuItem from "@/components/MenuItem";
import useMenuItems from "@/hooks/useMenuItems";
import CartReview from "@/components/CartReview";
import {OnClickStepper} from "@/components/Layouts/OnClickStepper";
import {motion} from "framer-motion";


const allMenuItems = [
    {
        title: "BBQ Ribs",
        description: "Juicy BBQ ribs slow-cooked to perfection and glazed with our signature sauce. Served with coleslaw and garlic bread.",
        category: "Mains",
        imageSrc: '/bbq_ribs_example.jpg',
        price: 15.99
    },
    {
        title: "BBQ Coleslaw",
        description: "Juicy BBQ ribs slow-cooked to perfection and glazed with our signature sauce. Served with coleslaw and garlic bread.",
        category: "Mains",
        imageSrc: '/bbq_ribs_example.jpg',
        price: 15.99
    },
    {
        title: "BBQ Brisket",
        description: "Juicy BBQ ribs slow-cooked to perfection and glazed with our signature sauce. Served with coleslaw and garlic bread.",
        category: "Starters",
        imageSrc: '/bbq_ribs_example.jpg',
        price: 12.49
    },
    {
        title: "BBQ Soup",
        description: "Juicy BBQ ribs slow-cooked to perfection and glazed with our signature sauce. Served with coleslaw and garlic bread.",
        category: "Desserts",
        imageSrc: '/bbq_ribs_example.jpg',
        price: 8.99
    }
]


export default function Example() {

    const [currentCategory, setCurrentCategory] = useState("All")
    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
    }

    const menuCategories = ["All", "Starters", "Mains", "Desserts", "Drinks"];
    const [cartItems, setCartItems] = useState([])
    const menuItems = useMenuItems(allMenuItems, currentCategory, cartItems)

    const handleMenuItemClick = (title) => {
        const item = menuItems.find((items) => items?.title === title)
        setCartItems([...cartItems, item])
    }

    return <>
        <Banner imageUrl={'/restaurant_example.jpg'}
                restaurantName={'BBQ Restaurant'}/>
        <MenuCategories categories={menuCategories}
                        activeCategory={currentCategory}
                        onCategoryClick={handleCategoryClick}
        />
        {/*<OnClickStepper>*/}
        {menuItems.map((item, index) => (
            <motion.div
                key={index}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                transition={{type: 'spring', stiffness: 400, damping: 17}}
            >
                <MenuItem {...item} key={index}
                          inCart={cartItems.find((cartItem) => cartItem?.title === item.title)}
                          onClick={() => handleMenuItemClick(item.title)}
                />
            </motion.div>
        ))}
        {/*</OnClickStepper>*/}

        {cartItems.length > 0 && <CartReview cartItems={cartItems}/>}
    </>
}