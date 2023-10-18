import React from 'react'

const RestaurantContactPage = () => {
    return (
        <div>
            <div className="bg-neutral-100 dark:bg-slate-800">
                <header className="bg-zinc-500 dark:bg-gray-900 text-white p-4">
                    <h1 className="text-3xl font-semibold">Contact ☎️</h1>
                </header>

                <main className="container mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Burger Express embraces all.</h2>
                    <p className="text-gray-700 dark:text-slate-400">
                        Here, we promote growth and support under the guidance of an amazing staff.
                    </p>
                    <p className="text-gray-700 dark:text-slate-400 mt-2">
                        Feel free to contact us! We are available around the clock.
                    </p>

                    <div className="mt-8">
                        <a
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                        >
                            647-555-4444
                        </a>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RestaurantContactPage