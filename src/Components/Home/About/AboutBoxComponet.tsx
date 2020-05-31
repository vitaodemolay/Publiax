import React from "react";
import { IAboutBoxProps } from "../../../Service/Interfaces/IAboutBoxProps";

export default class AboutBox extends React.Component<IAboutBoxProps>{

    render() {
        const { image, title, urlLink } = this.props
        return (
            <div className="box-content-01 wow flipInY" data-wow-offset="0" data-wow-delay="0.8s">
                <div className="box-img">
                    <img src={image} className="img-responsive" />
                </div>
                <div className="box-text">
                    <h2>{title}</h2>
                    <a href={urlLink}>Detalhe</a>
                </div>
            </div>
        );
    }
}