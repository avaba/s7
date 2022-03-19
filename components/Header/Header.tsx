import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../public/image/logo_s7.svg'
import Image from "next/image";
import {RoutePath} from "../../types/route";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const pages = [
    {label: 'Главная', path: RoutePath.home,},
    {label: 'Пользователи', path: RoutePath.users,},
    {label: 'Профиль', path: RoutePath.profile},
];

const Header = () => {
    const router = useRouter()
    const {isAuth} = useTypedSelector(state => state.login)
    const {logOut} = useActions()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClickMenu = (path: string) => {
        setAnchorElNav(null);
        router.push(path)
    }

    const handleLogIn = () => {
        isAuth ? logOut() : router.push('/login')
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        <Image src={logo} alt={'Логотип s7'} width={100} height={80}/>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.label}
                                    onClick={() => handleClickMenu(page.path)}
                                >
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        <Image src={logo} alt={'Логотип s7'} width={100} height={80}/>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                onClick={() => handleClickMenu(page.path)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Button
                            onClick={handleLogIn}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            {isAuth ? 'Выйти' : 'Войти'}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;