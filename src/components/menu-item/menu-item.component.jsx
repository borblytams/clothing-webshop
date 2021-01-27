import { getAllByTitle } from "@testing-library/react";
import React from "react";
import {withRouter} from "react-router-dom";

import {signInWithGoogle} from "../../firebase/firebase.utils"


import "./menu-item.styles.scss"
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
    onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
    </div>
</div>

)

export default withRouter(MenuItem);