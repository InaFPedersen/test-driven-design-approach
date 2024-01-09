import { Button } from "react-bootstrap";
import SideSheet from "../component/SideSheet";
import { useState } from "react";

const About = () => {
    const title = "About";
    const [openSideSheet, setSideSheetOpen] = useState(false);

    const ReadMore = () => {
        setSideSheetOpen(!openSideSheet);
    };

    return (
        <div>
            <h2>{title}</h2>

            <p>Lorum ipsum</p>

            <Button onClick={ReadMore} data-cy="read-more">
                Read more
            </Button>

            {openSideSheet ? (
                <div>
                    <SideSheet data-cy="side-sheet" />{" "}
                    <Button
                        data-cy="close-button"
                        style={{
                            backgroundColor: "lightblue",
                            width: "100px",
                            height: "50px",
                            fontWeight: "bold",
                            fontSize: "18px",
                            float: "right",
                            zIndex: "1001",
                            marginRight: "-760px",
                            marginTop: "1100px",
                        }}
                        onClick={ReadMore}
                    >
                        Close
                    </Button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default About;
