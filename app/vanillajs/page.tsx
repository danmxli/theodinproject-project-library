import Navbar from "@/components/navbar";
import "@/styles/custom.css";
import LibraryDemo from "@/components/vanillajs/library";

const PageTwo = () => {
    return(
        <main className="flex">
            <Navbar/>
            <div className="flex-1 p-4 h-screen overflow-y-auto">
                <LibraryDemo />
            </div>
        </main>
        
    );
};

export default PageTwo