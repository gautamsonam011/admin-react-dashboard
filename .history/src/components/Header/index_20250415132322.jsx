import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.jpg";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
// import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { FaShieldAlt } from "react-icons/fa";
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElNotification, setAnchorElNotification] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpenMyAccountDropdown = (event) => {
        if (anchorEl) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleOpenMyAccountDropdownClose = () => {
        setAnchorEl(null);
    };

    // For Notification dropdown
    const handleOpennotificationsDrop = (event) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleClosenotificationsDrop = () => {
        setAnchorElNotification(null);
    };



    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center w-100">
                        {/* logo */}
                        <div className="col-sm-2">
                            <Link to="/" className="d-flex align-items-center logo">
                                <img src={logo} alt="logo" />
                                <span className="ml-2">e.com</span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center pl-4">
                            <Button className="rounded-circle"><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle"><MdOutlineLightMode /></Button>
                            <Button className="rounded-circle"><FaCartShopping /></Button>
                            <Button className="rounded-circle"><MdMarkEmailRead /></Button>
                            <Button className="rounded-circle" onClick={handleOpennotificationsDrop}>
                                <FaRegBell />
                            </Button>
                            <Menu
                                anchorEl={anchorElNotification}
                                open={Boolean(anchorElNotification)}
                                onClose={handleClosenotificationsDrop}
                                onClick={handleClosenotificationsDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClosenotificationsDrop}>
                                    Orders(12)
                                </MenuItem>
                                <Divider className="mb-2" />
                                <MenuItem onClick={handleClosenotificationsDrop}>
                                    <div className="d-flex align-items-center dropdown-list">
                                     
                                        <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src={logo} alt="profile" />
                                        </span>

                                    </div>
                                    <div className='dropdown-info'>
                                        <h4><b>Sona</b> added Leather New Shoes</h4>
                                        <p>Few minutes ago</p>
                                    </div>
                                    </div>
                                   
                                </MenuItem>
                            </Menu>

                            <div className="myAccountWrapper">
                                <Button className="myAccount d-flex align-items-center" onClick={handleOpenMyAccountDropdown}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src={logo} alt="profile" />
                                        </span>

                                    </div>
                                    <div className="userInfo">
                                        <h5>Sonam Gautam</h5>
                                    </div>

                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleOpenMyAccountDropdownClose}
                                        onClick={handleOpenMyAccountDropdownClose}
                                        slotProps={{
                                            paper: {
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&::before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleOpenMyAccountDropdownClose}>
                                            <Avatar /> Profile
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleOpenMyAccountDropdownClose}>
                                            <ListItemIcon>
                                                <FaShieldAlt fontSize="small" />
                                            </ListItemIcon>
                                            Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleOpenMyAccountDropdownClose}>
                                            <ListItemIcon>
                                                <Settings fontSize="small" />
                                            </ListItemIcon>
                                            Settings
                                        </MenuItem>
                                        <MenuItem onClick={handleOpenMyAccountDropdownClose}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header