import Navbar from "@/components/navbar";
import TableDemo from "@/components/htmlcss/table";

const PageOne = () => {
    return(
        <main className="flex">
            <Navbar/>
            <div className="flex-1 p-4 h-screen overflow-y-auto">
                <TableDemo />
            </div>
        </main>
        
    );
};

export default PageOne