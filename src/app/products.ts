export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 399,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Pixel 7',
    price: 699,
    description: 'Best camera phone ever'
  },
  {
    id: 5,
    name: 'Pixel 9 Pro',
    price: 899,
    description: 'Best google phone ever!'
  }
];


