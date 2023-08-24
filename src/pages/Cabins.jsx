import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, [])

  return (
    <div>

    </div>
  )
}

export default Cabins
