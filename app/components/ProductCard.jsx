"use client"

import Image from "next/image";


const products = [
    {
      id: 1,
      name: "Cafe-In Premium Beans 200g",
      price: "Rp85.000",
      discountedPrice: "Rp75.000",
      cashback: "Rp5.000",
      rating: "4.8",
      reviews: "120",
      image: "/assets/Menus/coffee1.jpg",
    },
    {
      id: 2,
      name: "Cafe-In Arabica Blend 250g",
      price: "Rp95.000",
      discountedPrice: "Rp85.000",
      cashback: "Rp7.000",
      rating: "4.9",
      reviews: "150",
      image: "/assets/Menus/coffee2.jpg",
    },
    {
      id: 3,
      name: "Cafe-In Espresso Roast 200g",
      price: "Rp80.000",
      discountedPrice: "Rp70.000",
      cashback: "Rp4.000",
      rating: "4.7",
      reviews: "98",
      image: "/assets/Menus/coffee3.jpg",
    },
    {
      id: 4,
      name: "Cafe-In Robusta Blend 250g",
      price: "Rp90.000",
      discountedPrice: "Rp80.000",
      cashback: "Rp6.000",
      rating: "4.6",
      reviews: "80",
      image: "/assets/Menus/coffee4.jpg",
    },
    {
      id: 5,
      name: "Cafe-In Kopi Luwak 100g",
      price: "Rp250.000",
      discountedPrice: "Rp200.000",
      cashback: "Rp15.000",
      rating: "4.9",
      reviews: "200",
      image: "/assets/Menus/coffee5.jpg",
    },
    {
      id: 6,
      name: "Cafe-In Green Bean 500g",
      price: "Rp150.000",
      discountedPrice: "Rp120.000",
      cashback: "Rp10.000",
      rating: "4.5",
      reviews: "70",
      image: "/assets/Menus/coffee6.jpg",
    },
  ];

const ProductCard = ({ product }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-md shadow hover:shadow-lg transition overflow-hidden"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-primary font-bold">
                            {product.discountedPrice}{" "}
                            <span className="line-through text-gray-500">
                                {product.price}
                            </span>
                        </p>
                        <p className="text-sm text-gray-600">Cashback: {product.cashback}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">
                                ⭐ {product.rating} ({product.reviews})
                            </span>
                            <button className="bg-primary text-white px-4 py-2 rounded-md">
                                Keranjang
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCard;