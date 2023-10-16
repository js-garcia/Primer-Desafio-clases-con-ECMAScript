class ProductManager {
    constructor(){
        this.products = [];
    }
addProduct(object){
    const objCode = this.products.map((product) => product.code);
    const objExist =objCode.includes(object.code);
    if(objExist){
        console.log("Este codigo es de un producto existente,ingresa otro");
       }else if (Object.values(object).includes("")){
        console.log( "Para ingresar el producto debe completar todos los campos");
       } else {
        let id;
        this.products.length === 0 ? (id=1) : (id = this.products.length +1);
        const newObject = { ...object, id};
        this.products.push(newObject);
       }
}
getProducts (){
    return this.products;
}
getProductById(id){
   const productFind = this.products.find((product) => id === product.id);
   if (productFind){
    return JSON.stringify(productFind);
   } else{
    console.log("Not Found");
   }
 }
}

const clase1 = new ProductManager();

console.log(clase1);

clase1.addProduct({
    title: "Oso Benito",
    description: "Muñeco tejido en crochet",
    price: 3500,
    thumbnail:"gs://ecommerce-amineko.appspot.com/Images-Amineko/Benito.jpg",
    code: 201,
    stock:10,
});

console.log(clase1)

clase1.addProduct({
    title: "Coneja Malvina",
    description: "Muñeca tejida en crochet",
    price: 3500,
    thumbnail:"gs://ecommerce-amineko.appspot.com/Images-Amineko/Malvina.jpg",
    code:202,
    stock:15,
});

clase1.addProduct({
    title: "Coneja Malvina",
    description: "Muñeca tejida en crochet",
    price: 3500,
    thumbnail:"gs://ecommerce-amineko.appspot.com/Images-Amineko/Malvina.jpg",
    code:202,
    stock:15,
});

clase1.addProduct({
    title: "Coneja Malvina",
    description: "",
    price: 3500,
    thumbnail:"gs://ecommerce-amineko.appspot.com/Images-Amineko/Malvina.jpg",
    code:207,
    stock:15,
});

console.log(clase1);

clase1.getProductById(2)