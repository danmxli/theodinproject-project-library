import CodeDisplay from "../codedisplay"
import RestaurantApp from "./restaurant/restaurantApp"
import React from "react"

const RestaurantDemo = () => {
    return (
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">Restaurant Page Project</h1>
            <h2 className="dark:text-indigo-400 mb-2">Project Overview</h2>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                This project is a multi-page web application designed for a restaurant. Features a contact page, menu, and homepage.
            </p>
            <h2 className="dark:text-indigo-400 mb-2">Project Interface - Try below!</h2>
            <RestaurantApp />
            <div className="p-2 bg-neutral-200 dark:bg-slate-900 border border-gray-400 dark:border-gray-700 rounded">
                <h2 className="dark:text-indigo-400 mb-2">Use the restaurant app as a component</h2>
                <div className="">
                    <CodeDisplay code={codeInstructions} />
                </div>
            </div>
        </div>
    )
}

const codeInstructions = 
`// navigate to:
// https://github.com/danmxli/theodinproject-project-library/tree/main/components/vanillajs/library/restaurant
// and download the files.


// example (.tsx):
import RestaurantApp from "./restaurant/restaurantApp"

const RestaurantDemo = () => {
    return (
        <div>
            <h1>Restaurant Page Project</h1>
            <h2>Project Overview</h2>
            <p>
                This project is a multi-page web application designed for a restaurant. Features a contact page, menu, and homepage.
            </p>
            <h2>Project Interface - Try below!</h2>
            <RestaurantApp />
        </div>
    )
}
`

export default RestaurantDemo