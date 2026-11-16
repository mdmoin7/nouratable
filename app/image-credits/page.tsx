import Link from "next/link";

const credits = [
  { name: "Butter Chicken 1.jpg", author: "Affaf Ali", license: "CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Butter_Chicken_1.jpg", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { name: "South Indian Chicken curry.jpg", author: "Bluemantis07", license: "CC BY 4.0", file: "https://commons.wikimedia.org/wiki/File:South_Indian_Chicken_curry.jpg", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" },
  { name: "Indian biryani.jpg", author: "Netha Hussain", license: "CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Indian_biryani.jpg", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { name: "TandooriChicken.jpg", author: "AngMoKio", license: "CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:TandooriChicken.jpg", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  { name: "Chicken 65.jpg", author: "Charles Haynes", license: "CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:Chicken_65.jpg", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  { name: "Chicken Chettinad.jpg", author: "Thamizhpparithi Maari", license: "CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Chicken_Chettinad.jpg", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
];

export default function ImageCreditsPage() {
  return (
    <article className="wrap max-w-3xl py-16">
      <p className="eyebrow text-ember">Image attribution</p>
      <h1 className="display mt-3 text-5xl text-ink">Photo credits</h1>
      <p className="mt-5 text-sm leading-7 text-ink-soft">
        Food photographs are sourced from Wikimedia Commons and remain subject to their individual Creative Commons licenses. Images are displayed from their original Wikimedia-hosted files; no paid stock-photo service is used.
      </p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {credits.map((credit) => (
          <li key={credit.name} className="py-5">
            <p className="font-medium text-ink">{credit.name}</p>
            <p className="mt-1 text-sm text-ink-soft">Photo by {credit.author} · {credit.license}</p>
            <p className="mt-2 flex flex-wrap gap-4 text-sm">
              <a className="link-underline text-ember" href={credit.file} target="_blank" rel="noreferrer">Original file</a>
              <a className="link-underline text-ember" href={credit.licenseUrl} target="_blank" rel="noreferrer">License terms</a>
            </p>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-10 inline-block link-underline text-sm text-ink">← Back to cookbook</Link>
    </article>
  );
}
