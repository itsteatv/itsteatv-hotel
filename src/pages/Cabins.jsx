import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, [])

  return (
    <div>
      text
    </div>
  )
}

export default Cabins
