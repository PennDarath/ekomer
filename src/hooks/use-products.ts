import { ProductType } from '@/types/ProductType';
import { pb } from '@/libs/helper';
import useSwr from 'swr';



async function fetchData() {
//    const products = await fetch('http://localhost:3333/products').then(response => response.json());
    const products = await pb.collection('products').getFullList();
    return products
}

export default function useProducts(query?: string) {
    const { data, isLoading, mutate } = useSwr('products', fetchData);
    return {
        products: data ?? [],
        isLoading,
        mutate
    }
}

 
