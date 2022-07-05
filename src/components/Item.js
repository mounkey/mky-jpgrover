import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';


export const Item =(({item}) => {
 
return (
    <>
    {
      <div className="row product" id= {item.id}>
        <div className="col s6 m6">
          <a href="#!"><img src={item.image} alt="item" className="itemImg responsive-img"/></a>
        </div>
        <div className="col s6 m6">
          <h5 className="itemName">{item.title}</h5>
          <small className="itemCategory">{item.category}</small> <br/>
          <p className="itemPrice"> ${item.price}</p>
          <a href="#!" className="waves-effect waves-light btn">Add to Cart</a> 
        </div>
        <div className="col s12 m12">
          <p className="itemDescription">{item.description}</p>
        </div>          
        
      </div>      
    }
    </>
  )
});

export default Item;