
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
    const navigate = useNavigate();
    // pass to prev route,
    //route value to be received as a prop
    return (
        <button onClick={() => navigate(props.path)}>Back Button</button>
    );
};

export default BackButton;