import React from 'react'

const RestaurantHomePage = () => {
    return (
        <>
            <div className="bg-neutral-100 dark:bg-slate-800">
                <header className="bg-zinc-500 dark:bg-gray-900 text-white p-4">
                    <h1 className="text-3xl font-semibold">Burger Express 🍔♨️</h1>
                </header>

                <main className="container mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Burger Express!</h2>
                    <p className="text-gray-700 dark:text-slate-400">
                        Enjoy the finest burgers in town, prepared with love and served with a smile.
                    </p>
                    <p className="text-gray-700 dark:text-slate-400 mt-2">
                        Explore our menu and experience the delicious world of burgers.
                    </p>

                    <div className="mt-8">
                        <a
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                        >
                            View Menu
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default RestaurantHomePage