import React from 'react'

const Formdata = () => {


    const Orders = [
        {
            orderId: 101,
            customer: "Yash",
            totalAmount: 4500,
            status: "delivered",
            items: [
                { name: "Laptop", price: 4000, category: "electronics" },
                { name: "Mouse", price: 500, category: "electronics" }
            ]
        },
        {
            orderId: 102,
            customer: "Amit",
            totalAmount: 1500,
            status: "pending",
            items: [
                { name: "Shoes", price: 1500, category: "fashion" }
            ]
        },
        {
            orderId: 103,
            customer: "Ram",
            totalAmount: 7000,
            status: "delivered",
            items: [
                { name: "Phone", price: 7000, category: "electronics" }
            ]
        },

        {
            orderId: 104,
            customer: "Priya",
            totalAmount: 3000,
            status: "cancelled",
            items: [
                { name: "Watch", price: 3000, category: "fashion" }
            ]
        }
    ];

    const Status = Orders.filter((val) => {
        return val.status === "delivered" && val.totalAmount >= 4000
    })


    const Data = Orders.filter((num) => {
        return num.status === 'delivered'

    })

    const phoneOrders = Orders.filter((mobile) =>
        mobile.items.find((item) => item.name === "Phone")
    );


    // const Finddata = Orders.filter((datastore) => {
    //     return datastore.items.find((item) => item.category === "electronics") && datastore.status === "delivered"
    // })

    const Finddata = Orders.filter((datastore) => {
    return datastore.items.some((item) => item.category === "electronics") 
           && datastore.status === "delivered"
})


    const totalPrice = Finddata.map((order) =>
    (
        order.items.filter((item) => item.category === "electronics")
            .reduce((sum, item) => sum + item.price, 0)
    ))
        .reduce((grandtotal, orderTotal) => grandtotal + orderTotal, 0)


    return (
        <div>
            {Status.map((order) => {
                return (
                    <h1 key={order.orderId}>
                        Order id is a : {order.orderId}
                    </h1>
                )
            })}

            {Data.map((name) => {
                return (
                    <h1 key={name.customer}>
                        Name & CustomerID:   Name:"{name.customer}" &  id is:
                        {name.totalAmount}
                    </h1>
                )
            })}

            {phoneOrders.map((mobile) => {
                return (
                    <h1 key={mobile.orderId}>
                        Phone users :Id Is
                        " {mobile.orderId}"
                    </h1>
                )
            })}

            <table border="1">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>All totel</th>

                    </tr>
                </thead>

                <tbody>
                    {Finddata.map((newdata) => (
                        <tr key={newdata.orderId}>
                            <td>{newdata.orderId}</td>
                            <td>{newdata.customer}</td>
                            <td>{newdata.totalAmount}</td>
                            <td>{newdata.status}</td>
                            <td>{totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>





        </div>
    )
}

export default Formdata