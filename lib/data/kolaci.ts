import type { Pastry } from "../pastries";

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
      "Flour, 35% whipping cream, apricot, eggs, white chocolate, sugar, cassonade sugar, almonds, milk, cocoa, glucose, gelatine, pectin, vanilla, salt, lemon",
    allergensHr: "Gluten, mlijeko, jaja, bademi, soja",
    allergensEn: "Gluten, milk, eggs, almonds, soy",
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
    allergensHr: "Mlijeko i mliječni proizvodi, gluten, jaja",
    allergensEn: "Milk and dairy products, gluten, eggs",
    price: 5.2,
    coverImage: "/pastries/kolaci/kiss/image1.jpeg",
    images: [
      "/pastries/kolaci/kiss/image1.jpeg",
      "/pastries/kolaci/kiss/image2.jpeg",
    ],
  },
  {
    slug: "azure-bloom",
    category: "kolaci",
    nameHr: "Azure Bloom",
    nameEn: "Azure Bloom",
    compositionHr:
      "Ganache od lavande · Mousse od lavande · Biskvit Sablé od lavande · Mirror glazura",
    compositionEn:
      "Lavender ganache · Lavender mousse · Lavender sablé sponge · Mirror glaze",
    ingredientsHr:
      "Krem sir, šećer, mlijeko, vrhnje 35%mm, želatina, čokolada, lavanda, glukoza, brašno, jaja, badem brašno",
    ingredientsEn:
      "Cream cheese, sugar, milk, 35% whipping cream, gelatine, chocolate, lavender, glucose, flour, eggs, almond flour",
    allergensHr: "Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi",
    allergensEn: "Gluten, eggs, milk and dairy products, nuts",
    price: 4.8,
    coverImage: "/pastries/kutija-mediterana/azure-bloom/image1.jpeg",
    objectPosition: "center 60%",
    images: [
      "/pastries/kutija-mediterana/azure-bloom/image1.jpeg",
      "/pastries/kutija-mediterana/azure-bloom/image2.jpeg",
      "/pastries/kutija-mediterana/azure-bloom/image3.jpeg",
      "/pastries/kutija-mediterana/azure-bloom/image4.jpeg",
    ],
  },
  {
    slug: "carob-noir",
    category: "kolaci",
    nameHr: "Carob Noir",
    nameEn: "Carob Noir",
    compositionHr:
      "Ganache od rogača i tamne čokolade · Mousse od rogača · Hrskava baza · Mirror glazura",
    compositionEn:
      "Carob and dark chocolate ganache · Carob mousse · Crunchy base · Mirror glaze",
    ingredientsHr:
      "Rogač, tamna čokolada, vrhnje 35%mm, šećer, jaja, brašno, maslac, badem brašno, želatina, glukoza",
    ingredientsEn:
      "Carob, dark chocolate, 35% whipping cream, sugar, eggs, flour, butter, almond flour, gelatine, glucose",
    allergensHr: "Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi",
    allergensEn: "Gluten, eggs, milk and dairy products, nuts",
    price: 4.8,
    coverImage: "/pastries/kutija-mediterana/carob-noir/image1.jpeg",
    images: [
      "/pastries/kutija-mediterana/carob-noir/image1.jpeg",
      "/pastries/kutija-mediterana/carob-noir/image2.jpeg",
      "/pastries/kutija-mediterana/carob-noir/image3.jpeg",
      "/pastries/kutija-mediterana/carob-noir/image4.jpeg",
    ],
  },
  {
    slug: "green-harmony",
    category: "kolaci",
    nameHr: "Green Harmony (GF)",
    nameEn: "Green Harmony (GF)",
    compositionHr:
      "Biskvit od badema · Insert/gel od Kombuche · Insert od kremaste zelene jabuke i Kombuche · Chantilly s kaduljom · Mirror glazura",
    compositionEn:
      "Almond sponge · Kombucha insert/gel · Creamy green apple and kombucha insert · Sage chantilly · Mirror glaze",
    ingredientsHr:
      "Pire jabuke, kombucha, šećer, jaja, želatina, maslac, mascarpone, vrhnje 35%mm, limun, rižino brašno, gluten free brašno, badem brašno, med, ulje, pektin",
    ingredientsEn:
      "Apple purée, kombucha, sugar, eggs, gelatine, butter, mascarpone, 35% whipping cream, lemon, rice flour, gluten-free flour, almond flour, honey, oil, pectin",
    allergensHr:
      "Orašidi, mliječni proizvodi, jaja. Može sadržavati gluten u tragovima",
    allergensEn: "Nuts, dairy products, eggs. May contain traces of gluten",
    price: 5.3,
    isGlutenFree: true,
    coverImage: "/pastries/kutija-mediterana/green-harmony/image1.jpeg",
    images: [
      "/pastries/kutija-mediterana/green-harmony/image1.jpeg",
      "/pastries/kutija-mediterana/green-harmony/image2.jpeg",
      "/pastries/kutija-mediterana/green-harmony/image3.jpeg",
      "/pastries/kutija-mediterana/green-harmony/image4.jpeg",
      "/pastries/kutija-mediterana/green-harmony/image5.jpeg",
    ],
  },
  {
    slug: "limone-di-dalmacija",
    category: "kolaci",
    nameHr: "Limone di Dalmacija",
    nameEn: "Limone di Dalmacija",
    compositionHr: "Limun krema · Limun pjena · Biskvit · Sablé",
    compositionEn: "Lemon cream · Lemon foam · Sponge · Sablé",
    ingredientsHr:
      "Želatina, šećer, limun, jaja, maslac, mlijeko, bijela čokolada, vrhnje 35%mm, maslinovo ulje, ružmarin, badem brašno",
    ingredientsEn:
      "Gelatine, sugar, lemon, eggs, butter, milk, white chocolate, 35% whipping cream, olive oil, rosemary, almond flour",
    allergensHr: "Jaja, mlijeko i mliječni proizvodi, gluten, orašasti plodovi",
    allergensEn: "Eggs, milk and dairy products, gluten, nuts",
    price: 5.3,
    coverImage: "/pastries/kutija-mediterana/limone-di-dalmacija/image1.jpeg",
    images: [
      "/pastries/kutija-mediterana/limone-di-dalmacija/image1.jpeg",
      "/pastries/kutija-mediterana/limone-di-dalmacija/image2.jpeg",
      "/pastries/kutija-mediterana/limone-di-dalmacija/image3.jpeg",
      "/pastries/kutija-mediterana/limone-di-dalmacija/image4.jpeg",
      "/pastries/kutija-mediterana/limone-di-dalmacija/image5.jpeg",
    ],
  },
  {
    slug: "oro-verde",
    category: "kolaci",
    nameHr: "Oro Verde",
    nameEn: "Oro Verde",
    compositionHr:
      "Mousse od maslinovog ulja · Insert od maslinova likera i bijele čokolade · Biskvit · Sablé podloga · Mirror glazura",
    compositionEn:
      "Olive oil mousse · Olive liqueur and white chocolate insert · Sponge · Sablé base · Mirror glaze",
    ingredientsHr:
      "Slatko vrhnje 35%mm, bijela čokolada, maslinov liker, maslinovo ulje, želatina, limun sok, vanilija štapić, kakao maslac, brašno, jaja",
    ingredientsEn:
      "35% whipping cream, white chocolate, olive liqueur, olive oil, gelatine, lemon juice, vanilla pod, cocoa butter, flour, eggs",
    allergensHr: "Orašasti plodovi, mlijeko i mliječni proizvodi, gluten, jaja",
    allergensEn: "Nuts, milk and dairy products, gluten, eggs",
    price: 5.3,
    coverImage: "/pastries/kutija-mediterana/oro-verde/image1.jpeg",
    images: [
      "/pastries/kutija-mediterana/oro-verde/image1.jpeg",
      "/pastries/kutija-mediterana/oro-verde/image2.jpeg",
      "/pastries/kutija-mediterana/oro-verde/image3.jpeg",
    ],
  },
  {
    slug: "cloud-nine",
    category: "kolaci",
    nameHr: "Cloud Nine",
    nameEn: "Cloud Nine",
    compositionHr:
      "Lagani vanilija mousse s petit beurre keksom · Nježan biskvit od vanilije · Oblak od talijanske meringe · Sablé podloga",
    compositionEn:
      "Light vanilla mousse with petit beurre biscuit · Delicate vanilla sponge · Italian meringue cloud · Sablé base",
    ingredientsHr:
      "Mlijeko, jaja, šećer, vrhnje 35%mm, želatina, vanilija, brašno, maslac, prašak za pecivo, badem brašno",
    ingredientsEn:
      "Milk, eggs, sugar, 35% whipping cream, gelatine, vanilla, flour, butter, baking powder, almond flour",
    allergensHr: "Gluten, jaja, mlijeko, orašasti plodovi",
    allergensEn: "Gluten, eggs, milk, nuts",
    price: 5.2,
    coverImage: "/pastries/zlatna-skatula/cloud-nine/image2.jpeg",
    objectPosition: "center 52%",
    images: [
      "/pastries/zlatna-skatula/cloud-nine/image1.jpeg",
      "/pastries/zlatna-skatula/cloud-nine/image2.jpeg",
    ],
  },
  {
    slug: "heritage",
    category: "kolaci",
    nameHr: "Heritage",
    nameEn: "Heritage",
    compositionHr:
      "GF biskvit od badema · Mousse od badema · Hrskavi sloj od badem pralina i čokolade · Ganache insert od čokolade i mascarpone · Fluid gel od marascina",
    compositionEn:
      "GF almond sponge · Almond mousse · Crunchy almond praline and chocolate layer · Chocolate and mascarpone ganache insert · Maraschino fluid gel",
    ingredientsHr:
      "Badem brašno, jaja, šećer, limun, mlijeko, pasta od badema, želatina, slatko vrhnje 35%mm, maraschino, bijela čokolada, karamel čokolada, glukoza, agar, mascarpone",
    ingredientsEn:
      "Almond flour, eggs, sugar, lemon, milk, almond paste, gelatine, 35% whipping cream, maraschino, white chocolate, caramel chocolate, glucose, agar, mascarpone",
    allergensHr:
      "Mlijeko i mliječni proizvodi, jaja, orašasti plodovi. Može sadržavati gluten u tragovima",
    allergensEn:
      "Milk and dairy products, eggs, nuts. May contain traces of gluten",
    price: 5.3,
    isGlutenFree: true,
    coverImage: "/pastries/zlatna-skatula/heritage/image1.jpeg",
    objectPosition: "center 65%",
    images: [
      "/pastries/zlatna-skatula/heritage/image1.jpeg",
      "/pastries/zlatna-skatula/heritage/image2.jpeg",
      "/pastries/zlatna-skatula/heritage/image3.jpeg",
      "/pastries/zlatna-skatula/heritage/image4.jpeg",
    ],
  },
  {
    slug: "dalmatian-jewel",
    category: "kolaci",
    nameHr: "Dalmatian Jewel (GF)",
    nameEn: "Dalmatian Jewel (GF)",
    compositionHr:
      "GF biskvit od badema · Mousse od badema · Hrskavi sloj od badem pralina i čokolade · Ganache insert od čokolade i mascarpone · Fluid gel od marascina",
    compositionEn:
      "GF almond sponge · Almond mousse · Crunchy almond praline and chocolate layer · Chocolate and mascarpone ganache insert · Maraschino fluid gel",
    ingredientsHr:
      "Badem brašno, jaja, šećer, limun, mlijeko, pasta od badema, želatina, slatko vrhnje 35%mm, maraschino, bijela čokolada, karamel čokolada, glukoza, agar, mascarpone",
    ingredientsEn:
      "Almond flour, eggs, sugar, lemon, milk, almond paste, gelatine, 35% whipping cream, maraschino, white chocolate, caramel chocolate, glucose, agar, mascarpone",
    allergensHr:
      "Mlijeko i mliječni proizvodi, jaja, orašasti plodovi. Može sadržavati gluten u tragovima",
    allergensEn:
      "Milk and dairy products, eggs, nuts. May contain traces of gluten",
    price: 5.3,
    isGlutenFree: true,
    coverImage: "/pastries/zlatna-skatula/dalmatian-jewel/image2.jpeg",
    objectPosition: "center 57%",
    images: [
      "/pastries/zlatna-skatula/dalmatian-jewel/image1.jpeg",
      "/pastries/zlatna-skatula/dalmatian-jewel/image2.jpeg",
      "/pastries/zlatna-skatula/dalmatian-jewel/image3.jpeg",
      "/pastries/zlatna-skatula/dalmatian-jewel/image4.jpeg",
    ],
  },
  {
    slug: "bracki-hrap",
    category: "kolaci",
    nameHr: "Brački Hrap No.1",
    nameEn: "Brački Hrap No.1",
    compositionHr:
      "Hrskava orašasta baza · Biskvit od oraha · Sloj karameliziranih oraha s medom · Crémeux od oraha s tamnim rumom · Mousse od oraha · Tuile od oraha",
    compositionEn:
      "Crunchy nut base · Walnut sponge · Caramelised walnut and honey layer · Walnut crémeux with dark rum · Walnut mousse · Walnut tuile",
    ingredientsHr:
      "Orasi, mliječna čokolada, bijela čokolada, maslac, jaja, šećer, med, badem, vrhnje 35%mm, brašno, kukuruzni škrob, kakao maslac, želatina, tamni rum",
    ingredientsEn:
      "Walnuts, milk chocolate, white chocolate, butter, eggs, sugar, honey, almond, 35% whipping cream, flour, corn starch, cocoa butter, gelatine, dark rum",
    allergensHr: "Gluten, jaja, orašasti plodovi. Može sadržavati tragove soje",
    allergensEn: "Gluten, eggs, nuts. May contain traces of soy",
    price: 5.3,
    coverImage: "/pastries/zlatna-skatula/bracki-hrap-no1/image1.jpeg",
    objectPosition: "center 70%",
    images: [
      "/pastries/zlatna-skatula/bracki-hrap-no1/image1.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image2.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image3.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image4.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image5.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image6.jpeg",
      "/pastries/zlatna-skatula/bracki-hrap-no1/image7.jpeg",
    ],
  },
  {
    slug: "priska",
    category: "kolaci",
    nameHr: "Priska",
    nameEn: "Priska",
    compositionHr:
      "Hrskavi biskvit od suhog voća, badema i bjelanjaka · Krema od vanilije · Glazura · Dekoracija od kandiranih citrusa",
    compositionEn:
      "Crunchy dried fruit, almond and egg white sponge · Vanilla cream · Glaze · Candied citrus decoration",
    ingredientsHr:
      "Bijela čokolada, slatko vrhnje 35%mm, mlijeko, jaja, šećer, badem, limun, naranča, suho voće (grožđice, smokve), maslac, želatina, rum",
    ingredientsEn:
      "White chocolate, 35% whipping cream, milk, eggs, sugar, almond, lemon, orange, dried fruit (raisins, figs), butter, gelatine, rum",
    allergensHr: "Jaja, mlijeko i mliječni proizvodi, orašasti plodovi",
    allergensEn: "Eggs, milk and dairy products, nuts",
    price: 5.4,
    coverImage: "/pastries/zlatna-skatula/priska/image4.jpeg",
    objectPosition: "center 55%",
    images: [
      "/pastries/zlatna-skatula/priska/image1.jpeg",
      "/pastries/zlatna-skatula/priska/image2.jpeg",
      "/pastries/zlatna-skatula/priska/image3.jpeg",
      "/pastries/zlatna-skatula/priska/image4.jpeg",
    ],
  },
  {
    slug: "noisette-royal",
    category: "kolaci",
    nameHr: "Noisette Royal",
    nameEn: "Noisette Royal",
    compositionHr:
      "Čokoladni dacquise · Čokoladni crémeux · Krema od pralina · Čokoladna krema",
    compositionEn:
      "Chocolate dacquoise · Chocolate crémeux · Praline cream · Chocolate cream",
    ingredientsHr:
      "Jaja, šećer, brašno, kakao, maslac, čokolada, vrhnje 35%mm, liker, želatina, lješnjak praline, glukoza",
    ingredientsEn:
      "Eggs, sugar, flour, cocoa, butter, chocolate, 35% whipping cream, liqueur, gelatine, hazelnut praline, glucose",
    allergensHr: "Gluten, mliječni proizvodi, orašidi, jaja",
    allergensEn: "Gluten, dairy products, nuts, eggs",
    price: 5.5,
    coverImage: "/pastries/zlatna-skatula/noisette-royal/image1.jpeg",
    images: [
      "/pastries/zlatna-skatula/noisette-royal/image1.jpeg",
      "/pastries/zlatna-skatula/noisette-royal/image2.jpeg",
      "/pastries/zlatna-skatula/noisette-royal/image3.jpeg",
      "/pastries/zlatna-skatula/noisette-royal/image4.jpeg",
    ],
  },
  {
    slug: "fit-fantasy-kriska",
    category: "kolaci",
    nameHr: "Fit Fantasy (GF, vegan)",
    nameEn: "Fit Fantasy (GF, vegan)",
    compositionHr:
      "Podloga od datulja, badema i kokosa · Čokoladni sloj · Borovnica sloj · Malina sloj",
    compositionEn:
      "Date, almond and coconut base · Chocolate layer · Blueberry layer · Raspberry layer",
    ingredientsHr:
      "Badem, datulje, kokos listići, indijski orasi, kakao, med, kokos ulje, borovnica pire, malina pire, limun",
    ingredientsEn:
      "Almond, dates, coconut flakes, cashews, cocoa, honey, coconut oil, blueberry purée, raspberry purée, lemon",
    allergensHr: "Orašasti plodovi",
    allergensEn: "Nuts",
    price: 5.2,
    priceNote: "krišak",
    isGlutenFree: true,
    isVegan: true,
    coverImage: "/pastries/torte/fit-fantasy-gf/image4.jpeg",
    images: [
      "/pastries/torte/fit-fantasy-gf/image4.jpeg",
      "/pastries/torte/fit-fantasy-gf/image5.jpeg",
    ],
  },
  {
    slug: "imperial-pistacio-kriska",
    category: "kolaci",
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
    price: 5.3,
    priceNote: "krišak",
    coverImage: "/pastries/torte/imperial-pistacio/image3.jpeg",
    objectPosition: "center 25%",
    images: ["/pastries/torte/imperial-pistacio/image3.jpeg"],
  },
  {
    slug: "stracciatella-kriska",
    category: "kolaci",
    nameHr: "Stracciatella",
    nameEn: "Stracciatella",
    compositionHr: "Biskvit · Stracciatella krema",
    compositionEn: "Sponge · Stracciatella cream",
    ingredientsHr:
      "Jaja, šećer, brašno, kakao, čokolada, ulje, mlijeko, želatina, bijeli rum, vrhnje 35%mm",
    ingredientsEn:
      "Eggs, sugar, flour, cocoa, chocolate, oil, milk, gelatine, white rum, 35% whipping cream",
    allergensHr: "Mlijeko i mliječni proizvodi, jaja, gluten",
    allergensEn: "Milk and dairy products, eggs, gluten",
    price: 3.8,
    priceNote: "krišak",
    coverImage: "/pastries/torte/stracciatella/image3.jpeg",
    objectPosition: "center 42%",
    images: ["/pastries/torte/stracciatella/image3.jpeg"],
  },
  {
    slug: "tonka-royal-kriska",
    category: "kolaci",
    nameHr: "Tonka Royal",
    nameEn: "Tonka Royal",
    compositionHr:
      "Biskvit · Hrskava podloga · Tonka mousse · Tonka bean ganache · Kakao glazura",
    compositionEn:
      "Sponge · Crunchy base · Tonka mousse · Tonka bean ganache · Cocoa glaze",
    ingredientsHr:
      "Jaja, šećer, badem brašno, kakao maslac, želatina, glukoza, vrhnje 35%mm, invertni šećer, čokolada, tonka bean, feuilletine, praline pasta",
    ingredientsEn:
      "Eggs, sugar, almond flour, cocoa butter, gelatine, glucose, 35% whipping cream, invert sugar, chocolate, tonka bean, feuilletine, praline paste",
    allergensHr: "Jaja, orašasti plodovi, mlijeko i mliječni proizvodi, gluten",
    allergensEn: "Eggs, nuts, milk and dairy products, gluten",
    price: 5.2,
    priceNote: "krišak",
    coverImage: "/pastries/torte/tonka-royal/image2.jpeg",
    objectPosition: "center 37%",
    images: ["/pastries/torte/tonka-royal/image2.jpeg"],
  },
  {
    slug: "cheesecake-kriska",
    category: "kolaci",
    nameHr: "Cheesecake",
    nameEn: "Cheesecake",
    compositionHr:
      "Podloga od keksa · Nadjev od krem sira · Preljev od mileram",
    compositionEn: "Biscuit base · Cream cheese filling · Sour cream topping",
    ingredientsHr:
      "Keksi, maslac, šećer, Philadelphia sir, limun, mileram, jaja",
    ingredientsEn:
      "Biscuits, butter, sugar, Philadelphia cheese, lemon, sour cream, eggs",
    allergensHr: "Gluten, orašidi, mlijeko i mliječni proizvodi, jaja",
    allergensEn: "Gluten, nuts, milk and dairy products, eggs",
    price: 4.2,
    priceNote: "krišak",
    coverImage: "/pastries/torte/cheesecake/image4.jpeg",
    images: ["/pastries/torte/cheesecake/image4.jpeg"],
  },
  {
    slug: "lillys-delight-kriska",
    category: "kolaci",
    nameHr: "Lilly's Delight",
    nameEn: "Lilly's Delight",
    compositionHr: "Biskvit · Malina curd · Confit maline · Tučeni ganache",
    compositionEn:
      "Sponge · Raspberry curd · Raspberry confit · Whipped ganache",
    ingredientsHr:
      "Jaja, šećer, brašno, mlijeko, mahuna vanilije, pire od maline, pektin, limun, želatina, vrhnje 35%mm, čokolada, maslac",
    ingredientsEn:
      "Eggs, sugar, flour, milk, vanilla pod, raspberry purée, pectin, lemon, gelatine, 35% whipping cream, chocolate, butter",
    allergensHr: "Jaja, gluten, mlijeko i mliječni proizvodi",
    allergensEn: "Eggs, gluten, milk and dairy products",
    price: 5.3,
    priceNote: "krišak",
    coverImage: "/pastries/torte/lilly/image5.jpeg",
    objectPosition: "center 60%",
    images: [
      "/pastries/torte/lilly/image5.jpeg",
      "/pastries/torte/lilly/image4.jpeg",
    ],
  },
  {
    slug: "orange-62-kriska",
    category: "kolaci",
    nameHr: "Orange 62",
    nameEn: "Orange 62",
    compositionHr: "Biskvit · Čokoladni mousse · Orange confit",
    compositionEn: "Sponge · Chocolate mousse · Orange confit",
    ingredientsHr:
      "Jaja, šećer, brašno, kakao, ulje, mlijeko, čokolada, želatina, vrhnje 35%mm, naranča pire, maslac",
    ingredientsEn:
      "Eggs, sugar, flour, cocoa, oil, milk, chocolate, gelatine, 35% whipping cream, orange purée, butter",
    allergensHr: "Mlijeko i mliječni proizvodi, gluten, jaja",
    allergensEn: "Milk and dairy products, gluten, eggs",
    price: 4.9,
    priceNote: "krišak",
    coverImage: "/pastries/torte/orange-62/image3.jpeg",
    objectPosition: "center 60%",
    images: ["/pastries/torte/orange-62/image3.jpeg"],
  },
];

export default kolaci;
