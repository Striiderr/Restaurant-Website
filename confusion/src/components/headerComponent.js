import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, Button, ModalBody, Form, FormGroup, Input,Label  } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

        constructor(props){
            super(props);
            this.state={
                isNavOpen : false,
                isModalOpen: false

            }
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
        }

        toggleNav(){
            this.setState({
                isNavOpen : !this.state.isNavOpen
            });
 
        }
        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        handleLogin(event){
            this.toggleModal();
            alert("Username :"+ this.username.value + "Password: "+ this.password.value + " Remember: "+ this.remember.checked);
            event.preventDefault();

        }
    render() {

        return (
            <>    

                <Navbar dark expand="md">

                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className='ms-5 ps-5' href="/">
                            <img src="assets/images/logo.png" height="40" width="50" alt="Ristorante Con Fusion " />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className=''>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className='fa fa-home fa-lg mx-1'></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className='fa fa-info fa-lg mx-1'></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className='fa fa-list fa-lg mx-1'></span>
                                        Menu

                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className='fa fa-address-card fa-lg mx-1'></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ms-auto' navbar>
                                <NavItem>
                                    <Button className="fw-bold fs-6 bg-light text-primary me-4" outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg'></span> Login
                                    </Button>
                                </NavItem>


                            </Nav>
                        </Collapse>
                </Navbar>


                <div className='container-fluid jumbotron'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6 ms-3'>
                            <h1 className='fw-bold fs-1'>Restorante Con Fusion</h1>
                            <p className='fw-light fs-6'>We take inspiration from the world's best cuisines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type='text' id='username' name='username' innerRef={(input)=>this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id='password' name='password'innerRef={(input)=>this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check><Input type='checkbox' name='remember' innerRef={(input)=>this.remember=input}/>Remember Me</Label>
                            </FormGroup>
                            <Button type='submit' value='submit ' color='primary'>Login</Button>
                        </Form>
                    </ModalBody>
            </Modal>
            </>
        );
    }
}
export default Header;