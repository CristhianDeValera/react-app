import { ReactElement } from "react";
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

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
    ({ product, children }: ProductCardProps): ReactElement;
    Title: (Props: ProductTitleProps) => ReactElement;
    Img: (Props: ProductImageProps) => ReactElement;
    Buttons: (Props: ProductButtonsProps) => ReactElement;
}

