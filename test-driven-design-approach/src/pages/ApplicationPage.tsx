import { Button, Form } from "react-bootstrap";

const Application = () => {
    const title = "Application";

    return (
        <div>
            <h2>{title}</h2>
            <Form
                data-cy="form-container"
                style={{
                    border: "5px solid gray",
                    padding: "10px",
                    margin: "10px",
                }}
            >
                <h3>Information about you:</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        margin: "10px",
                        padding: "10px",
                    }}
                >
                    <label data-cy="label-name-input">Name:</label>
                    <input
                        type="text"
                        data-cy="name-input"
                        placeholder="Write your name here"
                        style={{ width: "400px" }}
                    />
                    <label data-cy="label-age-input">Age:</label>
                    <input
                        type="number"
                        data-cy="age-input"
                        placeholder="how old are you?"
                        style={{ width: "150px" }}
                    />
                    <label data-cy="label-description-input">
                        Description:
                    </label>
                    <input
                        type="text"
                        data-cy="description-input"
                        placeholder="Write a description of yourself"
                        style={{ width: "500px" }}
                    />
                </div>
                <Button data-cy="save-button">Save</Button>
            </Form>

            <div
                className="info-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                }}
            >
                <h3>Information:</h3>
                <p
                    data-cy="info-box-1"
                    style={{
                        border: "1px solid black",
                        height: "100px",
                        backgroundColor: "lightgrey",
                    }}
                >
                    Lorum ipsum, lorum ipsum
                </p>
                <p
                    data-cy="info-box-2"
                    style={{
                        border: "1px solid black",
                        height: "100px",
                        backgroundColor: "lightblue",
                    }}
                >
                    Lorum ipsum, lorum ipsum
                </p>
                <p
                    data-cy="info-box-3"
                    style={{
                        border: "1px solid black",
                        height: "100px",
                        backgroundColor: "pink",
                    }}
                >
                    Lorum ipsum, lorum ipsum
                </p>
            </div>

            <img
                src="../images/apple-tree.png"
                alt="apples"
                style={{
                    marginTop: "50px",
                }}
            />
        </div>
    );
};

export default Application;
