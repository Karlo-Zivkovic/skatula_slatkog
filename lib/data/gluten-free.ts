import type { Pastry } from "../pastries";
import { boxItemToPastry } from "../boxes";
import skatulaMediterana from "./skatula-mediterana";
import zlatnaSkatula from "./zlatna-skatula";
import torte from "./torte";

const sm = (slug: string) =>
  skatulaMediterana.items.find((i) => i.slug === slug)!;
const zs = (slug: string) => zlatnaSkatula.items.find((i) => i.slug === slug)!;
const t = (slug: string) => torte.find((p) => p.slug === slug)!;

function torteFetaGF(
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
    category: "gluten-free",
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

const glutenFree: Pastry[] = [
  // ── Škatula Mediterana (GF items) ────────────────────────────────────────────
  boxItemToPastry(sm("carob-noir"), { category: "gluten-free" }),
  boxItemToPastry(sm("green-harmony"), { category: "gluten-free" }),

  // ── Zlatna Škatula (GF items) ─────────────────────────────────────────────────
  boxItemToPastry(zs("heritage"), { category: "gluten-free" }),
  boxItemToPastry(zs("dalmatian-jewel"), { category: "gluten-free" }),
  boxItemToPastry(zs("priska"), { category: "gluten-free" }),

  // ── Torte fete (GF) ───────────────────────────────────────────────────────────
  torteFetaGF("fit-fantasy", "fit-fantasy-feta", 5.2, "/pastries/torte/fit-fantasy-gf/image4.jpeg", ["/pastries/torte/fit-fantasy-gf/image4.jpeg", "/pastries/torte/fit-fantasy-gf/image5.jpeg"]),
];

export default glutenFree;
