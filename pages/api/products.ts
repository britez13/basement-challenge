// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const products: Array<Product> = [
  {
      "id": "1",
      "name": "Black t-shirt",
      "description": "Unisex Basic Softstyle T-Shirt",
      "price": 7.95,
      "img": "/products/shirt.png"
  }, 
  {
      "id": "2",
      "name": "Black hoodie",
      "description": "Black Over The Head Hood",
      "price": 13,
      "img": "/products/hoodie.png"
  }, 
  {
      "id": "3",
      "name": "Black cap",
      "description": "The basement Logo in a bold, simple form",
      "price": 23,
      "img": "/products/cap.png"
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products)
}
