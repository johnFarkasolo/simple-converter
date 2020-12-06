import React from 'react';

function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props;

  return (
    <>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select className="select" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option, index) => (
          <option key={`${option}_${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default CurrencyRow;
