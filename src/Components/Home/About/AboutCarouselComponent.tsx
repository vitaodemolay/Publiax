import React from "react";
import { Container, UncontrolledCarousel } from "reactstrap";
import { IAboutBoxProps } from "../../../Service/Interfaces/IAboutBoxProps";
import AboutCarouselItem from "./AboutCarouselItemComponent";

interface Props {
    aboutBoxItens: IAboutBoxProps[]
}

const carouselBackGrd = require('../../../img/backgroud_carousel.png');
export default class AboutCarousel extends React.Component<Props>{

    private generateCarouselItens(): any[] {
        const { aboutBoxItens } = this.props;
        const numberItens = Math.ceil(aboutBoxItens.length / 3);
        const result: any[] = [];
        const increment = 3;
        let startIndex = 0;
        let endIndex = increment;
        for (let index = 0; index < numberItens; index++) {
            const sliceAboutBoxItens = aboutBoxItens.slice(startIndex, endIndex);
            startIndex = endIndex;
            endIndex += increment;
            result.push({
                src: carouselBackGrd,
                altText: '',
                header: <AboutCarouselItem aboutBoxItens={sliceAboutBoxItens} />,
                caption: <React.Fragment />,
                key: index
            })
        }
        return result;
    }


    render() {
        const carouselItens = this.generateCarouselItens();
        return (
            <Container>
                <UncontrolledCarousel items={carouselItens}  />
            </Container>
        );
    }

}

