import * as React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home'
    });
    return (
        <>
            <NavBar />
        </>
    )
}
export default HomePage;