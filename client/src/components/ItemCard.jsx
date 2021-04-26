import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "../styles/ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

// function numberWithCommas(x) {
// 	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function ItemCard(props) {
  // const props = {
  // 	name: "DB026 - GIƯỜNG NGỦ GỖ ĐÈN LED NGĂN KÉO",
  // 	price: "14525000",
  // 	salePercent: "60",
  // 	src:
  // 		"https://product.hstatic.net/1000360516/product/db026_3_6ebe92f0888c442d8b7cf7ad171a99b4_medium.jpg",
  // };

  // return (
  // 	<div className="ItemCard">
  // 		<section className="ItemCard__img">
  // 			<a href="/">
  // 				<img src={props.src} alt={props.name}></img>
  // 			</a>
  // 			<p>-{props.salePercent}%</p>
  // 			<div className="ItemCard__actions">
  // 				<SearchIcon />
  // 				<div className="buy-button">Mua ngay</div>
  // 				<AddShoppingCartIcon />
  // 			</div>
  // 		</section>
  // 		<section className="ItemCard__info">
  // 			<a href={props.src}>
  // 				<h4>{props.name}</h4>
  // 			</a>
  // 			<div className="price">
  // 				<p>
  // 					{numberWithCommas((props.price * (100 - props.salePercent)) / 100)}₫
  // 				</p>
  // 				<p>{numberWithCommas(props.price)}₫</p>
  // 			</div>
  // 		</section>
  // 	</div>
  // );
  const dispatch = useDispatch();
  function handleAddCart(id, image, fullName, price) {
    console.log("run into handleAddCart");
    dispatch(addCart(id, image, fullName, price));
  }
  return (
    <div className="ItemCard">
      <div className="ItemCard__ImgBlock">
        <img
          src={props.props.Image}
          alt="error"
          className="ItemCard__ImgBlock__Img"
        />
        {props.props.salePercent > 0 ? (
          <div className="ItemCard__ImgBlock__Sale">
            -{props.props.salePercent}%
          </div>
        ) : (
          ""
        )}
        <div className="ItemCard__ImgBlock__ProductAction">
          <button className="ItemCard__ImgBlock__ProductAction__Buy ProductAction__Button Left_Button">
            <FontAwesomeIcon icon={faSearchPlus} size="1x" />
          </button>
          <button
            onClick={() => {
              handleAddCart(
                //without moving to cart
                props.props.ID,
                props.props.Image,
                props.props.Fullname,
                props.props.Price
              );
            }}
            className="ItemCard__ImgBlock__ProductAction__Buy ProductAction__Button Center_Button"
          >
            Mua ngay
          </button>
          <button
            onClick={() => {
              handleAddCart(
                //moving to cart
                props.props.ID,
                props.props.Image,
                props.props.Fullname,
                props.props.Price
              );
            }}
            className="ItemCard__ImgBlock__ProductAction__Buy ProductAction__Button Right_Button"
          >
            <FontAwesomeIcon icon={faCartPlus} size="1x" />
          </button>
        </div>
      </div>
      <div className="ItemCard__InfoBlock">
        <div className="ItemCard__InfoBlock__Info">
          <a className="ItemCard__InfoBlock__Info__Link" href="/">
            {props.props.ID} - {props.props.Fullname}
          </a>
        </div>
        {props.props.salePercent > 0 ? (
          <div className="ItemCard__InfoBlock__PriceBlock">
            <div className="ItemCard__InfoBlock__SalePrice">
              {(
                parseInt(props.props.Price) -
                (parseInt(props.props.Price) *
                  parseInt(props.props.salePercent)) /
                  100
              ).toLocaleString()}
              đ
            </div>
            <div className="ItemCard__InfoBlock__Price">
              {parseInt(props.props.Price).toLocaleString()}đ
            </div>
          </div>
        ) : (
          <div className="ItemCard__InfoBlock__SalePrice">
            {parseInt(props.props.Price).toLocaleString()}đ
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
