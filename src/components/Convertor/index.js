import React from "react";
import { Block } from "./Block";
import "./index.scss";

function Convertor() {
  const [fromCurrency, setFromCurrency] = React.useState("AUD");
  const [toCurrency, setToCurrency] = React.useState("USD");
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);

  const ratesRef = React.useRef({})

  React.useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/latest.js")
      .then((res) => res.json())
      .then((json) => {
        // setRates(json.rates);
        ratesRef.current = json.rates
        onChangeToPrice(1);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить информацию");
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toCurrency]);

  return (
    <div className="convertor">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default Convertor;
