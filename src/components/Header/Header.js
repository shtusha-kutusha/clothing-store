import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ProfileItems from "../ProfileItems/ProfileItems";

function Header() {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <ProfileItems />
        </header>
    );
}

export default Header;