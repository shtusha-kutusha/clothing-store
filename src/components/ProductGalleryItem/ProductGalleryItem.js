function ProductGalleryItem({ link, index, change, current }) {
    const className = index === current ? 'productGalleryLink productGalleryLink-active' : 'productGalleryLink';

    function onClick(event) {
        event.preventDefault();
        change(index);
    }

    return (
        <li className="photoProduct">
            <a className={className} onClick={onClick} href={link}>
                {index}
            </a>
        </li>
    );
}

export default ProductGalleryItem;