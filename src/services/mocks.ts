export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePlaceholder: string;
  weight?: string;
  isPromo?: boolean;
  soldCount: number;
  stars: number;
  discountPercentage?: number;
}

export const MOCK_PRODUCTS: Product[] = [
  { 
    id: "1", 
    name: "Ração Premium para Gatos", 
    description: "Ração sabor salmão para gatos adultos...",
    price: 150.0,
    imagePlaceholder: "IMG_RACAO",
    weight: "10kg",
    isPromo: true,
    soldCount: 1205,
    stars: 4.8,
    discountPercentage: 15
  },
  { 
    id: "2", 
    name: "Varinha com Pena", 
    description: "Brinquedo interativo para gatos...",
    price: 25.5,
    imagePlaceholder: "IMG_VARINHA",
    soldCount: 340,
    stars: 4.5
  },
  { 
    id: "3", 
    name: "Arranhador de Papelão", 
    description: "Arranhador ecológico e durável...",
    price: 80.0,
    imagePlaceholder: "IMG_ARRANHADOR",
    isPromo: true,
    soldCount: 89,
    stars: 4.9,
    discountPercentage: 10
  },
  { 
    id: "4", 
    name: "Coleira com Guizo", 
    description: "Coleira ajustável vermelha...",
    price: 15.0,
    imagePlaceholder: "IMG_COLEIRA",
    soldCount: 500,
    stars: 4.2
  },
];
