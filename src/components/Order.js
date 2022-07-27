import React, { useState, useEffect} from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, collection, getDoc } from "firebase/firestore"


const Order = (() => {
  const { orderID } = useParams();
  const [order, setOrder] = useState({});
  const [persons, setPersons] = useState([]);
  const [items, setItems] = useState([]);

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
        setPersons(order.form);
        setItems(order.items);
    }).catch(error => console.err);
  }, [orderID]);

  console.log(order, persons, items);
  return(
      <>
        <div className="container">
          <div className="row">
            <h2>Orden de Envio </h2>
            <div className="col s12 right-align">
              {orderID}
            </div>
            {
              persons.map((person, index) => {
                return(
                  <div className="col s12" key={index}>
                    <h2>person.phone</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>     
  );    
});

export default Order;