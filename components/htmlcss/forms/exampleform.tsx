const ExampleForm = () => {

    return (
        <form className="inline-block bg-stone-200 dark:bg-slate-900 rounded-lg" action={"/"} target="_blank" method="get">
                <div className="m-4 inline-block">
                    <label className="dark:text-slate-300 font-semibold">Email</label>
                    <input
                        className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                        type="text"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="m-4 inline-block">
                    <label className="dark:text-slate-300 font-semibold">Name</label>
                    <input
                        className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <br />
                <div className="inline-grid">
                    <div className="m-4">
                    <label className="dark:text-slate-300 font-semibold">Password</label>
                    <input
                        className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                        type="text"
                        placeholder="Enter your password"
                    />
                    </div>
                    <div className="m-4">
                        <label className="dark:text-slate-300 font-semibold">Confirm Password</label>
                        <input
                            className="w-full py-2 px-3 text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded"
                            type="text"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="m-4">
                        <label className="dark:text-slate-300 font-semibold">Message</label> <br />
                        <textarea
                        className="text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:outline-none rounded-md mt-1 py-2 px-3 h-32 w-full"
                            placeholder="What are you interested in?"
                        ></textarea>
                    </div>
                </div>
                
                <div className="m-4">
                <button className="text-black dark:text-purple-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-800 rounded py-2 px-4">
                        Submit
                    </button>
                </div>
        </form>
    );
}

export default ExampleForm;