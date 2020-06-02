import React, { useState } from "react";
import { Container, CarouselItem, Carousel, CarouselControl, CarouselCaption, CarouselIndicators } from "reactstrap";
import { IAboutBoxProps } from "../../../Service/Interfaces/IAboutBoxProps";
import AboutCarouselItem from "./AboutCarouselItemComponent";

interface Props {

}

const imgWinn1 = require('../../../img/img01.jpg');
const imgWinn2 = require('../../../img/img02.jpg');
const imgWinn3 = require('../../../img/img03.jpg');

const aboutBoxItens: IAboutBoxProps[] = [
    {
        image: imgWinn1,
        title: "Teste Vaga 01",
        urlLink: "#/vagadetalhe/51c9d82b-343a-4ec3-a18c-8314bee993f3"
    },
    {
        image: imgWinn2,
        title: "Teste Vaga 02",
        urlLink: "#/vagadetalhe/51c9d82b-343a-4ec3-a18c-8314bee993f3"
    },
    {
        image: imgWinn3,
        title: "Teste Vaga 03",
        urlLink: "#/vagadetalhe/51c9d82b-343a-4ec3-a18c-8314bee993f3"
    },
]

const itemsCarousel = [
    {
        aboutBoxItens: aboutBoxItens,
        idx: 1
    },
    {
        aboutBoxItens: aboutBoxItens,
        idx: 2
    }
]

export default class AboutCarousel extends React.Component<Props>{

    render() {
        return (
            <Container>
                <AboutCarouselItem aboutBoxItens={aboutBoxItens} />
            </Container>
        );
    }

}