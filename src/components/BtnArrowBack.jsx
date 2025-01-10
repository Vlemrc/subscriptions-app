import { useNavigate } from "react-router-dom";
const BtnArrowBack = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1); 
    };
    return (
        <button className="absolute top-10 left-6" onClick={handleBackClick}>
            <div className="h-0.5 w-3 bg-black -rotate-45 rounded-full"></div>
            <div className="h-0.5 w-3 bg-black rotate-45 translate-y-1.5 rounded-full"></div>
        </button>
    )
}
export default BtnArrowBack;