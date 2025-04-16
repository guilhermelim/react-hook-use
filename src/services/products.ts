export type Products = {
  id: number;
  name: string;
};

export const getProducts = async (shouldThrowError: boolean = false) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (shouldThrowError) {
    throw new Error("Error fetching products");
  }

  return [
    { id: 1, name: "Smartphone Galaxy S21" },
    { id: 2, name: "Laptop Dell Inspiron" },
    { id: 3, name: "Bluetooth Headphones JBL" },
    { id: 4, name: "Smart TV LG 55'' 4K" },
    { id: 5, name: "Camera Canon EOS Rebel" },
  ] as Products[];
};
