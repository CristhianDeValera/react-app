import { ReactElement } from "react";

export interface ProductCardProps{
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface productContextProps{
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}


export interface ProductCardHOCProps{
    ({ product, children }:ProductCardProps): ReactElement;
    Img: ({img}: {img?: string}) => ReactElement;
    Title: ({title}:{title?:string}) => ReactElement;
    Buttons: () => ReactElement;
}