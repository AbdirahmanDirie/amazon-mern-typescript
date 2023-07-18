import { User } from "./models/userModel";
import { Product } from "./models/productModel";
import bcrypt from 'bcryptjs'


export const smapleproducts: Product[] = [
    {
        name: 'Nike Slim Shirt',
        slug: "nike-slim-shirt",
        image: "https://img01.ztat.net/article/spp-media-p1/7598cbb89d673c5282097d8cc13eeac9/161788deaf67440a9c4d72e454ee52de.jpg?imwidth=1800",
        category: "Shirts",
        brand: "Nike",
        price: 120,
        countInStock: 10,
        description: "High quality shirt",
        rating: 4.4,
        numReviews: 3,
    },
    {
        name: 'white Slim Shirt',
        slug: "white-slim-shirt",
        image: "https://ozonee.eu/eng_pl_Mens-T-Shirt-White-OZONEE-JS-DX11001-36317_2.png",
        category: "Shirts",
        brand: "white",
        price: 110,
        countInStock: 20,
        description: "High quality shirt",
        rating: 4.4,
        numReviews: 5,
    },
    {
        name: 'navi Slim Shirt',
        slug: "navi-slim-shirt",
        image: "https://www.thehempshop.co.uk/media/catalog/product/cache/53255479565ca60bd805cf968bff78ae/h/e/hempiness-250g-short-sleeve-tshirt-mens-navy-blue-front_7.jpg.mst.webp",
        category: "Shirts",
        brand: "navi",
        price: 130,
        countInStock: 0,
        description: "High quality shirt",
        rating: 4.4,
        numReviews: 4,
    },
    {
        name: 'Blue Slim Shirt',
        slug: "blue-slim-shirt",
        image: "https://avseth.no/wp-content/uploads/2017/05/t-shirt-fitted-valueweight-fruit-royal-blue.jpg",
        category: "Shirts",
        brand: "Blue",
        price: 90,
        countInStock: 4,
        description: "High quality shirt",
        rating: 4.4,
        numReviews: 2,
    },
]


export const sampleUsers: User[] = [
    {
        name: 'dirie',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'maow',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
]