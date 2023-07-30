import "./Tarif.scss"

function Tarif(props) {
  const handleClick = () => {
    props.onSelectTarif(props.price);
  };

  return (
    <div
      className={"container " + (props.isSelected ? "selected " : "")}
      onClick={() => props.onSelectTarif()}
    >
      <div className={props.titleColor}>Безлимитный {props.price}</div>
      <div className={props.priceColor}>
        <span className="tarif_price">{props.price}</span>руб/мес
      </div>
      <div className={props.rateColor}>до {props.rate}Мбит/сек</div>
      <div className={props.volumeColor}>Объем включенного трафика неограничен</div>
    </div>
  );
}

export default Tarif;