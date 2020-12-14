import React from "react"

export default function Nav({items}){
    return (
        <nav>
            <h3>Navigation bar</h3>
            <ul>{items.map((item, i) =>
                <li key={i}> {item} </li>
            )}</ul>
        </nav>
    )
}