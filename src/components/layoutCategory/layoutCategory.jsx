import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function LayoutCategory(props) {

    console.log(props)
    const [categories, setCategories] = useState()


    async function getCategory() {
        try {
            let res = await fetch('https://dummyjson.com/products/categories')
            let data = await res.json()
            setCategories(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <>
            <ul>
                {
                    categories?.map((title, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/category/${title}`}>
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {props.children}
        </>

    )
}