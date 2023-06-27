import airpod from "../assets/images/airpod.jpeg";
import applewatch from "../assets/images/applewatch.jpeg";
import im from "../assets/images/im.png";
import imac from "../assets/images/imac.png";
import iphone11 from "../assets/images/iphone11.jpeg";
import tablet from "../assets/images/tablet.png";
import tv from "../assets/images/tv.jpeg";
const productsItem =[
    {
        id:1,
        name:"Airpod neue Generation",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda,adipisci placeat impedit cumque.",
        price:"200 $",
        imageUrl:airpod,
        productCount:"Verfügbarkeit:3"
    },
    {
        id:2,
        name:"A pple Watch",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"300 $",
        imageUrl:applewatch
    },
    {
        id:3,
        name:"MacBook Pro",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"1800 $",
        imageUrl:im
    },
    {
        id:4,
        name:"Macbook",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"1400 $",
        imageUrl:imac
    },
    {
        id:5,
        name:"iphone11 Pro",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"1400 $",
        imageUrl:iphone11
    },
    {
        id:6,
        name:" Tablet",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"870 $",
        imageUrl:tablet
    },
    {
        id:7,
        name:"TV",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet assumenda, adipisci placeat impedit cumque.",
        price:"200 $",


        imageUrl:tv
    }



] 
export const getProductsItem =()=>
{
    return productsItem
}