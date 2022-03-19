import React from 'react';
import {CircularProgress, Container} from "@mui/material";
import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <Container className={styles.container}>
            <CircularProgress/>
        </Container>
    );
};

export default Loading;