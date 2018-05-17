export var Constants = {
    API_ENDPOINT : 'https://www.esferasoluciones.com/api/superlist/',
    USER_EMAIL: 'userEmail',
    USER_LOGGEDIN: 'UserLoggedIn',
    OFFLINE_RECIPES_DATA: [
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
    OFFLINE_RECIPE_DATA:
    {
        id: "1",
        name: "Mini Pizza",
        ingredients:[
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            "Ingredient 4",
            "Ingredient 5"
        ],
        steps:[
            "instruction 1",
            "instruction 2",
            "instruction 3",
            "instruction 4",
            "instruction 5",
            "instruction 6",
            "instruction 7",
            "instruction 8",
            "instruction 9",
        ],
        others:[
            {
                id: "2",
                name: "Arroz Chorrerano"
            },
            {
                id: "3",
                name: "Hamburguesa Big"
            }
        ]
    }

};
