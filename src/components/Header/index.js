import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from 'reactstrap';
import Logo from './logo';
import AvatarImage from '../../assets/image/avatar.jpg';


const navStyle = {
    backgroundColor: 'black',
    width: '100vw',
    paddingLeft: 0,
    paddingRight: 0,
    height: '7vh'
}

const avatarStyle = {
    backgroundImage: `url(${AvatarImage})`,
    backgroundSize: 'contain',
    marginRight: 30,
    width: 35,
    height: 35        
}
const Header  = (props) =>
<div>
    <Navbar color="black" dark expand="md" style={navStyle}>        
        { props.isSignedin &&
        <NavbarBrand href="/" style={{marginLeft: '10vw', height: "100%"}}>
            <Logo/>
        </NavbarBrand>
        }        
        <NavbarToggler />
        { props.isSignedin &&
        <Collapse navbar>
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <div style={avatarStyle} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
        }
    </Navbar>
</div>;

export default Header;