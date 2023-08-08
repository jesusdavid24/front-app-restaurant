import React from "react"

const AddressList = ({ addresses, addAddress, removeAddress }) => {
  const handleAddress = () => {
    const address = prompt('Ingrese una nueva direccion ')
    if (address) {
      addAddress(address)
    }
  }

  const handleRemoveAddress = (index) => {
    if (window.confirm('¿Estas seguro de eliminar esta dirección?')) {
      removeAddress(index)
    }
  }

  return (
    <div>
      <section>
        <h1>Delivery Address</h1>
        <h2>Saved Address</h2>
        <button onClick={handleAddress}>Add New Address</button>
        <ul>
          {addresses.map((address, index) => (
            <li key={index}>
              {address}
              <button onClick={() => handleRemoveAddress(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

export default AddressList
