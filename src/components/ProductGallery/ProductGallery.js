import ProductGalleryItem from "../ProductGalleryItem/ProductGalleryItem";

function ProductGallery({ data, change, current }) {
    const components = data.map((link, index) => (
        <ProductGalleryItem link={link} index={index} key={index} change={change} current={current} />
    ));

    return (
        <ul className="productGallery">
            {components}
        </ul>
    );
}

export default ProductGallery;