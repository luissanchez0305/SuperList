export var Constants = { 
    API_ENDPOINT : '/ws',
    USER_EMAIL: 'userEmail',
    USER_LOGGEDIN: 'UserLoggedIn',
    OFFLINE_DATA: [
        {
            id:"1",
            name:"Mini Pizzas",
            time:"35",
            favorites:"12",
            pricelevel:"secondary",
            image:"image1.jpg"
        },
        {
            id:"2",
            name:"Arroz Chorrerano",
            time:"75",
            favorites:"5",
            pricelevel:"bright",
            image:"image2.jpg"
        },
        {
            id:"3",
            name:"Hamburguesa Big",
            time:"45",
            favorites:"25",
            pricelevel:"secondary",
            image:"image3.jpg"
        },
        {
            id:"4",
            name:"Arroz con Vegetales",
            time:"60",
            favorites:"10",
            pricelevel:"bright",
            image:"image4.jpg"
        },
        {
            id:"5",
            name:"Pizza",
            time:"50",
            favorites:"24",
            pricelevel:"danger",
            image:"image5.jpg"
        },
    ],
    OFFLINE_LISTS_DATA: [
        {
            id: "1",
            name: "Lista de super"
        },
        {
            id: "2",
            name: "Lista de compras"
        },
        {
            id: "3", 
            name: "Wishlist"
        }
    ],
    OFFLINE_LIST_DATA:{
        id: "1",
        name:"Lista de super",
        products:[
            {
                id: "1",
                name: "Leche",
                qty: "2",
                hasIt: "false"
            },
            {
                id: "2",
                name: "Leche",
                qty: "2",
                hasIt: "false"
            },
            {
                id: "3",
                name: "Leche",
                qty: "2",
                hasIt: "false"
            },
            {
                id: "4",
                name: "Leche",
                qty: "2",
                hasIt: "false"
            }
        ]
    }
};
