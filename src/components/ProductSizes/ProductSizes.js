import Size from "../Size/Size";

function ProductSizes({ sizes, change, current }) {
    const components = sizes.map((size, index) => (<Size size={size} change={change} current={current} key={index} />));
    return (
        <ul className="size">
            {components}
        </ul>
    );
}

export default ProductSizes;