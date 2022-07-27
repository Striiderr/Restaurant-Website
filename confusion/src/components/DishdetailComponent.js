import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={

        };
    }

    render(){
    return(
        <div className="col-12 col-md-5 m-1">
           <Card key={this.props.selectedDish.id}></Card>    
        </div>
        // <div className="col-12 col-md-5 m-1">
        //    <Card key={this.props.selectedDish.id}>
        //     <CardImg width="100%" object src={this.props.selectedDish.image} alt={this.props.selectedDish.name}></CardImg>
        //     <CardBody>
        //         <CardTitle><h2>{this.props.selectedDish.name}</h2></CardTitle>
        //         <CardText>{this.props.selectedDish.description}</CardText>
        //     </CardBody>
        //     </Card> 
        //     </div>

    );
}
}

export default DishDetail;