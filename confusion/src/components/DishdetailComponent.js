import React from "react";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentComponent';



function RenderComments({ comments,addComment, dishId }) {
    if (comments == null) {
        return (<div></div>)
    }

        const cmnts = comments.map((comnt) => {
            return (

                <li key={comnt.id} > 
                    <p className="fst-normal">{comnt.comment}</p>
                    <p className="fw-lighter">
                        --<span className=" fw-bold">{comnt.author}, &nbsp;</span>
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
        
        console.log(cmnts);
        return (
            <div className="col-12 col-md-5 m-3">
                <h2 className="fw-bold fs-4"> Comments</h2>
                <ul className="list-unstyled m-2">
                    {cmnts}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    


}

function RenderCard({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-3 ">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle className="fw-bold fs-5 my-0" >{dish.name}</CardTitle>
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
// function RenderDish({dish}) {
//     if (dish != null) {
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <Card>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle> {dish.name}</CardTitle>
//                         <CardText> {dish.description} </CardText>
//                     </CardBody>
//                 </Card>
//             </div>   
//         );
//     }
//     else {
//         return (
//             <div></div>
//         );
//     }
// }

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
                    <h3 className="fw-bold">{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row justify-content-center">
                    <RenderCard dish={props.dish} />
                    <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id}
      />
            </div>
        </div>
    );
}


export default DishDetail;