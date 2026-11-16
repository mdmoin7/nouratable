type Props = { slug: string; name?: string; className?: string; priority?: boolean };

type Photo = {
  src: string;
  alt: string;
  credit: string;
};

const photos: Record<string, Photo> = {
  butter: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Butter_Chicken_1.jpg",
    alt: "Butter chicken in a rich tomato and cream gravy",
    credit: "Affaf Ali, CC BY-SA 4.0",
  },
  curry: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/South_Indian_Chicken_curry.jpg",
    alt: "South Indian chicken curry served with rice and vegetables",
    credit: "Bluemantis07, CC BY 4.0",
  },
  biryani: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Indian_biryani.jpg",
    alt: "Indian chicken biryani with basmati rice and spices",
    credit: "Netha Hussain, CC BY-SA 4.0",
  },
  tandoori: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/TandooriChicken.jpg",
    alt: "Tandoori chicken served on a platter",
    credit: "AngMoKio, CC BY-SA 3.0",
  },
  chicken65: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chicken_65.jpg",
    alt: "Chicken 65 fried chicken pieces",
    credit: "Charles Haynes, CC BY-SA 2.0",
  },
  chettinad: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chicken_Chettinad.jpg/2560px-Chicken_Chettinad.jpg",
    alt: "Traditional Chicken Chettinad",
    credit: "Thamizhpparithi Maari, CC BY-SA 4.0",
  },
};

function getPhoto(slug: string): Photo {
  const key = slug.toLowerCase();
  if (key.includes("biryani") || key.includes("pulao")) return photos.biryani;
  if (key.includes("tandoor") || key.includes("tikka") || key.includes("grill")) return photos.tandoori;
  if (key.includes("65")) return photos.chicken65;
  if (key.includes("chettinad") || key.includes("milagu")) return photos.chettinad;
  if (key.includes("butter") || key.includes("makhani") || key.includes("tikka-masala")) return photos.butter;
  return photos.curry;
}

export function RecipePhoto({ slug, name, className = "", priority = false }: Props) {
  const photo = getPhoto(slug);
  return (
    <img
      src={photo.src}
      alt={name ? `${name} — ${photo.alt}` : photo.alt}
      className={`block h-full w-full object-cover object-center ${className}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
}
