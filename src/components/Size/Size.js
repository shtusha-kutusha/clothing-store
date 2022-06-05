function Size({ size, change, current }) {
    const className = size === current ? 'sizeButton sizeButton-active' : 'sizeButton';

    function onClick() {
        if (size === current)
            change(null)
        else
            change(size)
    }

    return (
        <li>
            <button className={className} onClick={onClick} >{size}</button>
        </li>
    );
}

export default Size;