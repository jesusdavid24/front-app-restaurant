import React from "react"
import { Accordion, useMantineTheme, rem } from '@mantine/core';
import './paymentitems.scss'

const Paymentitems = ({ paymentitems, addPaymentitem, removePaymentitem }) => {
  const handleAddpaymentitem = () => {
    const item = prompt('Ingrese un nuevo producto: ')
    if (item) {
      addPaymentitem(item)
    }
  }

  const handleRemoveAddress = (index) => {
    if (window.confirm('¿Are you sure you want to remove?')) {
      removePaymentitem(index)
    }
  }


  return (
    <div>
      <Accordion variant="contained"
        chevron={false}
      >
        <Accordion.Item value="photos">
          <Accordion.Control>
            <input type="radio" name="debit_card" />
            <label className="space" htmlFor="debit_card">Debit Card</label>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="container">
              <div className="container_nameCard">
                <label htmlFor="nameCard">Name On Card</label>
                <input type="text" name="nameCard" />
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" name="cardNumber" />
              </div>
              <br />
              <div className="container_dates">
                <label htmlFor="month_label">Month</label>
                <input type="text" name="month_label" />
                <label htmlFor="year_label">Year</label>
                <input type="text" name="year_label" />
                <label htmlFor="pay_cvv">Cvv</label>
                <input type="text" name="pay_cvv" />
              </div>
              <br />
              <div className="container_buttonP">
                <button>MAKE PAYMENT</button>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="print">
          <Accordion.Control>
            <input type="radio" name="credit_card" />
            <label className="space" htmlFor="credit_card">Credit Card</label>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="container">
              <div className="container_nameCard">
                <label htmlFor="nameCard">Name On Card</label>
                <input type="text" name="nameCard" />
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" name="cardNumber" />
              </div>
              <br />
              <div className="container_dates">
                <label htmlFor="month_label">Month</label>
                <input type="text" name="month_label" placeholder="Month..." />
                <label htmlFor="year_label">Year</label>
                <input type="text" name="year_label" placeholder="Year..." />
                <label htmlFor="pay_cvv">Cvv</label>
                <input type="text" name="pay_cvv" />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="camera">
          <Accordion.Control>
            <input type="radio" name="net_banking" />
            <label className="space" htmlFor="net_banking">Net Banking</label>
          </Accordion.Control>
          <Accordion.Panel>
            <div>
              <div className="container_banks">
                <div className="check">
                  <input type="radio" name="industrial_bank" />
                  <label htmlFor="industrial_bank">Industrial & Commercial Bank</label>
                </div>
                <div className="check">
                  <input type="radio" name="agricultura_bank" />
                  <label htmlFor="agricultura_bank">Agricultural Bank</label>
                </div>
                <div className="check">
                  <input type="radio" name="bank_america" />
                  <label htmlFor="bank_america">Bank of America</label>
                </div>
                <div className="check">
                  <input type="radio" name="construction_bank" />
                  <label htmlFor="construction_bank">Construction Bank Corp.</label>

                </div>
                <div className="check">
                  <input type="radio" name="hsbc_bank" />
                  <label htmlFor="hsbc_bank">HSBC Holdings</label>
                </div>
                <div className="check">
                  <input type="radio" name="morgan_bank" />
                  <label htmlFor="morgan_bank">JPMorgan Chase & Co</label>
                </div>
              </div>
              <br />
              <div className="container_bank">
                <label htmlFor="select_bank">Select Bank</label>
                <input type="text" name="select_bank" placeholder="Choose Bank..." />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="wall">
          <Accordion.Control>
            <input type="radio" name="my_wallet" />
            <label className="space" htmlFor="my_wallet">My Wallet</label>
          </Accordion.Control>
          <Accordion.Panel>
            <div>
              <div className="container_banks">
                <div className="check">
                  <input type="radio" name="industrial_bank" />
                  <label htmlFor="industrial_bank">Adyen</label>
                </div>
                <div className="check">
                  <input type="radio" name="agricultura_bank" />
                  <label htmlFor="agricultura_bank">AlliedWallet</label>
                </div>
                <div className="check">
                  <input type="radio" name="bank_america" />
                  <label htmlFor="bank_america">Brinks</label>
                </div>
                <div className="check">
                  <input type="radio" name="construction_bank" />
                  <label htmlFor="construction_bank">Airtel Money</label>

                </div>
                <div className="check">
                  <input type="radio" name="hsbc_bank" />
                  <label htmlFor="hsbc_bank">Apple Pay</label>
                </div>
                <div className="check">
                  <input type="radio" name="morgan_bank" />
                  <label htmlFor="morgan_bank">CardFree</label>
                </div>
              </div>
              <br />
              <div className="container_payments">
                <button>MAKE PAYMENT</button>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </div>
  )
}
/*<button onClick={handleAddpaymentitem}>Agregar Producto</button>
<ul>
    {paymentitems.map((item, index) =>(
        <li key={index}>
            {item}
            <button onclick={() => handleRemovePaymentitem(index)}>Eliminar</button>
        </li>
    ))}
</ul>*/

export default Paymentitems
