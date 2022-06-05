import Description from "../Description/Description";
import Product from "../Product/Product";
import data from '../../data.json';

function ProductHolder() {
    return (
        <section className="productHolder">
            <Product data={data.gallery} />
            <Description data={data} />
        </section>
    );
}

export default ProductHolder;