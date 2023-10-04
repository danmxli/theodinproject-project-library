const ExampleForm = () => {

    return (
        <form className="inline-block bg-violet-200 dark:bg-black" action={"/"} target="_blank" method="get">
                <div className="m-4 inline-block">
                    <label className="dark:text-slate-300 font-semibold">Email</label>
                    <input
                        className="dark:bg-zinc-700 border border-zinc-600 focus:outline-none rounded-md mt-1 py-2 px-3 dark:text-zinc-100 w-full"
                        type="text"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="m-4 inline-block">
                    <label className="dark:text-slate-300 font-semibold">Name</label>
                    <input
                        className="dark:bg-zinc-700 border border-zinc-600 focus:outline-none rounded-md mt-1 py-2 px-3 dark:text-zinc-100 w-full"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <br />
                <div className="inline-grid">
                    <div className="m-4">
                    <label className="dark:text-slate-300 font-semibold">Password</label>
                    <input
                        className="dark:bg-zinc-700 border border-zinc-600 focus:outline-none rounded-md mt-1 py-2 px-3 dark:text-zinc-100 w-full"
                        type="text"
                        placeholder="Enter your password"
                    />
                    </div>
                    <div className="m-4">
                        <label className="dark:text-slate-300 font-semibold">Confirm Password</label>
                        <input
                            className="dark:bg-zinc-700 border border-zinc-600 focus:outline-none rounded-md mt-1 py-2 px-3 dark:text-zinc-100 w-full"
                            type="text"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="m-4">
                        <label className="dark:text-slate-300 font-semibold">Message</label> <br />
                        <textarea
                            className="dark:bg-zinc-700 border border-zinc-600 focus:outline-none rounded-md mt-1 py-2 px-3 dark:text-zinc-100 h-32 w-full"
                            placeholder="What are you interested in?"
                        ></textarea>
                    </div>
                </div>
                
                <div className="m-4">
                    <button className="bg-violet-300 dark:bg-slate-700 dark:text-zinc-100 py-2 px-4 rounded-md">
                        Submit
                    </button>
                </div>
        </form>
    );
}

export default ExampleForm;