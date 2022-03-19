import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import {useEffect} from "react";
import {useActions} from "../hooks/useActions";
import {wrapper} from "../store";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Header from "../components/Header/Header";
import {Container} from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {setIsAuth} = useActions()

    useEffect(() => {
        if (!!localStorage.getItem('auth')) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>S7 - Тестовое задание</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Container maxWidth="lg">
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default wrapper.withRedux(MyApp)