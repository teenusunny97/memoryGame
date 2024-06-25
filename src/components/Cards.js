import { useState } from "react"
import Card from "./Card"
const Cards = () => {
    const [items, setItems] = useState(
        [
            { id: "1", img: './images/goa.jpg', stat: "" },
            { id: "1", img: './images/goa.jpg', stat: "" },
            { id: "2", img: './images/ladakh.jpg', stat: "" },
            { id: "2", img: './images/ladakh.jpg', stat: "" },
            { id: "3", img: './images/manali.jpg', stat: "" },
            { id: "3", img: './images/manali.jpg', stat: "" },
            { id: "4", img: './images/coorg.jpg', stat: "" },
            { id: "4", img: './images/coorg.jpg', stat: "" },
            { id: "5", img: './images/joker.jpg', stat: "active" },
        ].sort(() => Math.random() - 0.5)
    )
    const [prev, setPrev] = useState("")
    const handleClick = (current) => {

        if (prev === "") {
            setPrev(current)
            setItems([...items])
            items[current].stat = "active"
        }
        else {

            if (items[prev].id === items[current].id) {
                items[prev].stat = "correct"
                items[current].stat = "correct"
                setItems([...items])
                setPrev("")
            }
            else {
                items[prev].stat = "wrong"
                items[current].stat = "wrong"
                setItems([...items])
                setTimeout(() => {
                    items[prev].stat = ""
                    items[current].stat = ""
                    setPrev("")
                }, 1000)
            }

        }
    }
    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} index={index} item={item} handleClick={handleClick} />
            ))
            }
        </div>
    )
}
export default Cards