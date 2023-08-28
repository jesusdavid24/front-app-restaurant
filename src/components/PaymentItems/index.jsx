import React, { useState } from "react";
import { Accordion, useMantineTheme, rem } from "@mantine/core";
import "./index.scss";

const Paymentitems = ({ paymentitems, addPaymentitem, removePaymentitem }) => {
  const handleAddpaymentitem = () => {
    const item = prompt("Ingrese un nuevo producto: ");
    if (item) {
      addPaymentitem(item);
    }
  };
  const handleRemoveAddress = (index) => {
    if (window.confirm("¿Are you sure you want to remove?")) {
      removePaymentitem(index);
    }
  };

  const [selectedOption, setSelectOption] = useState(null);

  return (
    <div className="payment-items">
      <Accordion
        variant="contained"
        chevron={false}
        className="payment-items__accordion"
      >
        <Accordion.Item
          className="payment-items__accordion__item"
          value="photos"
        >
          <Accordion.Control>
            <input
              type="radio"
              name="debit_card"
              className="radio_debit_Card"
              checked={selectedOption === "td"}
              onChange={() => setSelectOption("td")}
            />
            <label className="space" htmlFor="debit_card">
              Debit Card
            </label>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="container">
              <div className="container_nameCard">
                <label htmlFor="nameCard">Name On Card</label>
                <input type="text" name="nameCard" />
                <label htmlFor="cardNumber">Card Number</label>
                <div className="container_cardNumber">
                  <input type="text" name="cardNumber" />
                  <img
                    className="container_img_tc_debit"
                    src="/img/creditcards.png"
                    alt=""
                  />
                </div>
              </div>
              <br />
              <div className="container-dates">
                <div className="container-dates__confirm">
                  <label htmlFor="month_label">Month</label>
                  <input type="text" name="month_label" />
                </div>
                <div className="container-dates__confirm">
                  <label htmlFor="year_label">Year</label>
                  <input type="text" name="year_label" />
                </div>
                <div className="container-dates__confirm">
                  <label htmlFor="pay_cvv">Cvv</label>
                  <div className="container_cardNumber">
                    <input type="text" name="pay_cvv" />
                    <img
                      className="container_img_tc_debit"
                      src="/img/cvv.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="container_buttonP">
                <button>MAKE PAYMENT</button>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          className="payment-items__accordion__item"
          value="print"
        >
          <Accordion.Control>
            <input
              type="radio"
              name="credit_card"
              className="radio_debit_Card"
              checked={selectedOption === "tc"}
              onChange={() => setSelectOption("tc")}
            />
            <label className="space" htmlFor="credit_card">
              Credit Card
            </label>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="container">
              <div className="container_nameCard">
                <label htmlFor="nameCard">Name On Card</label>
                <input type="text" name="nameCard" />
                <label htmlFor="cardNumber">Card Number</label>
                <div className="container_cardNumber">
                  <input type="text" name="cardNumber" />
                  <img
                    className="container_img_tc"
                    src="/img/creditcards.png"
                    alt=""
                  />
                </div>
              </div>
              <br />
              <div className="container-dates">
                <div className="container-dates__confirm">
                  <label htmlFor="month_label">Month</label>
                  <input
                    type="text"
                    name="month_label"
                    placeholder="Month..."
                  />
                </div>
                <div className="container-dates__confirm">
                  <label htmlFor="year_label">Year</label>
                  <input type="text" name="year_label" placeholder="Year..." />
                </div>
                <div className="container-dates__confirm">
                  <label htmlFor="pay_cvv">Cvv</label>
                  <div className="container_cardNumber">
                    <input type="text" name="pay_cvv" />
                    <img
                      className="container_img_tc"
                      src="/img/cvv.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          className="payment-items__accordion__item"
          value="camera"
        >
          <Accordion.Control>
            <input
              type="radio"
              name="net_banking"
              className="radio_debit_Card"
              checked={selectedOption === "nb"}
              onChange={() => setSelectOption("nb")}
            />
            <label className="space" htmlFor="net_banking">
              Net Banking
            </label>
          </Accordion.Control>
          <Accordion.Panel>
            <div>
              <div className="container_banks">
                <div className="check">
                  <input type="radio" name="industrial_bank" />
                  <label className="space" htmlFor="industrial_bank">
                    Industrial & Commercial Bank
                  </label>
                </div>
                <div className="check">
                  <input type="radio" name="agricultura_bank" />
                  <label className="space" htmlFor="agricultura_bank">
                    Agricultural Bank
                  </label>
                </div>
                <div className="check">
                  <input type="radio" name="bank_america" />
                  <label className="space" htmlFor="bank_america">
                    Bank of America
                  </label>
                </div>
                <div className="check">
                  <input type="radio" name="construction_bank" />
                  <label className="space" htmlFor="construction_bank">
                    Construction Bank Corp.
                  </label>
                </div>
                <div className="check">
                  <input type="radio" name="hsbc_bank" />
                  <label className="space" htmlFor="hsbc_bank">
                    HSBC Holdings
                  </label>
                </div>
                <div className="check">
                  <input type="radio" name="morgan_bank" />
                  <label className="space" htmlFor="morgan_bank">
                    JPMorgan Chase & Co
                  </label>
                </div>
              </div>
              <br />
              <div className="container_bank">
                <label htmlFor="select_bank">Select Bank</label>
                <input
                  type="text"
                  name="select_bank"
                  placeholder="Choose Bank..."
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className="payment-items__accordion__item" value="wall">
          <Accordion.Control>
            <input
              type="radio"
              name="my_wallet"
              className="radio_debit_Card"
              checked={selectedOption === "mw"}
              onChange={() => setSelectOption("mw")}
            />
            <label className="space" htmlFor="my_wallet">
              My Wallet
            </label>
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
  );
};
export default Paymentitems;
