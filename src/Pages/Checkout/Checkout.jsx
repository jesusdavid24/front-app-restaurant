import React, { useState } from "react";
import AddressList from "../../Components/AddressList/AddressList";
import Paymentitems from "../../Components/Paymentitems/Paymentitems";
import CardView from "../../Components/CardView/CardView";
import "./Checkout.css"

const Checkout = () => {
    const [addresses, setAddresses] = useState([])
    const [paymentitems, setPaymentitems] = useState([])

    const addAddress = (address) => {
        setAddresses([...addresses, address])
    }

    const removeAddress = (index) => {
        const updateAddress = [...addresses]
        updateAddress.splice(index, 1)
        setAddresses(updateAddress)
    }

    const addPaymentitem = (item) => {
        setPaymentitems([...paymentitems, item])
    }

    const removePaymentitem = (index) => {
        const updatePaymentitems = [...paymentitems]
        updatePaymentitems.splice(index, 1)
        setPaymentitems(updatePaymentitems)
    }

return (
    <div>
        <div className="container_card_address">
            <h1>Vista de pagos</h1>
            <h2>Direcciones</h2>
            <AddressList
                addresses={addresses}
                addAddress={addAddress}
                removeAddress={removeAddress}
            />
            <div className="card_view">
                <CardView />
            </div>
        </div>
        <br />
        <div>
            <h2>Items de pagos</h2>
            <Paymentitems
                paymentitems={paymentitems}
                addPaymentitem={addPaymentitem}
                removePaymentitem={removePaymentitem}
            />
            <h2>Seccion de Pago</h2>
        </div>
    </div>
)}

export default Checkout