import { createContext } from "react";

let loading: any;
let setLoading: any;
export const AppContext = createContext({
    loading, setLoading
});