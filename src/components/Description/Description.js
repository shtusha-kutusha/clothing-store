import { useState } from 'react';
import ProductColors from '../ProductColors/ProductColors';
import ProductSizes from '../ProductSizes/ProductSizes';
import LikeButton from '../LikeButton/LikeButton';

function Description({ data }) {
    const [ color, setColor ] = useState(null);
    const [ size, setSize ] = useState(null);
    const [ like, setLike ] = useState(data.like);

    function changeColor(newColor) {
        setColor(newColor);
        console.log(`выбран цвет ${newColor}`);
    }

    function changeSize(newSize) {
        setSize(newSize);
        console.log(`выбран размер ${newSize}`);
    }

    function change(newLike) {
        setLike(newLike);
    }

    function onAddClick() {
        changeColor(null);
        changeSize(null);
    }

    return (
        <article className="description">
            <h1 className="modelName">{data.name}</h1>
            <p className="descriptionProduct">{data.description}</p>
            <ul>
                <li>
                    <a className="deliveryTerms itemsTerms deliveryTermsArrow" href="#">
                        <span className="deliveryText">Payment upon receipt</span>
                    </a>
                </li>
                <li>
                    <a className="deliveryTerms itemsTerms deliveryTermsArrow" href="#">
                        <span className="deliveryText">Delivery with fitting</span>
                    </a>
                </li>
            </ul>
            <div className="featuresProduct">
                <div>
                    <span className="featureHeader">Color</span>
                    <ProductColors colors={data.colors} change={changeColor} current={color} />
                </div>
                <div className="sizeProduct">
                    <span className="featureHeader">Size</span>
                    <ProductSizes sizes={data.sizes} change={changeSize} current={size} />
                </div>
            </div>
            <div className="priceProduct"> 
                <span className="price">Price:</span>
                <span className="priceValue">${data.price.toFixed(2)}</span>
            </div>
            <div className="buttons">
                <LikeButton like={like} change={change} />
                <button className="buttonAdd" onClick={onAddClick} disabled={ color === null || size === null }>Add to cart</button>
            </div>
        </article>  
    );
}

export default Description;