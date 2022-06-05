function Color({ color, change, current }) {
    const style = { backgroundColor: color };
    const className = color === current ? 'colorButton colorButton-active' : 'colorButton';

    function onClick() {
        if (color === current)
            change(null)
        else
            change(color);
    }

    return (
        <li>
            <button className={className} onClick={onClick} style={style}>{color}</button>
        </li>
    );
}

export default Color;