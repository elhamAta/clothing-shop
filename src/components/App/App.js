import React from 'react';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Products from '../Products/Products';
import News from '../News/News';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import {
    BrowserRouter,
    Route,
    Switch } from 'react-router-dom'; 
import DetailNews from '../DetailNews/DetailNews';

function App()  {
    return(
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products/:id">
                            <Products />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/aboutUs">
                            <AboutUs />
                        </Route>
                        <Route path="/contactUs">
                            <ContactUs />
                        </Route>
                        <Route path="/detailNews/:id">
                            <DetailNews />
                        </Route>
                    </Switch>
                </Layout>              
            </BrowserRouter> 
        </div>
    );
}

export default App