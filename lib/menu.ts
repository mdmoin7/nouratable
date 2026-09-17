export type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export const categories = ["Desserts", "Juices", "Chaat", "North Indian"] as const;

export const menu: Record<(typeof categories)[number], MenuItem[]> = {
  Desserts: [
    { name: "Gulab Jamun", description: "Soft, rich and timeless.", price: 80, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85" },
    { name: "Rasmalai", description: "Delicately sweet.", price: 90, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85" },
    { name: "Moong Dal Halwa", description: "A royal classic.", price: 100, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85" },
    { name: "Gajar Ka Halwa", description: "Traditional and comforting.", price: 90, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85" },
  ],
  Juices: [
    { name: "Mango Juice", description: "Fresh. Real. Refreshing.", price: 70, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85" },
    { name: "Masala Chaas", description: "Cool and flavourful.", price: 50, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85" },
    { name: "Sweet Lime Juice", description: "Naturally uplifting.", price: 60, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85" },
    { name: "Watermelon Juice", description: "Cool. Crisp. Natural.", price: 60, image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f2f?auto=format&fit=crop&w=900&q=85" },
  ],
  Chaat: [
    { name: "Pani Puri", description: "A burst of flavours.", price: 60, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85" },
    { name: "Aloo Tikki", description: "Crispy. Spicy. Irresistible.", price: 70, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85" },
    { name: "Dahi Puri", description: "Cool, creamy and tangy.", price: 70, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=85" },
    { name: "Papdi Chaat", description: "Crunchy, bright and layered.", price: 80, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85" },
  ],
  "North Indian": [
    { name: "Chole Bhature", description: "Comforting, hearty and fresh.", price: 140, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=85" },
    { name: "Paneer Butter Masala", description: "Rich, creamy and aromatic.", price: 180, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85" },
    { name: "Dal Makhani", description: "Slow-cooked comfort.", price: 160, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85" },
    { name: "Butter Naan", description: "Soft, warm and freshly made.", price: 45, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85" },
  ],
};
