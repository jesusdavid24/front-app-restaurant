import React, { useState } from "react"
import "./index.scss"
import AddressModal from "../address-modal/AddressModal"

function AddressList() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleAddAddress = (newAddress) => {
        console.log('Nuevo domicilio agregado', newAddress);
    }

    return (
        <div>
            <section>
                <h1>Delivery Address</h1>
                <div className="container_addressb">
                    <h2>Saved Address</h2>
                    <button onClick={handleOpenModal}>Add New Address</button>
                </div>
            </section>
            <AddressModal isOpen={isModalOpen} onClose={handleCloseModal} onAddAddress={handleAddAddress} />
        </div>
    )
}

export default AddressList
