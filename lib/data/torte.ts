import type { Pastry } from "../pastries";

const torte: Pastry[] = [
  {
    slug: "cheesecake",
    category: "torte",
    nameHr: "Cheesecake",
    nameEn: "Cheesecake",
    compositionHr:
      "Podloga od keksa · Nadjev od krem sira · Preljev od mileram",
    compositionEn: "Biscuit base · Cream cheese filling · Sour cream topping",
    ingredientsHr:
      "Keksi, maslac, šećer, Philadelphia sir, limun, mileram, jaja",
    ingredientsEn:
      "Biscuits, butter, sugar, Philadelphia cheese, lemon, sour cream, eggs",
    allergensHr: "Gluten, orašasti plodovi, mlijeko i mliječni proizvodi, jaja",
    allergensEn: "Gluten, nuts, milk and dairy products, eggs",
    price: 58.0,
    coverImage: "/pastries/torte/cheesecake/image1.jpeg",
    images: [
      "/pastries/torte/cheesecake/image1.jpeg",
      "/pastries/torte/cheesecake/image2.jpeg",
      "/pastries/torte/cheesecake/image3.jpeg",
      "/pastries/torte/cheesecake/image4.jpeg",
    ],
  },
  {
    slug: "coko-prestige",
    category: "torte",
    nameHr: "Choko Prestige",
    nameEn: "Choko Prestige",
    compositionHr:
      "Biskvit · Sloj tamne čokolade · Sloj mliječne čokolade · Sloj bijele čokolade",
    compositionEn:
      "Sponge · Dark chocolate layer · Milk chocolate layer · White chocolate layer",
    ingredientsHr:
      "Jaja, brašno, kakao, čokolada, maslac, šećer, badem u prahu, mlijeko, vrhnje 35%mm, želatina",
    ingredientsEn:
      "Eggs, flour, cocoa, chocolate, butter, sugar, almond powder, milk, 35% whipping cream, gelatine",
    allergensHr: "Mlijeko i mliječni proizvodi, gluten, jaja, orašasti plodovi",
    allergensEn: "Milk and dairy products, gluten, eggs, nuts",
    price: 70.0,
    coverImage: "/pastries/torte/coko-prestige/image1.jpeg",
    images: [
      "/pastries/torte/coko-prestige/image1.jpeg",
      "/pastries/torte/coko-prestige/image2.jpeg",
      "/pastries/torte/coko-prestige/image3.jpeg",
    ],
  },
  {
    slug: "fit-fantasy",
    category: "torte",
    nameHr: "Fit Fantasy (GF, vegan)",
    nameEn: "Fit Fantasy (GF, vegan)",
    compositionHr:
      "Podloga od datulja, badema i kokosa · Čokoladni sloj · Borovnica sloj · Malina sloj",
    compositionEn:
      "Date, almond and coconut base · Chocolate layer · Blueberry layer · Raspberry layer",
    ingredientsHr:
      "Badem, datulje, kokos listići, indijski orasi, kakao, med, kokos ulje, borovnica pire, malina pire, limun",
    ingredientsEn:
      "Almonds, dates, coconut flakes, cashews, cocoa, honey, coconut oil, blueberry purée, raspberry purée, lemon",
    allergensHr: "Orašasti plodovi. Može sadržavati gluten u tragovima",
    allergensEn: "Nuts. May contain traces of gluten",
    price: 70.0,
    isGlutenFree: true,
    isVegan: true,
    coverImage: "/pastries/torte/fit-fantasy-gf/image1.jpeg",
    images: [
      "/pastries/torte/fit-fantasy-gf/image1.jpeg",
      "/pastries/torte/fit-fantasy-gf/image2.jpeg",
      "/pastries/torte/fit-fantasy-gf/image3.jpeg",
      "/pastries/torte/fit-fantasy-gf/image4.jpeg",
      "/pastries/torte/fit-fantasy-gf/image5.jpeg",
    ],
  },
  {
    slug: "imperial-pistacio",
    category: "torte",
    nameHr: "Imperial Pistacio",
    nameEn: "Imperial Pistacio",
    compositionHr:
      "Pistacija biskvit · Hrskavi sloj od pistacije i bijele čokolade · Confit od jagoda · Krema od pistacije",
    compositionEn:
      "Pistachio sponge · Crunchy pistachio and white chocolate layer · Strawberry confit · Pistachio cream",
    ingredientsHr:
      "Pistacija, čokolada, slatko vrhnje 35%mm, jagode, jaja, šećer, maslac, brašno, mlijeko, invertni sirup, želatina, pektin, limun",
    ingredientsEn:
      "Pistachio, chocolate, 35% whipping cream, strawberries, eggs, sugar, butter, flour, milk, invert syrup, gelatine, pectin, lemon",
    allergensHr: "Mlijeko i mliječni proizvodi, jaja, gluten, orašasti plodovi",
    allergensEn: "Milk and dairy products, eggs, gluten, nuts",
    price: 78.0,
    priceNote: "torta | monoporcija 5,30 €",
    coverImage: "/pastries/torte/imperial-pistacio/image1.jpeg",
    images: [
      "/pastries/torte/imperial-pistacio/image1.jpeg",
      "/pastries/torte/imperial-pistacio/image2.jpeg",
      "/pastries/torte/imperial-pistacio/image3.jpeg",
    ],
  },
  {
    slug: "lilly",
    category: "torte",
    nameHr: "Lilly's Delight",
    nameEn: "Lilly's Delight",
    compositionHr: "Biskvit · Malina curd · Confit maline · Tučeni bijeli ganache",
    compositionEn:
      "Sponge · Raspberry curd · Raspberry confit · Whipped white ganache",
    ingredientsHr:
      "Jaja, šećer, brašno, mlijeko, mahuna vanilije, pire od maline, pektin, limun, želatina, vrhnje 35%mm, čokolada, maslac",
    ingredientsEn:
      "Eggs, sugar, flour, milk, vanilla pod, raspberry purée, pectin, lemon, gelatine, 35% whipping cream, chocolate, butter",
    allergensHr: "Jaja, gluten, mlijeko i mliječni proizvodi. Može sadržavati orašaste plodove u tragovima",
    allergensEn: "Eggs, gluten, milk and dairy products. May contain traces of nuts",
    price: 70.0,
    coverImage: "/pastries/torte/lilly/image1.jpeg",
    images: [
      "/pastries/torte/lilly/image1.jpeg",
      "/pastries/torte/lilly/image2.jpeg",
      "/pastries/torte/lilly/image3.jpeg",
      "/pastries/torte/lilly/image4.jpeg",
      "/pastries/torte/lilly/image5.jpeg",
    ],
  },
  {
    slug: "orange-62",
    category: "torte",
    nameHr: "Orange 62",
    nameEn: "Orange 62",
    compositionHr: "Biskvit · Čokoladni mousse · Orange confit",
    compositionEn: "Sponge · Chocolate mousse · Orange confit",
    ingredientsHr:
      "Jaja, šećer, brašno, kakao, ulje, mlijeko, čokolada, želatina, vrhnje 35%mm, naranča pire, maslac",
    ingredientsEn:
      "Eggs, sugar, flour, cocoa, oil, milk, chocolate, gelatine, 35% whipping cream, orange purée, butter",
    allergensHr: "Mlijeko i mliječni proizvodi, gluten, jaja. Može sadržavati orašaste plodove u tragovima",
    allergensEn: "Milk and dairy products, gluten, eggs. May contain traces of nuts",
    price: 65.0,
    coverImage: "/pastries/torte/orange-62/image1.jpeg",
    objectPosition: "center 55%",
    images: [
      "/pastries/torte/orange-62/image1.jpeg",
      "/pastries/torte/orange-62/image2.jpeg",
      "/pastries/torte/orange-62/image3.jpeg",
    ],
  },
  {
    slug: "stracciatella",
    category: "torte",
    nameHr: "Stracciatella",
    nameEn: "Stracciatella",
    compositionHr: "Biskvit · Stracciatella krema",
    compositionEn: "Sponge · Stracciatella cream",
    ingredientsHr:
      "Jaja, šećer, brašno, kakao, čokolada, ulje, mlijeko, želatina, bijeli rum, vrhnje 35%mm",
    ingredientsEn:
      "Eggs, sugar, flour, cocoa, chocolate, oil, milk, gelatine, white rum, 35% whipping cream",
    allergensHr: "Mlijeko i mliječni proizvodi, jaja, gluten. Može sadržavati orašaste plodove u tragovima",
    allergensEn: "Milk and dairy products, eggs, gluten. May contain traces of nuts",
    price: 55.0,
    coverImage: "/pastries/torte/stracciatella/image1.jpeg",
    images: [
      "/pastries/torte/stracciatella/image1.jpeg",
      "/pastries/torte/stracciatella/image2.jpeg",
      "/pastries/torte/stracciatella/image3.jpeg",
    ],
  },
  {
    slug: "tiramisu",
    category: "torte",
    nameHr: "Tiramisu",
    nameEn: "Tiramisu",
    compositionHr: "Biskvit od kave · Mascarpone krema · Lady fingers",
    compositionEn: "Coffee sponge · Mascarpone cream · Ladyfingers",
    ingredientsHr:
      "Jaja, šećer, med, badem u prahu, brašno, slatko vrhnje 35%mm, mascarpone, želatina, kava, liker od kave, piškote, kakao",
    ingredientsEn:
      "Eggs, sugar, honey, almond powder, flour, 35% whipping cream, mascarpone, gelatine, coffee, coffee liqueur, ladyfingers, cocoa",
    allergensHr: "Gluten, mlijeko i mliječni proizvodi, orašasti plodovi, jaja",
    allergensEn: "Gluten, milk and dairy products, nuts, eggs",
    price: 59.0,
    coverImage: "/pastries/torte/tiramisu/image1.jpeg",
    objectPosition: "center 60%",
    images: [
      "/pastries/torte/tiramisu/image1.jpeg",
      "/pastries/torte/tiramisu/image2.jpeg",
    ],
  },
  {
    slug: "tonka-royal",
    category: "torte",
    nameHr: "Tonka Royal",
    nameEn: "Tonka Royal",
    compositionHr:
      "Biskvit · Hrskava podloga · Tonka mousse · Tonka bean ganache · Mirror glazura",
    compositionEn:
      "Sponge · Crunchy base · Tonka mousse · Tonka bean ganache · Mirror glaze",
    ingredientsHr:
      "Jaja, šećer, badem brašno, kakao maslac, želatina, glukoza, vrhnje 35%mm, invertni šećer, čokolada, tonka bean, feuilletine, praline pasta",
    ingredientsEn:
      "Eggs, sugar, almond flour, cocoa butter, gelatine, glucose, 35% whipping cream, invert sugar, chocolate, tonka bean, feuilletine, praline paste",
    allergensHr: "Jaja, orašasti plodovi, mlijeko i mliječni proizvodi, gluten",
    allergensEn: "Eggs, nuts, milk and dairy products, gluten",
    price: 70.0,
    coverImage: "/pastries/torte/tonka-royal/image4.jpeg",
    objectPosition: "center 55%",
    images: [
      "/pastries/torte/tonka-royal/image4.jpeg",
      "/pastries/torte/tonka-royal/image3.jpeg",
      "/pastries/torte/tonka-royal/image1.jpeg",
      "/pastries/torte/tonka-royal/image2.jpeg",
    ],
  },
];

export default torte;
