import Alpine from "alpinejs";

window.Alpine = Alpine;

window.kioskPage = function () {
  return {
    selectedProduct: null,
    products: [
      {
        category: "T-Shirt",
        items: [
          {
            name: "Children's T-shirts",
            image: "/children-tshirt-mini-logo.png",
            material: "Cotton Combed 30s",
            sizes: ["S", "M", "L"],
            print: "A5 1 sisi, tag",
            packaging: "Kemasan kraft/pouch",
          },
          {
            name: "Children's T-shirts",
            image: "/children-tshirt-big-logo.png",
            material: "Cotton Combed 30s",
            sizes: ["S", "M", "L"],
            print: "Print",
          },
          {
            name: "Adult T-shirts",
            image: "/adult-tshirt.png",
            material: "Combed 30s",
            sizes: ["S", "M", "L", "XL"],
            print: "A4 1 sisi",
          },
        ],
      },
      {
        category: "Tote Bag",
        items: [
          {
            name: "Children's Canvas Tote Bag",
            image: "/children-canvas-bag.png",
            material: "Kanvas natural",
            sizes: ["25x30 cm"],
            print: "A4 1 sisi",
          },
          {
            name: "Children's PVC Tote Bag",
            image: "/children-pvc-bag.png",
            material: "Mika PVC",
            sizes: ["25x30 cm"],
            print: "A4 1 sisi",
          },
          {
            name: "Adult Drill Tote Bag",
            image: "/adult-canvas-bag.png",
            material: "Drill",
            sizes: ["35x10x40 cm"],
            print: "A5, A7 1 sisi",
          },
        ],
      },
      {
        category: "Water Bottle",
        items: [
          {
            name: "Children’s water bottle 350ml",
            image: "/children-bottle.png",
            volume: "350 ml",
            sizes: ["23.5 x 6.5 x 6.5 cm"],
            print: "Full print",
          },
          {
            name: "Children’s water bottle 600ml",
            image: "/children-bottle.png",
            volume: "600 ml",
            sizes: ["23.5 x 6.5 x 6.5 cm"],
            print: "Full print",
          },
        ],
      },
      {
        category: "Hat",
        items: [
          {
            name: "Baseball cap",
            image: "/cap-baseball.png",
            type: "Bordir",
          },
          {
            name: "Bucket cap",
            image: "/cap-bucket.png",
            type: "Bordir",
          },
        ],
      },
      {
        category: "Socks",
        items: [
          {
            name: "Spandek Soks",
            image: "/sock.png",
            material: "Spandek, full print",
            packaging: "Kemasan kertas kraft",
          },
        ],
      },
      {
        category: "Keychain",
        items: [
          {
            name: "Keychain Station Name",
            image: "/keychain-train.png",
            material: "Akrilik Cutting 3mm 3mm cutting",
            sizes: ["4x5cm"],
            design: "Desain wajah KRL",
          },
          {
            name: "Keychain Train Face",
            image: "/keychain-station.png",
            material: "Akrilik Cutting 3mm 3mm cutting",
            sizes: ["5x6,5cm"],
            design: "Desain wajah KRL",
          },
        ],
      },
      {
        category: "Pencil Case",
        items: [
          {
            name: "Tempat Pensil",
            image: "/pencil-case.png",
            material: "Flexy, pcr",
            sizes: ["20x6x7,5cm"],
            print: "Full, retsleting, tag",
            packaging: "Kertas kraft",
          },
        ],
      },
      {
        category: "Fridge Magnet",
        items: [
          {
            name: "Fridge Magnet Train Faces 1",
            image: "/fridge-magnet-1.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },
          {
            name: "Fridge Magnet Train Faces 2",
            image: "/fridge-magnet-2.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },

          {
            name: "Fridge Magnet Train Faces 3",
            image: "/fridge-magnet-3.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },
          {
            name: "Fridge Magnet Train Faces 4",
            image: "/fridge-magnet-4.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },
          {
            name: "Fridge Magnet Train Faces 5",
            image: "/fridge-magnet-5.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },
          {
            name: "Fridge Magnet Train Faces 6",
            image: "/fridge-magnet-6.png",
            material: "Akrilik Cutting 3mm",
            sizes: ["4x5cm", "5x6,5cm"],
          },
          {
            name: "Fridge Magnet Station Name",
            image: "/fridge-magnet-7.png",
            material: "Resin",
            sizes: ["5x3,5cm"],
          },
        ],
      },
    ],
    toggleProduct(idx, itemIdx) {
      this.selectedProduct =
        this.selectedProduct === `${idx}-${itemIdx}`
          ? null
          : `${idx}-${itemIdx}`;
    },
  };
};

Alpine.start();
