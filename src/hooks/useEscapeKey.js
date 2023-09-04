import ToastShelf from "../components/ToastShelf";
import React from "react";


function useEscapeKey(handler){
    React.useEffect(() => {
        function handleKeyDown(event) {
            // Handle space bar key press inside the window
            if (event.code === 'Escape') {
                // Escape bar was pressed inside the window
                console.log("Escape bar was pressed inside the window");
                handler();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
}

export default useEscapeKey;