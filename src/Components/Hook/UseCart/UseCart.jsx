import { useContext } from "react";
import { useState } from "react";
import { LegoContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
    const { user } = useContext(LegoContext);
    // const [refresh, setRefresh] = useState(false);
    const { isLoading, refetch: cartRefetch, data: carts } = useQuery({
        enabled: !!user?.email,
        queryKey: ['carts', user?.email], queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json();
        }
    })
    // console.log(id, legos)
    return [isLoading, cartRefetch, carts];
    // return;
};

export default UseCart;