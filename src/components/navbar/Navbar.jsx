import Header from "../header/Header";
import OffCanvas from "../OffCanvasMenu";

function Navbar() {
    return (
        <nav>
            <Header heading={"ABOUT US"} className={"menu"} />
            <Header heading={"FOR YOU"} className={"menu"} />
            <Header heading={"SERVICES"} className={"menu"} />
            <Header heading={"BLOG"} className={"menu"} />
            <Header heading={"VLOG"} className={"menu"} />
            <Header heading={"CONTACT"} className={"menu"} />
            <OffCanvas />
        </nav>
    );
}

export default Navbar;
