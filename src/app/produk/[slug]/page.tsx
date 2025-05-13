import { notFound } from "next/navigation";
import products from "@/data/products"; // Mengimpor data produk dummy
import Image from "next/image"; // Untuk menampilkan gambar produk

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailPage({ params }: PageProps) {
  // Menunggu params untuk diproses sebelum mengakses slug
  const { slug } = await params; // <-- Menambahkan await di sini

  // Mencari produk berdasarkan slug yang diterima dari URL
  const product = products.find((p) => p.slug === slug);

  // Jika produk tidak ditemukan, arahkan ke halaman notFound
  if (!product) {
    return notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full max-w-md"
      />
      <p className="text-gray-600 mt-2">{product.desc}</p>
      <p className="text-indigo-600 font-bold mt-2">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}
