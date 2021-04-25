export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Column {
    field: string;
    header: string;
}