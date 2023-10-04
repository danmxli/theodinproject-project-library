const ExampleDashboard = () => {
    return (
        <div className="flex">
            <aside className="w-52 bg-gray-900 p-6 overflow-clip">
                <h1 className="text-white lg:text-2xl sm:text-sm font-semibold">Dashboard</h1>
                <ul className="mt-4">
                    <li className="mb-2">
                        <a href="#" className="text-gray-300 hover:text-white">Tests</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-300 hover:text-white">Analytics</a>
                    </li>
                    <li className="lg:mb-48">
                        <a href="#" className="text-gray-300 hover:text-white">Reports</a>
                    </li>
                </ul>
            </aside>

            <main className="w-3/4 p-6">
                <h1 className="lg:text-2xl sm:text-sm font-semibold mb-4 overflow-auto">Welcome to the Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 break-words">
                    <div className="bg-white p-4 dark:bg-violet-950 shadow-md rounded-lg">Dan</div>
                    <div className="bg-white p-4 dark:bg-violet-950 shadow-md rounded-lg">Li</div>
                    <div className="bg-white p-4 dark:bg-violet-950 shadow-md rounded-lg">Card</div>
                    <div className="bg-white p-4 dark:bg-violet-950 shadow-md rounded-lg">Info</div>
                    <div className="bg-white p-4 dark:bg-violet-950 shadow-md rounded-lg">Info</div>
                </div>
            </main>
        </div>
    );
}

export default ExampleDashboard;