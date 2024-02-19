import { Alert } from "antd";
import toast from "react-hot-toast";

export const Errs = (error)=>{
    if (error.response.data.message){
        toast.custom(<Alert
            message={error.response.data.message}
            type="error"
            showIcon
            closable
        />);
    }
}