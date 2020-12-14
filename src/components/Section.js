import React from "react"
import Article from "./Article"

export default function Section({items}){
    return (
        <section>
            {items.map((item, i) =>
                <Article key={i} {...item} />
            )}
        </section>
    )
}