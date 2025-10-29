import Alpine from "alpinejs";

window.Alpine = Alpine;

// --- definisikan kioskPage di global scope (window) ---
window.kioskPage = function () {
  return {
    selectedProduct: null,
    products: [
      {
        category: "T-Shirt",
        items: [
          {
            name: "Children's T-shirts",
            image: "white",
            material: "Cotton Combat 30s",
            sizes: ["S", "M", "L"],
          },
          {
            name: "Adult T-Shirt",
            image: "black",
            material: "Cotton Combat 30s",
            sizes: ["M", "L", "XL", "XXL"],
          },
        ],
      },
      {
        category: "Tote Bag",
        items: [
          {
            name: "Children's Canvas Tote Bag",
            image: "navy",
            material: "Canvas",
            sizes: ["One Size"],
          },
          {
            name: "Children's PVC Tote Bag",
            image: "clear",
            material: "PVC Transparent",
            sizes: ["One Size"],
          },
        ],
      },
      {
        category: "Water Bottle",
        items: [
          {
            name: "Children's water bottle 350ml",
            image: "white",
            material: "Stainless Steel",
            sizes: ["350ml"],
          },
          {
            name: "Children's water bottle 600ml",
            image: "black",
            material: "Stainless Steel",
            sizes: ["600ml"],
          },
        ],
      },
      {
        category: "Baseball Cap",
        items: [
          {
            name: "Black baseball cap",
            image: "black",
            material: "Cotton Twill",
            sizes: ["One Size"],
          },
          {
            name: "Blue baseball cap",
            image: "navy",
            material: "Cotton Twill",
            sizes: ["One Size"],
          },
        ],
      },
      {
        category: "Bucket Cap",
        items: [
          {
            name: "Black bucket cap",
            image: "black",
            material: "Cotton Canvas",
            sizes: ["One Size"],
          },
          {
            name: "White bucket cap",
            image: "white",
            material: "Cotton Canvas",
            sizes: ["One Size"],
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
