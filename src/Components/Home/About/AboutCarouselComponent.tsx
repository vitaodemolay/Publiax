import React, { useState } from "react";
import { Container, CarouselItem, Carousel, CarouselControl, CarouselCaption, CarouselIndicators } from "reactstrap";
import { IAboutBoxProps } from "../../../Service/Interfaces/IAboutBoxProps";
import AboutCarouselItem from "./AboutCarouselItemComponent";

interface Props {
    aboutBoxItens: IAboutBoxProps[]
}


export default class AboutCarousel extends React.Component<Props>{

    render() {
        const { aboutBoxItens } = this.props;
        return (
            <Container>
                <AboutCarouselItem aboutBoxItens={aboutBoxItens} />
            </Container>
        );
    }

}