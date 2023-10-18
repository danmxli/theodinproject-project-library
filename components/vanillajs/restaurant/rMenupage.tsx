import React from 'react'

const RestaurantMenuPage = () => {

    const menuItems = [
        { name: 'Classic Burger 🍔♨️', price: '$8.99' },
        { name: 'Cheeseburger 🍔🧀', price: '$9.99' },
        { name: 'Veggie Burger 🍔🥦', price: '$7.99' },
        { name: 'Spicy Beef Burger 🍔🔥', price: '$10.99' },
        { name: 'Grizzly Burger 🍔🐻', price: '$12.99' },
        { name: 'The Big Whopper 🍔👹', price: '$15.99' },
        { name: 'Chicken Sandwich 🐔🥪', price: '$10.99' },
        { name: 'French Fries 🍟♨️', price: '$3.99' },
        { name: 'Onion Rings 🧅♨️', price: '$4.99' },
        { name: 'Classic Smoothie 🍓🍌', price: '$3.99' },
        { name: 'Rocky Road Ice Cream 🏞️🍨', price: '$5.99' },
        { name: 'Soda Slushie 🥤🧊', price: '$1.99' }
    ];

    return (
        <div>
            <div className="bg-neutral-100 dark:bg-slate-800">
                <header className="bg-zinc-500 dark:bg-gray-900 text-white p-4">
                    <h1 className="text-3xl font-semibold">Menu 📜</h1>
                </header>

                <main className="container mx-auto p-6">
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md hover:shadow-lg"
                                >
                                    <h3 className="text-xl font-semibold break-words">{item.name}</h3>
                                    <p className="text-gray-700 dark:text-gray-400">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </>
                </main>
            </div>
        </div>
    )
}

export default RestaurantMenuPage