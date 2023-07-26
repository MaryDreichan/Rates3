import React from 'react';
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
  const updatedTarifs = tarifs.map((tarif, index) => {
    if (index === 2) { 
      return { ...tarif, price: (parseInt(tarif.price) + 100).toString() };
    }
    return tarif;
  });

  return (
    <>
      {updatedTarifs.map((tarif, index) => ( 
        <Tarif
          key={tarif.price}
          index={index} 
          titleColor={tarif.titleColor}
          priceColor={tarif.priceColor}
          rateColor={tarif.rateColor}
          volumeColor={tarif.volumeColor}
          color={tarif.color}
          price={tarif.price}
          rate={tarif.rate}
          dark_color={tarif.dark_color}
          isSelected={tarif.isSelected}
          shouldIncreasePrice={index === 2} 
        />
      ))}
    </>
  )
}

export default App;