import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";

export function useCabin() {
    const { isLoading, data: cabins, error } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins
    })

    return { isLoading, error, cabins }
}