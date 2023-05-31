import { useQuery } from '@tanstack/react-query';

const UseLego = (id) => {
    const { isLoading, refetch, data: legos } = useQuery({
        queryKey: ['legos', id], queryFn: async () => {
            const response = await fetch(`http://localhost:5000/legos/${id}`)
            return response.json();
        }
    })
    // console.log(id, legos)
    return [isLoading, refetch, legos];
};

export default UseLego;