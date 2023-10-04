import ExampleDashboard from "./grid/exampledashboard";

const GridDemo = () => {

    return(
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">CSS Grid</h1>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                You can optimize content organization with CSS Grid.
            </p>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                By implementing a two dimensional grid based layout, you can ensure a responsive front end design for both desktop and mobile screens. 
            </p>
            <h2 className="dark:text-indigo-400 text-xl mb-2">Example Site Dashboard</h2>
            <ExampleDashboard />
        </div>
    );
};

export default GridDemo