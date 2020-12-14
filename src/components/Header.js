import React from "react"
import Nav from "./Nav"

export default function Header({text, items}){
    return (
        <>
            <Nav items={items}/>
            <header><h1>{text}</h1></header>
        </>
    )
}