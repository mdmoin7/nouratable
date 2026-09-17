export type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export const categories = ["Desserts", "Juices", "Chaat", "North Indian"] as const;

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`;

export const menu: Record<(typeof categories)[number], MenuItem[]> = {
  Desserts: [
    { name: "Gulab Jamun", description: "Soft, rich and timeless.", price: 80, image: unsplash("photo-1601050690597-df0568f70950") },
    { name: "Rasmalai", description: "Delicately sweet.", price: 90, image: unsplash("photo-1571115177098-24ec42ed204d") },
    { name: "Moong Dal Halwa", description: "A royal classic.", price: 100, image: unsplash("photo-1601050690117-94f5f6fa8bd7") },
    { name: "Gajar Ka Halwa", description: "Traditional and comforting.", price: 90, image: unsplash("photo-1631452180519-c014fe946bc7") },
  ],
  Juices: [
    {
      name: "Mango Juice",
      description: "Fresh. Real. Refreshing.",
      price: 70,
      image: unsplash("photo-1716956755600-4d32af2b8f87"),
    },
    {
      name: "Masala Chaas",
      description: "Cool and flavourful.",
      price: 50,
      image: unsplash("photo-1630409346699-79481a79db52"),
    },
    {
      name: "Sweet Lime Juice",
      description: "Naturally uplifting.",
      price: 60,
      image: unsplash("photo-1618834416540-8c4209752f77"),
    },
    {
      name: "Watermelon Juice",
      description: "Cool. Crisp. Natural.",
      price: 60,
      image: unsplash("photo-1752245818743-0fa72ba80c57"),
    },
  ],
  Chaat: [
    { name: "Pani Puri", description: "A burst of flavours.", price: 60, image: unsplash("photo-1601050690597-df0568f70950") },
    { name: "Aloo Tikki", description: "Crispy. Spicy. Irresistible.", price: 70, image: unsplash("photo-1601050690117-94f5f6fa8bd7") },
    { name: "Dahi Puri", description: "Cool, creamy and tangy.", price: 70, image: unsplash("photo-1626132647523-66f5bf380027") },
    { name: "Papdi Chaat", description: "Crunchy, bright and layered.", price: 80, image: unsplash("photo-1601050690117-94f5f6fa8bd7") },
  ],
  "North Indian": [
    { name: "Chole Bhature", description: "Comforting, hearty and fresh.", price: 140, image: unsplash("photo-1626132647523-66f5bf380027") },
    { name: "Paneer Butter Masala", description: "Rich, creamy and aromatic.", price: 180, image: unsplash("photo-1631452180519-c014fe946bc7") },
    { name: "Dal Makhani", description: "Slow-cooked comfort.", price: 160, image: unsplash("photo-1546833999-b9f581a1996d") },
    { name: "Butter Naan", description: "Soft, warm and freshly made.", price: 45, image: unsplash("photo-1601050690117-94f5f6fa8bd7") },
  ],
};
