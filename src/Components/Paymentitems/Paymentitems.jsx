import React from "react"

const Paymentitems = ({ paymentitems, addPaymentitem, removePaymentitem }) => {
    const handleAddpaymentitem = () => {
        const item = prompt('Ingrese un nuevo producto: ')
        if (item) {
            addPaymentitem(item)
        }
    }

    const handleRemoveAddress = (index) => {
        if(window.confirm('¿Are you sure you want to remove?')){
            removePaymentitem(index)
        }
    }


return(
    <div>
        <button onClick={handleAddpaymentitem}>Agregar Producto</button>
        <ul>
            {paymentitems.map((item, index) =>(
                <li key={index}>
                    {item}
                    <button onclick={() => handleRemovePaymentitem(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    </div>
)

}

export default Paymentitems