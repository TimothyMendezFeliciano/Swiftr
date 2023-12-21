import {ICategory, ILocation, IMenu, IMenuItems, IRestaurant, ITable} from "@/interfaces/interfaces";
import {uploadRestaurant} from "@/lib/firestore";
import {withFunctionTriggersDisabled} from "@firebase/rules-unit-testing"

// const BBQRibs = require("../public/bbq_ribs_example.jpg")

const categoryExamples: ICategory = {
    title: "Entree",
    id: "category1"
}

const exampleMenuItems: IMenuItems[] = [{
    id: "menuItem1",
    title: "Pizza Margherita",
    description: "Classic Margherita with fresh mozzarella and basil",
    // image: BBQRibs,
    availability: true,
    category: [
        categoryExamples
    ],
    price: 12.99
}]

const exampleMenu: IMenu = {
    id: "menu1",
    MenuItems: exampleMenuItems
}

const exampleLocation: ILocation = {
    latitude: 18.330260,
    longitude: -67.164287,
    coordinates: "18°19'49.1\"N 67°09'51.4\"W"
}

const exampleTable: ITable = {
    id: "table1",
    menu: exampleMenu,
    tableNumber: 1
}

const exampleRestaurant: IRestaurant = {
    id: "res1",
    name: "Timothy's Restaurant",
    menu: exampleMenu,
    location: exampleLocation,
    previousAvgOrderCount: 50,
    newAvgOrderCount: 55,
    tables: [exampleTable]
}

// uploadRestaurant(exampleRestaurant)
const seedFirestore = async (): Promise<void> => {

    await withFunctionTriggersDisabled(async () => {
       await uploadRestaurant(exampleRestaurant)
    })

}

seedFirestore()