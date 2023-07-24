const { count } = require("console");
const Product = require("./models/Product");
const fs = require("fs");
const { findSourceMap } = require("module");

const action = process.argv[2];

const bootstrap = async () => {
  if (action === "buy") {
    const name = process.argv[3];
    const count = process.argv[4];
    const price = process.argv[6];
    
    const products = JSON.parse(
      await fs.promises.readFile("./database/buy.json")
    );

    const findProduct = products.find((product) => product.name === name);
    if (!findProduct) {
      const id = products.length + 1;

      const newProduct = new Product(id, name, +count, +price);

      const data = products.length ? [...products, newProduct] : [newProduct];

      await fs.promises.writeFile(
        "./database/buy.json",
        JSON.stringify(data, null, 2)
      );
    } else {
      findProduct.count += +count;
      findProduct.price += +price;
      await fs.promises.writeFile(
        "./database/buy.json",
        JSON.stringify(products, null, 2)
      );
      }
    }else if (action === "sell") {
      const name = process.argv[3];
      const count = process.argv[4];
      const price = process.argv[6];
  
      const products = JSON.parse(
        await fs.promises.readFile("./database/buy.json")
      );
  
      const findProducts = products.find((product) => product.name === name);
      if (!findProducts || findProducts.count < count) {
        console.log("Bunday mahsulot mavjud emas");
        return;
      }
     
      const sells = JSON.parse(
        await fs.promises.readFile("./database/stories.json")
      );    
  
      const findProduct = sells.find((sells) => sells.name === name);
    
      
      if (!findProduct) {
        const id = sells.length + 1;
  
        const newProduct = new Product(id, name, +count, +price);
  
        const data = sells.length ? [...sells, newProduct] : [newProduct];
        await fs.promises.writeFile(
          "./database/stories.json",
          JSON.stringify(data, null, 2)
        ); 
      } else {
        findProduct.count += +count;
        findProduct.price += +price;
        await fs.promises.writeFile(
          "./database/stories.json",
          JSON.stringify(sells, null, 2)
        );
      }
      findProducts.count -= count;
      findProducts.price -= price;
  
      await fs.promises.writeFile(
        "./database/buy.json",
        JSON.stringify(products, null, 2)
      );
    } else if (action === "shows") {
    const products = JSON.parse(
      await fs.promises.readFile("./database/stories.json")
    );
    console.table(products);

  } else if (action === "search") {
    const products = JSON.parse(
      await fs.promises.readFile("./database/buy.json")
    );

    const search = process.argv[3];

    const filtered = products.filter((product) => {
      const name = product.name.toLowerCase();
      return name.includes(search.toLowerCase());
    });

    console.table(filtered);
  } 

  
};

bootstrap();
