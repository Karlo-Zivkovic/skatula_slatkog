import type { Pastry } from "../pastries";
import { boxItemToPastry } from "../boxes";
import skatulaMediterana from "./skatula-mediterana";
import zlatnaSkatula from "./zlatna-skatula";
import torte from "./torte";

const sm = (slug: string) =>
  skatulaMediterana.items.find((i) => i.slug === slug)!;
const zs = (slug: string) => zlatnaSkatula.items.find((i) => i.slug === slug)!;
const t = (slug: string) => torte.find((p) => p.slug === slug)!;

function torteFeta(
  torteSlug: string,
  fetaSlug: string,
  price: number,
  coverImage: string,
  images: string[],
  objectPosition?: string
): Pastry {
  const src = t(torteSlug);
  return {
    slug: fetaSlug,
    category: "kolaci",
    nameHr: src.nameHr,
    nameEn: src.nameEn,
    compositionHr: src.compositionHr,
    compositionEn: src.compositionEn,
    ingredientsHr: src.ingredientsHr,
    ingredientsEn: src.ingredientsEn,
    allergensHr: src.allergensHr,
    allergensEn: src.allergensEn,
    isGlutenFree: src.isGlutenFree,
    isVegan: src.isVegan,
    price,
    priceNote: "feta",
    coverImage,
    images,
    objectPosition,
  };
}

const kolaci: Pastry[] = [
  {
    slug: "golden-globe",
    category: "kolaci",
    nameHr: "Golden Globe",
    nameEn: "Golden Globe",
    compositionHr:
      "Pâte à choux · Craquelin · Burnt butter whipped ganache · Confit od marelice · Filo tuile · Sablé podloga",
    compositionEn:
      "Pâte à choux · Craquelin · Burnt butter whipped ganache · Apricot confit · Filo tuile · Sablé base",
    ingredientsHr:
      "Brašno, slatko vrhnje 35%mm, marelica, jaja, bijela čokolada, šećer, casssonade šećer, bademi, mlijeko, kakao, glukoza, želatina, pektin, vanilija, sol, limun",
    ingredientsEn:
      "Flour, 35% whipping cream, apricot, eggs, white chocolate, sugar, cassonade, almonds, milk, cocoa, glucose, gelatine, pectin, vanilla, salt, lemon",
    allergensHr: "Gluten, mlijeko i mliječni proizvodi, jaja, orašasti plodovi, soja",
    allergensEn: "Gluten, milk and dairy products, eggs, nuts, soy",
    price: 5.2,
    coverImage: "/pastries/kolaci/golden-globe/image4.jpeg",
    objectPosition: "center 45%",
    images: [
      "/pastries/kolaci/golden-globe/image1.jpeg",
      "/pastries/kolaci/golden-globe/image2.jpeg",
      "/pastries/kolaci/golden-globe/image3.jpeg",
      "/pastries/kolaci/golden-globe/image4.jpeg",
    ],
  },
  {
    slug: "kiss",
    category: "kolaci",
    nameHr: "Kiss",
    nameEn: "Kiss",
    compositionHr:
      "Pâte à choux · Craquelin · Confit od jagode · Krema od pistacije",
    compositionEn:
      "Pâte à choux · Craquelin · Strawberry confit · Pistachio cream",
    ingredientsHr:
      "Jaja, mlijeko, maslac, brašno, pire od jagode, šećer, invertni sirup, pektin, želatina, limun, bijela čokolada, pasta od pistacije, vrhnje 35%mm",
    ingredientsEn:
      "Eggs, milk, butter, flour, strawberry purée, sugar, invert syrup, pectin, gelatine, lemon, white chocolate, pistachio paste, 35% whipping cream",
    allergensHr: "Mlijeko i mliječni proizvodi, gluten, jaja. Može sadržavati orašaste plodove u tragovima",
    allergensEn: "Milk and dairy products, gluten, eggs. May contain traces of nuts",
    price: 5.2,
    coverImage: "/pastries/kolaci/kiss/image1.jpeg",
    images: [
      "/pastries/kolaci/kiss/image1.jpeg",
      "/pastries/kolaci/kiss/image2.jpeg",
    ],
  },
  // ── Škatula Mediterana items (single source of truth: skatula-mediterana.ts) ──
  boxItemToPastry(sm("azure-bloom")),
  boxItemToPastry(sm("limone-di-dalmacija")),
  boxItemToPastry(sm("oro-verde")),

  // ── Zlatna Škatula items (single source of truth: zlatna-skatula.ts) ─────────
  boxItemToPastry(zs("cloud-nine"), {
    coverImage: "/pastries/zlatna-skatula/cloud-nine/image2.jpeg",
    objectPosition: "center 52%",
  }),
  boxItemToPastry(zs("bracki-hrap")),
  boxItemToPastry(zs("noisette-royal")),
  // ── Torte fete (single source of truth: torte.ts) ────────────────────────────
  torteFeta("imperial-pistacio", "imperial-pistacio-feta", 5.5, "/pastries/torte/imperial-pistacio/image3.jpeg", ["/pastries/torte/imperial-pistacio/image3.jpeg"], "center 25%"),
  torteFeta("stracciatella",     "stracciatella-feta",     3.8, "/pastries/torte/stracciatella/image3.jpeg",     ["/pastries/torte/stracciatella/image3.jpeg"],     "center 42%"),
  torteFeta("tonka-royal",       "tonka-royal-feta",       5.3, "/pastries/torte/tonka-royal/image2.jpeg",       ["/pastries/torte/tonka-royal/image2.jpeg"],       "center 37%"),
  torteFeta("cheesecake",        "cheesecake-feta",        4.2, "/pastries/torte/cheesecake/image4.jpeg",        ["/pastries/torte/cheesecake/image4.jpeg"]),
  torteFeta("lilly",             "lillys-delight-feta",    5.3, "/pastries/torte/lilly/image5.jpeg",             ["/pastries/torte/lilly/image5.jpeg", "/pastries/torte/lilly/image4.jpeg"], "center 60%"),
  torteFeta("orange-62",         "orange-62-feta",         4.6, "/pastries/torte/orange-62/image3.jpeg",         ["/pastries/torte/orange-62/image3.jpeg"],         "center 60%"),
  torteFeta("coko-prestige",     "coko-prestige-feta",     5.2, "/pastries/torte/coko-prestige/image3.jpeg",     ["/pastries/torte/coko-prestige/image3.jpeg"]),
];

export default kolaci;
