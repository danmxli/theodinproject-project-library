import Navbar from "@/components/navbar";
import "@/styles/custom.css";
import LibraryDemo from "@/components/vanillajs/library";
import TicTacToeDemo from "@/components/vanillajs/tictactoe";
import RestaurantDemo from "@/components/vanillajs/restaurant";

const PageTwo = () => {
    return(
        <main className="flex">
            <Navbar/>
            <div className="flex-1 p-4 h-screen overflow-y-auto scrollbar-hide">
                <LibraryDemo />
                <TicTacToeDemo />   
                <RestaurantDemo />
            </div>
        </main>
        
    );
};

export default PageTwo