'use client'
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MenuCategories from "@/components/MenuCategories";
import {useState} from "react";
import MenuItem from "@/components/MenuItem";


export default function Example() {

    const [currentCategory, setCurrentCategory] = useState("All")
    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
    }

    const menuCategories = ["All", "Starters", "Mains", "Desserts", "Drinks"];
    const menuItems = [{
        title: "BBQ Ribs",
        description: "Juicy BBQ ribs slow-cooked to perfection and glazed with our signature sauce. Served with coleslaw and garlic bread.",
        category: "Mains",
        imageSrc: '/bbq_ribs_example.jpg',
        price: 15.99
    }]
    return <>
        <Banner imageUrl={'/restaurant_example.jpg'}
                restaurantName={'BBQ Restaurant'}/>
        <MenuCategories categories={menuCategories}
                        activeCategory={currentCategory}
                        onCategoryClick={handleCategoryClick}
        />
        {menuItems.map((item, index) => (
            <MenuItem {...item} key={index}/>
        ))}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            Menu Cart Order
        </div>
    </>
}