
//find something from array of object with some relative text

const products = [
    {name: 'Iphone 14', price: 70000},
    {name: 'Samsung galaxy 14', price: 60000},
    {name: 'Dell laptop', price: 50000},
    {name: 'Lenovo yoga', price: 55000},
    {name: 'Asus afsus 14', price: 35000},
    {name: 'Samsung Smart Watch', price: 7000},
    {name: 'apple watch', price: 20000},
];

function searchProduct(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(searchText.toLowerCase())){
            console.log(product.name);
            result.push(product);
        }
    }

    return result;
}

console.log(products);                                //output: [{name: 'Iphone 14', price: 70000}, {name: 'Samsung galaxy 14', price: 60000}, {name: 'Dell laptop', price: 50000}, {name: 'Lenovo yoga', price: 55000}, {name: 'Asus afsus 14', price: 35000}, {name: 'Samsung Smart Watch', price: 7000}, {name: 'apple watch', price: 20000},]
console.log(searchProduct(products,'Watch'));         //output:  [{ name: 'Samsung Smart Watch', price: 7000 }, { name: 'apple watch', price: 20000 }]