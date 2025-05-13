// src/data/products.ts

export type Product = {
  name: string;
  price: number;
  image: string;
  desc: string;
  slug: string;
};

const products: Product[] = [
  {
    name: "Gould Amadine White",
    price: 150000,
    image: "/foto1.jpg",
    desc: "Warna Kuning Muda dan perpaduan warna putih",
    slug: "gould-amadine-white",
  },
  {
    name: "Gould Amadine Red Head",
    price: 200000,
    image: "/foto2.jpg",
    desc: "Kepala merah menyala dengan warna tubuh yang kontras",
    slug: "gould-amadine-red-head",
  },
  {
    name: "Gould Amadine Black Head",
    price: 180000,
    image: "/foto3.jpg",
    desc: "Elegan dengan kepala hitam dan warna tubuh yang menawan",
    slug: "gould-amadine-black-head",
  },
  {
    name: "Gould Amadine Yellow Head",
    price: 190000,
    image: "/foto4.jpg",
    desc: "Cerah dengan kepala kuning dan kombinasi warna yang indah",
    slug: "gould-amadine-yellow-head-1",
  },
  {
    name: "Gould Amadine Yellow Head",
    price: 190000,
    image: "/foto5.jpg",
    desc: "Cerah dengan kepala kuning dan kombinasi warna yang indah",
    slug: "gould-amadine-yellow-head-2",
  },
];

export default products;
