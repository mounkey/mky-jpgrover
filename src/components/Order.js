import React, { useState, useEffect} from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, collection, getDoc } from "firebase/firestore"
import  OrderPersons from "./OrderPersons";
import  OrderProducts from "./OrderProducts";
import  OrderInformations from "./OrderInformations";


const Order = (() => {
  const { orderID } = useParams();
  const [order, setOrder] = useState({});
  const [person, setPerson] = useState({});
  const [products, setProducts] = useState({});
  
  useEffect(() => {
    const ventasCollection = collection(db, 'ventas');
    const referenceDoc = doc(ventasCollection, orderID);
    getDoc(referenceDoc)
    .then(result => {
        const order = {
          id: result.id,
          ...result.data(),
        }
        setOrder(order);
        setPerson(order.form);
        setProducts(order.items);
    }).catch(error => console.err);
  }, [orderID]);
  console.log(order, person, products);
  return(
      <>
        <main>
          <div className="row">
            <div className="center-align">
              <h3>Orden de Compra</h3>
            </div>
            <div className="col s12 right-align ">
              Identificador de la compra: {orderID}
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content red white-text">
                  <span className="card-title">Datos del Cliente</span>
                  <div className="left-align">
                    <OrderPersons person={person} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card ">
                <div className="card-content">
                  <span className="card-title">Dato Pago</span>
                  <div className="right-align datoPago">
                    <OrderInformations order={order} />
                  </div>
                </div>
              </div>             
            </div>          
          </div> 
          <div className="card">
            <div className="card-content">
              <span className="card-title">Datos Productos</span>
              <div className="right-align">
                
              </div>
            </div>
          </div>
        </main>        
      </>     
  );    
});

export default Order;