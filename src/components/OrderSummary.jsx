import Button from "@restart/ui/esm/Button";
import React from "react";
import Row  from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import  Col from "react-bootstrap/Col";
import {savingDataFirebase} from '../firebaseConfig';
import './TableOrders';


export default function Ordersummary(props){
    const {billItems, onAdd, onRemove, resetOrder} = props; 
    const itemsPrice = billItems.reduce((a,c)=> a+c.price*c.qty,0);
    const taxPrice = itemsPrice*0.10;
    /* const getDate = () => {
        const hoy = new Date();
        const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
        const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
        const fechaYHora = `${fecha} ${hora}`;
        return fechaYHora;
      }; */
    const totalPrice = itemsPrice + taxPrice;   


   return (
       <div className = 'billContainer'>  
        <div className='billTitleContainer'> 
        
            <h1 className= 'billTitle'  xs={2}> RESUMEN DEL PEDIDO </h1>  
            </div>   
           
            <div className= 'orderContainer'>{billItems.length === 0 && <div>Agrega productos al resumen del pedido</div>}</div>
        {billItems.map((product)=>(
        <div key={product.id} className='row'>
            <div>{product.name} </div>
            <Button onClick={()=>onAdd(product)} className='add'>+</Button>
            <Button onClick={()=>onRemove(product)} className='remove'>-</Button>

        <div>{product.qty} x ${product.price.toFixed(2)} </div>
        </div> 
    ))}
    {billItems.length !== 0 && (
        <>
        <hr></hr>
        <div className= 'row'>
            <div>Precio del producto</div>
            <div> $ {itemsPrice.toFixed(2)} </div>
        </div>
        <div className= 'row'>
            <div>Impuesto</div>
            <div> $ {taxPrice.toFixed(2)} </div>
        </div>
        <div className= 'row'>
            <div>Total</div>
            <div> $ {totalPrice.toFixed(2)} </div>
        </div>

        </>
    )}
      <div className= 'sendtoKitchen'>
            <Button onClick={()=>savingDataFirebase(billItems)}  className="botoncocina"  variant="warning">Guardar pedido</Button>{' '}
            {console.log(billItems)};
            <Button onClick={()=>resetOrder()} className="botonReset" variant="warning">Tomar otro pedido</Button>{' '}
            </div>


    </div>


    )
    };

