import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component {
    render(){
        return(
            <>

            <Navbar dark color="">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>

           
            <div className='container-fluid jumbotron'>
                <div className='row row-header'>
                    <div className='col-12 col-sm-6'>
                        <h1>Restorante Con Fusion</h1>
                        <p>We take inspiration from the world's best cuisines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>

            
            </>
        );
    }
}
export default Header;