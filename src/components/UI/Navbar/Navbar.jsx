import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Iziet
            </MyButton>
            <div className="navbar__links">
                <Link to="/about"> Par saiti</Link>
                <Link to="/posts">Jaunumi</Link>
            </div>
        </div>
    );
};

export default Navbar;
