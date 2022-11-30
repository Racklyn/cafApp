import React, {ReactElement, useState} from "react"
import "./style.css"
import {CheckCircle} from 'phosphor-react';
import noImage from '../../assets/no-image.png'

type Props = {
    title: string;
    isSelected: boolean;
    image?: string;
    onClick: () => void;
}

function ComplementoCard({title, isSelected, image, onClick} : Props) {

    return (
        <div className={`drink-card ${!isSelected && 'not-selected-drink-card'}`} onClick={onClick}>
            <div className="icon-container">
                <CheckCircle size={26} weight={isSelected ? "fill" : "regular"}/>
            </div>
            <img src={image ?? noImage}  alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default ComplementoCard