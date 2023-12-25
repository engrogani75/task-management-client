import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CirclesWithBar } from "react-loader-spinner";

;

const PrivatRouter = ({ children }) => {
    const location = useLocation();
    const {user, loading}  = useAuth()

    if(loading){
        return <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
    }



    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivatRouter;