"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import products, { Product } from "@/data/products"; // Import Product type juga

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const waNumber = "+6281388410749";
  const siteUrl = "http://localhost:3000";

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  const formatPrice = (price: number) => `Rp ${price.toLocaleString("id-ID")}`;

  const closeModalOnClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center pb-4 text-gray-800">
        Produk
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{product.desc}</p>
              <p className="text-indigo-600 font-bold mt-2">
                {formatPrice(product.price)}
              </p>
              <button
                onClick={() => openModal(product)}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Lihat Detail
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {isOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center modal-overlay cursor-pointer"
          onClick={closeModalOnClickOutside}
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative cursor-default">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              ×
            </button>
            <div className="relative w-full h-64 mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProduct.desc}</p>
            <p className="text-indigo-600 font-bold mt-2">
              {formatPrice(selectedProduct.price)}
            </p>

            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                `Halo, saya ingin memesan produk:\n\n📦 Nama: ${
                  selectedProduct.name
                }\n💰 Harga: ${formatPrice(
                  selectedProduct.price
                )}\n🔗 Link: ${siteUrl}/produk/${selectedProduct.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-white bg-green-500 hover:bg-green-600 text-center py-2 px-4 rounded"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
