import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';

const Header = (props) => {
    return (
        <header data-test={"headerComponent"}>
            <div className={"wrap"}>
                <div data-test={"logoIMG"}>
                    <img className={"logo"} src={Logo} alt={"Logo"} />
                </div>
            </div>
        </header>
    )
};

export default Header;