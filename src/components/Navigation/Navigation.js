import NavItem from '../NavItem/NavItem'

function Navigation() {
    return (
        <nav>  
            <ul className="navElements">
                <NavItem link="#" label="Home" />
                <NavItem link="#" label="Men"  />
                <NavItem link="#" label="Women"  />
                <NavItem link="#" label="Kids"  />
            </ul>   
        </nav>
    );
}

export default Navigation;