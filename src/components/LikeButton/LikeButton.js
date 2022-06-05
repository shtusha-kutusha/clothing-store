function LikeButton({ like, change }) {
    const className = like === true ? 'buttonLike buttonLike-active' : 'buttonLike';

    function onClick() {
        change(!like);
    }

    return (
        <button className={className} onClick={onClick} ><img src="img/icon-like.png" width="15px" height="15px" /></button>
    );
}

export default LikeButton;