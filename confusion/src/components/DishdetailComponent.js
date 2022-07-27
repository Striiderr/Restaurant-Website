import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



        
    function RenderComments({comments}){
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comnt => {
            return(
                        <li key = {comnt.id} >
                            <h5>{comnt.comment}</h5>
                            <p>--{comnt.author}, &nbsp;
                            {
                            new Intl.DateTimeFormat('en-US',{
                                year:'numeric',
                                month:'short',
                                day:'2-digit'}).format(new Date(comnt.date))
                            }
                            </p>
                            <br></br>
                        </li>
            );
        });
        
      return(
        <div className="col-12 col-md-5 m-1">
            <h2> Comments</h2>
            <br></br>
            <ul className="list-unstyled">
                {cmnts}
            </ul>
        </div>
      );  
    }

   function RenderCard({dish}){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                 <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                 <CardBody>
                     <CardTitle ><h2>{dish.name}</h2></CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
                 </Card> 
                 </div>
 
            );
        }
        else{
        return(
            <div></div>
        );
    }
    }

    const DishDetail=(props)=>{
        const dish=props.dish;
        if(dish){
        return(  
            <div className="container">
            <div className="row">
           <RenderCard dish={props.dish}/>
           <RenderComments comments={props.dish.comments}/>
           </div>
           </div>
        
    );}
    }
       

export default DishDetail;