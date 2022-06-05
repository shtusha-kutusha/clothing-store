import Color from "../Color/Color";

function ProductColors({ colors, change, current }) {
    const components = colors.map((color, index) => (<Color color={color} change={change} current={current} key={index} />));
    return (
        <ul className="color">
            {components}
        </ul>
    );
}

export default ProductColors;