
import chicken from './assets/images/data/meat_chicken.jpg';
import duck from './assets//images/data/meat_duck.jpg';
import tynec from './assets/images/data/salad_tynec.jpg';
import chechevica from './assets/images/data/soup_chechevica.jpg';
import pure from './assets/images/data/soup_pure.jpg';




export const data = {
    Dishes: [{
        id: 1,
        name: "Салат из тунца",
        category: "Салаты",
        ingredients: ["1 банка консервированного тунца в собственном соку",
            "1 банка консервированной фасоли",
            "2 крупных солёных огурца",
            "1 крупный свежий огурец", "Лук",
            "2 столовые ложки растительного масла"
        ],
        picture: tynec
    }, {
        id: 2,
        name: "Суп с копчёностями и чечевицей",
        category: "Супы",
        ingredients: ["200 г копчёностей (курица, грудинка, рёбрышки)",
            "200 г чечевицы",
            "0.5 моркови",
            "0.5 луковицы",
            "1 столовая ложка масла"],
        picture: chechevica
    }, {
        id: 3,
        name: "Грибной суп-пюре",
        category: "Супы",
        ingredients: ["300 г шампиньонов",
            "1 средний кабачок"],
        picture: pure
    }, {
        id:4,
        name: " Куриное филе с ананасом",
        category: "Мясо",
        ingredients: ["2 филе куриной грудки",
            "3 колечка консервированного ананаса",
            "400 г брокколи",
            "2 столовые ложки оливкового масла"],
        picture: chicken
    }, {
        id: 5,
        name: "Утка с фунчозой",
        category: "Мясо",
        ingredients: ["200 г филе утки",
            "200 г фунчозы",
            "2 столовые ложки соевого соуса",
            "0.5 болгарского перца",
            "1 солёный огурец",
            "1 столовая ложка растительного масла"],
        picture: duck
    }]
}