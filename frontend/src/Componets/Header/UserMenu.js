import React from 'react';
import {ButtonToggle, DropdownItem, DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const UserMenu = ({user}) => {
    
    return (
        <UncontrolledDropdown className="text-dark ml-auto" nav inNavbar>
            <DropdownToggle className="text-dark "  nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <NavItem className="m-3" >
                        <ButtonToggle tag={RouterLink} to="/track_history" >Track history</ButtonToggle>{' '}
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};
export default UserMenu;