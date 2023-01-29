import React from "react";
import Row from "react-bootstrap/Row";
import ProjektyList from "./proktyList";

const Main = () => {
    return (
        <div>
            <Row className="my-5 text-center">
                <h1>Zapisz się już teraz</h1>
            </Row>
            <Row>
                <ProjektyList />
            </Row>
        </div>
    );
};

export default Main;
