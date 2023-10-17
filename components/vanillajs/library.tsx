import LibraryLandingPage from "./library/landingPage";

const LibraryDemo = () => {
    return(
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">Library Project</h1>
            <h2 className="dark:text-indigo-400 mb-2">Project Overview</h2>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                Classical libraries hold literature that chart the advancement of humankind. With the expansion of the internet, this can be moved to online storage. Naturally, each piece of literature must meet certain requirements in order to be placed on a shelf in a library.
            </p>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                This project shows how to integrate HTML CSS and Javascript to create dynamic web applications. The implementation of Javascript objects and object constructors is demonstrated in this project.
            </p>
            <h2 className="dark:text-indigo-400 mb-2">Project Interface - Try below!</h2>
            <LibraryLandingPage />

        </div>
    );
}

export default LibraryDemo