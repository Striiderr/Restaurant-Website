import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>)
    }

    else {
        const cmnts = comments.map(comnt => {

            return (
                <li key={comnt.id} >
                    <p>{comnt.comment}</p>
                    <p>--{comnt.author}, &nbsp;
                        {
                            new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(comnt.date))
                        }
                    </p>
                    <br></br>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h2> Comments</h2>
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
            </div>
        );
    }

}

function RenderCard({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
}
function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            </div>   
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {


    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                       {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
              
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                    <RenderCard dish={props.dish} />
                    <RenderComments comments={props.comments} />
            </div>
        </div>
    );
}


export default DishDetail;