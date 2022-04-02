import { useEffect, useState } from "react"

const useTShirt = () => {
    const [tShirts, SetTShirt] = useState([])
    useEffect(() => {
        fetch('tshirts.json')
            .then(response => response.json())
            .then(data => SetTShirt(data))
    }, [])
    return [tShirts, SetTShirt];
}
export default useTShirt;