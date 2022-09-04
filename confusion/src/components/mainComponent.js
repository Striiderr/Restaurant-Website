import React, { Component } from 'react';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import { addComment } from '../redux/ActionCreators';
import {Routes, Route, Navigate,Link, useParams} from 'react-router-dom';

import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    dishes: state.dishes,
    comments: state.comments, 
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {

  constructor(props) {
    super(props);

  }
  render() { 
   
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0] }
                promotion={this.props.promotions.filter((promo) => promo.featured)[0] }
                leader={this.props.leaders.filter((leader) => leader.featured)[0] }
          />
      );
    }

  const DishWithId= () =>{

      const { id } = useParams();

      var parm1=this.props.dishes.filter( (dish) => dish.id == Number(id))[0];
      var parm2=this.props.comments.filter((comment) => comment.dishId == Number(id));
      //  console.log(parm2);
      //  console.log( this.props.comments);
      return(
          <DishDetail dish={parm1}
            comments={parm2}
            addComment={this.props.addComment} />
      );
    };


    return (

      <div>
        <Header />
        
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route exact path="/menu" element={<Menu dishes={this.props.dishes} />} />
            <Route exact path= "/contactus" element={<Contact />} />
            <Route exact path= "/aboutus" element={<AboutUs leaders={this.props.leaders} />} />
            
            <Route path='/menu/:id' element={<DishWithId />} />

          </Routes>

        <Footer />
      </div>
    );
  }
}

export default (connect(mapStateToProps,mapDispatchToProps)(Main));