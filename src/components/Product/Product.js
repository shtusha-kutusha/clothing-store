import { useState } from "react";
import ProductGallery from "../ProductGallery/ProductGallery";


function Product({ data }) {
    const [ gallery, setGallery ] = useState(0);

    function changeGallety(newGallery) {
        setGallery(newGallery);
    }

    return (
        <div className="product">
            <img src={data[gallery]} className="productImage" />
            <ProductGallery data={data} change={changeGallety} current={gallery} />
        </div>
    );
}

export default Product;
