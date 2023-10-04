import Navbar from "@/components/navbar";
import TableDemo from "@/components/htmlcss/table";
import FormDemo from "@/components/htmlcss/forms";
import "@/styles/custom.css";

const PageOne = () => {
    return(
        <main className="flex">
            <Navbar/>
            <div className="flex-1 p-4 h-screen overflow-y-auto">
                <TableDemo />
                <FormDemo />
            </div>
        </main>
        
    );
};

export default PageOne