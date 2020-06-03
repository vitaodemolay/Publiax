import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AboutCarousel from './About/AboutCarouselComponent';
import { IVaga } from '../../Service/Interfaces/IVaga';
import { IAboutBoxProps } from '../../Service/Interfaces/IAboutBoxProps';

const imgWinn1 = require('../../img/img01.jpg');
const imgWinn2 = require('../../img/img02.jpg');
const imgWinn3 = require('../../img/img03.jpg');

interface Props {
    vagas: IVaga[];
}

export default class About extends React.Component<Props> {

    private defineUrlAddress(id: string) {
        return `#/vagadetalhe/${id}`;
    }

    private generateAboutBoxItens(vagas: IVaga[], images: any[]): IAboutBoxProps[] {
        let aboutBoxPros: IAboutBoxProps[] = [];
        let index = 0;
        for (const vaga of vagas) {
            if (index >= 3) break;
            const item: IAboutBoxProps = {
                image: images[index],
                title: vaga.titulo,
                urlLink: this.defineUrlAddress(vaga.id)
            }
            aboutBoxPros.push(item);
            index++;
        }

        return aboutBoxPros;
    }

    render() {
        const { vagas } = this.props;
        const imagesArray = [imgWinn1, imgWinn2, imgWinn3];

        const abautBoxItensProps = this.generateAboutBoxItens(vagas, imagesArray);
        
        return (
            <section id="about">
                <Container>
                    <AboutCarousel aboutBoxItens={abautBoxItensProps} />
                </Container>
            </section>
        );
    }
}