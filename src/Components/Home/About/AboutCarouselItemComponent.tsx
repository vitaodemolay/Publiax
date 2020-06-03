import React from "react";
import { Row, Col } from "reactstrap";
import AboutBox from "./AboutBoxComponet";
import { IAboutBoxProps } from "../../../Service/Interfaces/IAboutBoxProps";

interface Props {
    aboutBoxItens: IAboutBoxProps[],
}

export default class AboutCarouselItem extends React.Component<Props>{
    render() {
        const { aboutBoxItens } = this.props;
        return (
            <Row>
                {aboutBoxItens.map((item) => (
                    <Col md="4">
                        <AboutBox {...item} />
                    </Col>
                ))}
            </Row>
        );
    }
}