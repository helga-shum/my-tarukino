import React from 'react'
import Blog from '../components/Blog';
import Catalog from '../components/Catalog';
import Contacts from '../components/Contacts';
import Factory from '../components/Factory';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Offer from '../components/Offer/Offer';
import Price from '../components/Price';
import Reviews from '../components/Reviews';
import Questions from '../components/Questions';


function Main() {
    return (

        <div>
            <Header />
            <Offer />
            <Features />
            <Catalog />
            <Blog />
            <Price />
            <Reviews />
            <Offer />
            <Factory />
            <Contacts />
            <Questions />
            <Footer />
        </div>
    )
}

export default Main
