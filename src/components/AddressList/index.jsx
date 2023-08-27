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
        <div className="addressList">
            <section className="addressList__section">
                <h2 className="addressList__section__title">Delivery Address:</h2>
                <div className="addressList__savedAddress">
                    <h3 className="addressList__savedAddress__title">Saved Address</h3>
                    <button onClick={handleOpenModal} className="addressList__savedAddress__button">+ Add New Address</button>
                </div>
            </section>
            <AddressModal isOpen={isModalOpen} onClose={handleCloseModal} onAddAddress={handleAddAddress} />
        </div>
    )
}

export default AddressList

