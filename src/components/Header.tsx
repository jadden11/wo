"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal if user clicks outside the modal content
  const closeModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-4xl font-semibold text-gray-800">Gould Amadine</h1>
        <p className="mt-5 font-light text-gray-600">
          Burung Gould Amadine (Erythrura gouldiae), juga dikenal sebagai
          Gouldian Finch atau Pipit Gould, adalah salah satu jenis burung finch
          yang sangat populer di kalangan pecinta burung hias karena keindahan
          warna bulunya yang mencolok. Burung ini berasal dari Australia bagian
          utara.
        </p>
        <p className="mt-5">
          Beli Gould Amadine sekarang dan rasakan keindahan warna bulunya yang
          mencolok ini!
        </p>
        <div className="mt-5">
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Contact
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative flex justify-center items-center">
        <Image src="/birds.avif" width={1000} height={1000} alt="birds" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 modal-overlay"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Contact Us
            </h2>
            <div className="flex justify-center gap-4">
              {/* WhatsApp Link */}
              <Link
                href="https://wa.me/+6289670086485"
                target="_blank"
                className="flex items-center justify-center hover:bg-green-600 text-white p-4 rounded-full"
              >
                <Image src={"/wa.svg"} width={30} height={30} alt={"wa"} />
              </Link>
              {/* Facebook Link */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center justify-center hover:bg-blue-700 text-white p-4 rounded-full"
              >
                <Image src={"/fb.svg"} width={30} height={30} alt={"fb"} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
