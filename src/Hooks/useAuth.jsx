import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProbider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth; 
};

export default useAuth;