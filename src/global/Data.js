export const filterData = [{name:"Fast food",image: require('../assets/fastfood.png'), id:"0"},
                    {name:"Burgers",image:require("../assets/burger.png"),id:"1"},
                    {name:"Salads",image:require("../assets/salads.png"),id:"2"},
                    {name:"Hotdog",image:require("../assets/hotdog.png"),id:"3"},
                    {name:"Chinese",image:require("../assets/chinese.png"),id:"4"},
                    {name:"Mexican",image:require("../assets/mexican.png"),id:"5"},
                   { name: "Sea food", image: require("../assets/seafood.png"), id: "6" },
                    {name:"plate3",image:require("../assets/plate3.png"),id:"7"},
                    
];


export const filterData2 = [{name:"Fast food",image:'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg' , id:"0"},
{name:"Burgers",image: 'https://106fyz3cd4vi2lc2uq1tlyl4-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Moist-Chicken-Burgers.jpg',id:"1"},
{name:"Salads",image:"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_764,h_955/k%2FPhoto%2FRecipes%2F2020-06-how-we-salad%2FSalads-4-can%2FSalads-4-can018",id:"2"},
{name:"Hotdog",image: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1400/wp-content/uploads/hot-dog-day2.jpg",id:"3"},
{name:"Chinese",image:"https://c.ndtvimg.com/2020-01/dd46j918_chilli-chicken_625x300_21_January_20.jpg",id:"4"},
{name:"Mexican",image:"https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/chimichanga.jpg?quality=82&strip=1&w=800",id:"5"},  
{name:"Sea food",image:"https://www.mashed.com/img/gallery/x-seafood-items-you-need-to-try-before-you-die/intro-1581097951.jpg",id:"6"},
{name:"Chinese Food",image:"https://media.cntraveler.com/photos/5f63b787978ff785b25015e7/master/w_1600%2Cc_limit/Schezwan%2520Prawns-2A4D9JC.jpg",id:"7"},
{name:"Mexican pie",image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?quality=75&width=990&auto=webp&crop=982:726,smart",id:"8"},  
{name:"Ocean dish",image:"https://www.mashed.com/img/gallery/x-seafood-items-you-need-to-try-before-you-die/intro-1581097951.jpg",id:"9"},
];



export const restaurantsData = [
  {
    restaurantName: "Mc Donalds", farAway: "21.2",
    businessAddress: "22 Bessie street, Cape Town", images: 'https://b.zmtcdn.com/data/pictures/chains/0/100180/a1958577ef27f5fd85c9f2c57d50c54e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
    collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/01/Grand-Big-Mac-Bacon_374323211_657306192.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://image.shutterstock.com/image-photo/plateful-handcut-fried-potatoes-260nw-279078914.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
    },
    ],
    id: 0
  },
                  
  {
    restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
    images: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ihqadiqsdvbjrlgd7nop',
    averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://image.shutterstock.com/image-photo/plateful-handcut-fried-potatoes-260nw-279078914.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/01/Grand-Big-Mac-Bacon_374323211_657306192.jpg" },
    { name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" },
    ],
    id: 1
  },
                  
  {
    restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
    images: 'http://pineslopesboulevard.co.za/wp-content/uploads/2020/07/f4330be4-2ce8-42b1-86c7-fef8eec4d437.jpeg',
    coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
    discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://image.shutterstock.com/image-photo/plateful-handcut-fried-potatoes-260nw-279078914.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/01/Grand-Big-Mac-Bacon_374323211_657306192.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
    },
    ],
    id: 2
  },
                  
  {
    restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
    images: 'https://www.vincenzosplate.com/wp-content/uploads/2020/07/pizza-in-pala-recipe.png',
    averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://image.shutterstock.com/image-photo/plateful-handcut-fried-potatoes-260nw-279078914.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/01/Grand-Big-Mac-Bacon_374323211_657306192.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
    },
    ],
    id: 3
  },
];
                  
export const productData = [{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
                {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
                {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",details:"",id:2},
                
                {name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
                details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
                {name:"Big Mac", price:70.20,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
                {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png",details:"",id:5},
              
];   
                   export const menuData = [
    
            {title:"BEEF",special:false,key:0, },
            {title:"CHICKEN", special:false,key:1},
            {title:"VEGGIE BURGER",special:false ,key:2},
            {title:"FRIES& CORN",special:false ,key:3},
            {title:"SALADS",special:false,key:4},
            {title:"HAPPY MEALS",special:false,key:5},
            {title:"SAHRE BOX",special:false,key:6},
            {title:"MILKSHAKES",special:false,key:7},
            {title:"COLD DRINKS",special:false,key:8},
            {title:"DESSERTS",special:false,key:9},
            {title:"HOT DRINKS",special:false,key:10},
          
            ] ;
          
          export const specialData =[
            {title:"LIMITED OFFER",key:0},
            {title:"GO CHILLI",key:1},
            {title:"GO CHEESE",key:2},
            {title:"MCCHICKEN DELUXE PROMO",key:3},
];    
          
export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
];
 export const menuDetailedData =[
            { 
              meal:"Big Mac",
              price:70.20,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:0
            },
          
            { 
              meal:"Hand cut chips", 
              price:29.30,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
                minimum_quatity:[2,1,2,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false], 
                id:1
            },
          
            {
              meal:"Chicken Burger",
              price:45.70,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
              details:"",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],   
              id:2
            },
          
            {
              meal:"Big Mac",
              price:50.80,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
              
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],    
              id:3
            },
          
            
            { 
              
              meal:"Hand cut chips", 
              price:29.30,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],     
              id:4
            },
        
            { 
              meal:"Big Mac",
              price:70.20,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:5
            },
          
          ];