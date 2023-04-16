const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "celular",
    img: "https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-7.jpg",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Samsung S21 ",
    price: 800,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_722975-MLA49947876196_052022-O.jpg",
    stock: 10,
    description: "Descripcion de Samsung S21",
  },
  {
    id: "3",
    name: "Motorola Edge 30",
    price: 950,
    category: "celular",
    img: "https://armoto.vtexassets.com/arquivos/ids/163066-800-auto?v=638101338413870000&width=800&height=auto&aspect=true",
    stock: 15,
    description: "Descripcion de Motorola Edge 30",
  },
  {
    id: "4",
    name: "Funda Iphone 12",
    price: 200,
    category: "accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_722185-MLA50213933278_062022-O.webp",
    stock: 15,
    description: "Funda Iphone 12",
  },
  {
    id: "5",
    name: "Funda Motorola Edge 30",
    price: 150,
    category: "accesorios",
    img: "https://armoto.vtexassets.com/arquivos/ids/163632-800-auto?v=638047756334230000&width=800&height=auto&aspect=true",
    stock: 2,
    description: "Funda Motorola Edge 30",
  },
  {
    id: "6",
    name: "Auriculares  inalámbricos JBL Tune",
    price: 300,
    category: "accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_621287-MLA46220004634_052021-O.webp",
    stock: 4,
    description: "Auriculares in-ear inalámbricos JBL Tune 115TWS black",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
