import React from 'react';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function HomePage(){
    return(
        <>
            <Navigation/>
            <Content/>
            <h1>Hello world!😌</h1>
            <Footer />
        </>
    )
}