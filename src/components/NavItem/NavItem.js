function NavItem({ link, label }) {
    return (
        <li className="navItem">
            <a href={link}>
                {label}
            </a>
        </li>
    )
}

export default NavItem;