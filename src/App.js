import React, { useState } from 'react';
import './App.scss';
import Tarif from './assets/components/Tarif/Tarif';

const tarifs = [
  {
    price: "300",
    rate: "10",
    titleColor: "blue", 
    priceColor: "deep-blue", 
    rateColor: "deep-red", 
    volumeColor: "deep-black", 
    isSelected: false,
  },
  {
    price: "450",
    titleColor: "green", 
    priceColor: "deep-green", 
    rateColor: "deep-red", 
    volumeColor: "deep-black", 
    isSelected: false,
  },
  {
    price: "550",
    titleColor: "grey", 
    priceColor: "deep-grey", 
    rateColor: "deep-red", 
    volumeColor: "deep-black", 
    isSelected: true,
  },
  {
    price:"1000",
    rate:"200",
    titleColor: "wine", 
    priceColor: "deep-wine", 
    rateColor: "deep-red", 
    volumeColor: "deep-black", 
    isSelected: false,
  },
]

function App() {
  const [selectedTarif, setSelectedTarif] = useState(null);

  const handleSelectTarif = (tarif) => {
    setSelectedTarif(tarif);
  };

  return (
    <div>
      {tarifs.map((tarif) => (
        <Tarif
          key={tarif.price}
          titleColor={tarif.titleColor}
          priceColor={tarif.priceColor}
          rateColor={tarif.rateColor}
          volumeColor={tarif.volumeColor}
          price={tarif.price}
          rate={tarif.rate}
          isSelected={tarif.isSelected}
          onSelectTarif={() => handleSelectTarif(tarif.price)} // Передаем выбранный тариф в функцию handleSelectTarif
        />
      ))}
      {selectedTarif && <div>Выбран тариф {selectedTarif}</div>}
    </div>
  );
}

export default App;