import { Button } from "react-bootstrap";

const SideSheet = () => {
    const title = "Read more...";

    return (
        <div
            className="side-sheet-container"
            style={{
                border: "10px solid brown",
                width: "800px",
                height: "1300px",
                float: "right",
                zIndex: "1000",
                marginTop: "-110px",
            }}
        >
            <h2 style={{ margin: "50px" }}>{title}</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "100px",
                    fontFamily: "serif",
                    fontSize: "24px",
                }}
            >
                <p data-cy="text-field-1">Lorum ipsum</p>
                <p data-cy="text-field-2">Lorum ipsum, lorum ipsum</p>
                <p data-cy="text-field-3">Lorum ipsum, lorum</p>
                <p data-cy="text-field-4">Ipsum, lorum ipsum</p>
                <p data-cy="text-field-5">Lorum ipsum, ipsum lorum.</p>
            </div>
        </div>
    );
};

export default SideSheet;
