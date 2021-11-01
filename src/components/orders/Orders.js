import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

function Orders() {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    console.log(orders, "Orders");
    const {user} = useAuth();
    useEffect(() => {
       fetch(`http://localhost:5000/orders?email=${user.email}`, {
           headers: {
               'authorization': `Bearer ${localStorage.getItem('idToken')}`
           }
       })
       .then(res => {
           if(res.status === 200){
               return res.json();
           } else if(res.status === 401){
            history.push('/login')
           }
       })
       .then(data => setOrders(data));
    },[]);

    return (
        <div>
            <h2>This is orders length: {orders.length}.</h2>
            <ul>
                {orders.map(order => <li key={order._id}>
                    {order.name} : {order.email}
                </li>)}
            </ul>
        </div>
    )
}

export default Orders;
