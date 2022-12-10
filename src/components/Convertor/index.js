import React from 'react';
import { Block } from './Block';
import './index.scss';

function Convertor() {

  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('')
  },[])

  return (
    <div className="convertor">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default Convertor;
