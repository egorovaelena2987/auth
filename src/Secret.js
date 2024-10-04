import { useAuth0 } from "@auth0/auth0-react";

const Secret = () => {
    const { isAuthenticated } = useAuth0();
    return(
        isAuthenticated && (
        <p>ClassFied!!!</p>
    ))
}

export default Secret;