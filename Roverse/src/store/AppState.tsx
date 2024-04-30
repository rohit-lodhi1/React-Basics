import { useState } from "react";
import { AppContext } from "./AppContext"

export const AppState = ({ children }: { children: any }) => {
    const [loading, setLoading] = useState(false);
    return (
        <AppContext.Provider value={{
            loading, setLoading
        }}>
            {children}
        </AppContext.Provider>
    )

}