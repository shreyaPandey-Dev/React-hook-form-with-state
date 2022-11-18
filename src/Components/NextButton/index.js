
import { useNavigate } from "react-router-dom";



const NextButton = (props) => {
    const navigate = useNavigate();
    // pass to next route,
    //route value to be received as a prop
    return (
        <button onClick={() => navigate(props.path)}>Next Button</button>
    );
};

export default NextButton;