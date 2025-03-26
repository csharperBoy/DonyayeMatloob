"use client";

import { Typography } from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const OTHER_BOOKS = [
  {
    img: `/image/books/RectangleBig1.svg`,
    category: "Frank Herbert",
    title: "Dune",
    desc: "A classic epic that explores political intrigue and power struggles on a desert planet.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `/image/books/RectangleBig7.svg`,
    category: "William Gibson",
    title: "Neuromancer",
    desc: "A pioneering cyberpunk novel filled with futuristic technology and hackers.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `/image/books/RectangleBig1.svg`,
    category: "J.R.R. Tolkien",
    title: "The Hobbit",
    desc: "A timeless adventure through Middle-earth, featuring Bilbo Baggins and his quest.",
    price: "$99",
    offPrice: "$79",
  },
];

export function OtherBookOffers() {
  return (
    <section className="px-8 pt-28">
      <div className="container mx-auto mb-10">
        <Typography
          as="h2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="mb-2 text-3xl font-bold text-blue-gray-900"
        >
          Other Book Offers - 20% OFF
        </Typography>
        <Typography
          as="p"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="w-full max-w-lg text-lg text-gray-500"
        >
          Escape into captivating stories, vibrant characters, and enchanting
          worlds with our extensive fiction collection.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {OTHER_BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherBookOffers;