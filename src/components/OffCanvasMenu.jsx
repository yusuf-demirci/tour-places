import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "./header/Header";

function OffCanvasMenu({ ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <FontAwesomeIcon
                className="menu-icon"
                icon={faBars}
                onClick={handleShow}
            />

            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Header heading={"ABOUT US"} className={"offcanvas-item"} />
                    <Header heading={"FOR YOU"} className={"offcanvas-item"} />
                    <Header heading={"SERVICES"} className={"offcanvas-item"} />
                    <Header heading={"BLOG"} className={"offcanvas-item"} />
                    <Header heading={"VLOG"} className={"offcanvas-item"} />
                    <Header heading={"CONTACT"} className={"offcanvas-item"} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function OffCanvas() {
    return <OffCanvasMenu placement={"start"} name={"start"} />;
}

export default OffCanvas;
