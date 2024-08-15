import { useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";



export default function Logout() {
    const navigate = useNavigate();
    doSignOut()
    .then(() => {
        navigate('/login');
    });
}