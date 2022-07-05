import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';



export const ItemDetail = (({itemDetail}) => {  

 
  return (
    <>
      {
        <main className="row soloProduct" id= {itemDetail.id}>
            <aside>
              <img src={itemDetail.image} alt="item" className="itemImg responsive-img"/>
            </aside>
            <article>
              <div className=" col s12 m8">
                <h5 className="itemName">{itemDetail.title}</h5>
              </div>
              <div className="col s12 m4">
                <p className="itemPrice"> {itemDetail.price}</p>
              </div>
              <div className="col s12 m12">
                <p className="itemDescription">{itemDetail.description}</p>
              </div>
              <div className="col s12 m6">

              </div>
            </article>
        </main>
      }
    </>
  )

});

export default ItemDetail;