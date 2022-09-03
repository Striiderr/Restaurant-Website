import React, { Component } from 'react';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import {Routes, Route, Navigate,Link, useParams} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

  render() { 
   
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0] }
                promotion={this.state.promotions.filter((promo) => promo.featured)[0] }
                leader={this.state.leaders.filter((leader) => leader.featured)[0] }
          />
      );
    }

  const DishWithId= () =>{
      const { id } = useParams();

      var parm1=this.state.dishes.filter((dish) => dish.id === Number(id))[0];
      var parm2=this.state.comments.filter((comment) => comment.id === Number(id));
      
      return(
          <DishDetail dish={parm1}
            comments={parm2} />
      );
    };


    return (

      <div>
        <Header />
        
          <Routes>
          <Route path="/" to='/home' element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
            <Route exact path= "/contactus" element={<Contact />} />
            <Route exact path= "/aboutus" element={<AboutUs leaders={this.state.leaders} />} />
            <Route path='/menu/:id' element={<DishWithId />} />
          </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;