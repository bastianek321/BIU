import React from "react"

export default function Article({title, photoURL, description}){
    return (
        <article className="title">
            <h2>{title}</h2>
            <img src={photoURL} width="300px" height="300px"></img>
            <p>{description}</p>
        </article>
    )
}