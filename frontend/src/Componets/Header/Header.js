import React from 'react';
import {ButtonToggle, Nav, NavItem} from "reactstrap";
import {NavLink as RouterLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Header = (props) => {
    const user = useSelector(state => state.users.user);
    return (
        <div>
            <Nav className="bg-primary" pills>
                <NavItem className="m-3" >
                    <ButtonToggle tag={RouterLink} to="/" >Main page</ButtonToggle>{' '}
                </NavItem>
                {user ?(
                    <UserMenu
                    user={user}
                    />
                ):(
                  <AnonymousMenu/>
                )}

            </Nav>
        </div>
    );
};
export default Header;