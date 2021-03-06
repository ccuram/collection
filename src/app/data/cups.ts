import { Cup } from '../model/cup';

export const CUPS = [
    {
        id: 0,
        name: "페미사이클 R",
        name_eng: "FemmyCycle Regular",
        imgUrls: "femmycycle_regular",
        size: "레귤러",
        size_eng: "Regular",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://femmycycle.com/",
        country: "미국",
        country_eng: "usa",
        price: "$39.00",
        externalDiameter: 36,
        totalLength: 63,
        bodyLength: 43,
        topToHole: "-",
        stemType: {
            name: '고리 모양',
            name_eng: 'Ring',
            isNonslip: false
        },
        stemLength: 20,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 1,
        name: "페미사이클 10대용",
        name_eng: "FemmyCycle Teen",
        imgUrls: "femmycycle_teen",
        size: "10대용",
        size_eng: "Teen",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://femmycycle.com/",
        country: "미국",
        country_eng: "usa",
        price: "$39.00",
        externalDiameter: 31,
        totalLength: 57,
        bodyLength: 38,
        topToHole: "-",
        stemType: {
            name: '고리 모양',
            name_eng: 'Ring',
            isNonslip: false
        },
        stemLength: 19,
        material: "실리콘",
        totalCapacity: 17.5,
        airholeCapacity: "-",
        airholeType: "none"
    },
    {
        id: 2,
        name: "페미사이클 낮은 포궁용",
        name_eng: "FemmyCycle Low Cervix",
        imgUrls: "femmycycle_low_cervix",
        size: "낮은 포궁용",
        size_eng: "Low Cervix",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://femmycycle.com/",
        country: "미국",
        country_eng: "usa",
        price: "$39.00",
        externalDiameter: 36,
        totalLength: 50,
        bodyLength: 43,
        topToHole: "-",
        stemType: {
            name: '고리 모양',
            name_eng: 'Ring',
            isNonslip: false
        },
        stemLength: 7,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "none"
    },
    {
        id: 3,
        name: "스쿤컵 1",
        name_eng: "Sckoon Cup 1",
        imgUrls: "sckoon_cup_1",
        size: 1,
        size_eng: 1,
        color: [
            { name: "clearity", code: "#fff" },
            { name: "hope", code: "#f6bbff" },
            { name: "zen", code: "#913ffc" },
            { name: "wellness", code: "#ff0b34" },
            { name: "harmony", code: "#1bdbc8" },
            { name: "sunrise", code: "#f9ff15" },
            { name: "balance", code: "#8dbbff" },
            { name: "meditation", code: "#0076bf" }
        ],
        officialsite: "https://sckooncup.com/",
        country: "미국",
        country_eng: "usa",
        price: "$38.99",
        externalDiameter: 40,
        totalLength: 70,
        bodyLength: 40,
        topToHole: "-",
        stemType: {
            name: '뾰족한 기둥 모양',
            name_eng: 'Long Thin',
            isNonslip: true
        },
        stemLength: 30,
        material: "실리콘",
        totalCapacity: 23,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 4,
        name: "스쿤컵 2",
        name_eng: "Sckoon Cup 2",
        imgUrls: "sckoon_cup_2",
        size: 2,
        size_eng: 2,
        color: [
            { name: "clearity", code: "#fff" },
            { name: "hope", code: "#f6bbff" },
            { name: "zen", code: "#913ffc" },
            { name: "wellness", code: "#ff0b34" },
            { name: "harmony", code: "#1bdbc8" },
            { name: "sunrise", code: "#f9ff15" },
            { name: "balance", code: "#8dbbff" },
            { name: "meditation", code: "#0076bf" }
        ],
        officialsite: "https://sckooncup.com/",
        country: "미국",
        country_eng: "usa",
        price: "$38.99",
        externalDiameter: 45,
        totalLength: 70,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '뾰족한 기둥 모양',
            name_eng: 'Long Thin',
            isNonslip: true
        },
        stemLength: 20,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 5,
        name: "아이리스컵 S",
        name_eng: "Iris Cup S",
        imgUrls: "iris_cup_small",
        size: "S",
        size_eng: "S",
        color: [
            { name: "clear", code: "#fff" },
            { name: "pink", code: "#fcd9ff" }
        ],
        officialsite: "https://www.iriscup.com/",
        country: "스페인",
        country_eng: "spain",
        price: "$11.95",
        externalDiameter: 40,
        totalLength: 65,
        bodyLength: 45,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 15,
        material: "실리콘",
        totalCapacity: 15,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 6,
        name: "아이리스컵 L",
        name_eng: "Iris Cup L",
        imgUrls: "iris_cup_large",
        size: "L",
        size_eng: "L",
        color: [
            { name: "clear", code: "#fff" },
            { name: "pink", code: "#fcd9ff" }
        ],
        officialsite: "https://www.iriscup.com/",
        country: "스페인",
        country_eng: "spain",
        price: "$39.95",
        externalDiameter: 45,
        totalLength: 65,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 15,
        material: "실리콘",
        totalCapacity: 20,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 7,
        name: "펨컵",
        name_eng: "Femme Cup",
        imgUrls: "femme_cup",
        size: "-",
        size_eng: "-",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "http://www.femmecup.com/",
        country: "영국",
        country_eng: "uk",
        price: "€ 21.99",
        externalDiameter: 45,
        totalLength: 60,
        bodyLength: 45,
        topToHole: "-",
        stemType: {
            name: '기둥 모양',
            name_eng: 'Solid Round',
            isNonslip: true
        },
        stemLength: 15,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-",
    },
    {
        id: 8,
        name: "주주컵 모델1",
        name_eng: "JuJu Cup Model 1",
        imgUrls: "juju_cup_model_1",
        size: "Model 1",
        size_eng: "Model 1",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.juju.com.au/",
        country: "호주",
        country_eng: "australia",
        price: "$55.00",
        externalDiameter: 40,
        totalLength: 65,
        bodyLength: 46,
        topToHole: "-",
        stemType: {
            name: '뾰족한 기둥 모양',
            name_eng: 'Long Thin',
            isNonslip: false
        },
        stemLength: 19,
        material: "실리콘",
        totalCapacity: 20,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 9,
        name: "주주컵 모델2",
        name_eng: "JuJu Cup Model 2",
        imgUrls: "juju_cup_model_2",
        size: "Model 2",
        size_eng: "Model 2",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.juju.com.au/",
        country: "호주",
        country_eng: "australia",
        price: "$55.00",
        externalDiameter: 46,
        totalLength: 69,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '뾰족한 기둥 모양',
            name_eng: 'Long Thin',
            isNonslip: false
        },
        stemLength: 19,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 10,
        name: "레나컵 S",
        name_eng: "LENA Cup Small",
        imgUrls: "lena_cup_small",
        size: "Small",
        size_eng: "Small",
        color: [
            { name: "pink", code: "#ff9ba5" },
            { name: "purple", code: "#9793e8" },
            { name: "turquoise", code: "#a5e1e0" }
        ],
        officialsite: "https://lenacup.com/",
        country: "미국",
        country_eng: "usa",
        price: "$24.90",
        externalDiameter: 41,
        totalLength: 71,
        bodyLength: 46,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 25,
        material: "실리콘",
        totalCapacity: 25,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 11,
        name: "레나컵 L",
        name_eng: "LENA Cup Large",
        imgUrls: "lena_cup_large",
        size: "Large",
        size_eng: "Large",
        color: [
            { name: "pink", code: "#ff9ba5" },
            { name: "purple", code: "#9793e8" },
            { name: "turquoise", code: "#a5e1e0" }
        ],
        officialsite: "https://lenacup.com/",
        country: "미국",
        country_eng: "usa",
        price: "$24.90",
        externalDiameter: 45,
        totalLength: 70.4,
        bodyLength: 50.7,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 19.7,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 12,
        name: "플뢰르컵 S",
        name_eng: "Fleur Cup Small",
        imgUrls: "fleur_cup_small",
        size: "Small",
        size_eng: "Small",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://Fleurcup.com",
        country: "프랑스",
        country_eng: "france",
        price: "€19.99",
        externalDiameter: 41,
        totalLength: 70,
        bodyLength: 47,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 23,
        material: "실리콘",
        totalCapacity: 20,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 13,
        name: "플뢰르컵 L",
        name_eng: "Fleur Cup Large",
        imgUrls: "fleur_cup_large",
        size: "Large",
        size_eng: "Large",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://Fleurcup.com",
        country: "프랑스",
        country_eng: "france",
        price: "€19.99",
        externalDiameter: 46,
        totalLength: 70,
        bodyLength: 52,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 18,
        material: "실리콘",
        totalCapacity: 29,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 14,
        name: "루넷컵 1",
        name_eng: "Lunette Cup 1",
        imgUrls: "lunette_cup_1",
        size: 1,
        size_eng: 1,
        color: [
            { name: "clear", code: "#fff" },
            { name: "aine", code: "#ed662b" },
            { name: "cynthia", code: "#c92fac" },
            { name: "lucia", code: "#ffec00" },
            { name: "selene", code: "#6ca1ff" }
        ],
        officialsite: "https://www.lunette.com/",
        country: "핀란드",
        country_eng: "finland",
        price: "31.90€",
        externalDiameter: 41,
        totalLength: 72,
        bodyLength: 47,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 25,
        material: "실리콘",
        totalCapacity: 25,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 15,
        name: "루넷컵 2",
        name_eng: "Lunette Cup 2",
        imgUrls: "lunette_cup_2",
        size: 2,
        size_eng: 2,
        color: [
            { name: "clear", code: "#fff" },
            { name: "aine", code: "#ed662b" },
            { name: "cynthia", code: "#c92fac" },
            { name: "lucia", code: "#ffec00" },
            { name: "selene", code: "#6ca1ff" }
        ],
        officialsite: "https://www.lunette.com/",
        country: "핀란드",
        country_eng: "finland",
        price: "31.90€",
        externalDiameter: 46,
        totalLength: 72,
        bodyLength: 52,
        topToHole: "-",
        stemType: {
            name: '납작한 기둥 모양',
            name_eng: 'Solid Flat',
            isNonslip: true
        },
        stemLength: 20,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 16,
        name: "릴리컵 A",
        name_eng: "Lily Cup A",
        imgUrls: "lily_cup_a",
        size: "A",
        size_eng: "A",
        color: [
            { name: "pink", code: "#ffbdd4" }
        ],
        officialsite: "http://www.intimina.com/en/lily_cup_pd.php",
        country: "스웨덴",
        country_eng: "sweden",
        price: "$39.95",
        externalDiameter: 40,
        totalLength: 78,
        bodyLength: 66,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 12,
        material: "실리콘",
        totalCapacity: 28,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 17,
        name: "릴리컵 B",
        name_eng: "Lily Cup B",
        imgUrls: "lily_cup_b",
        size: "B",
        size_eng: "B",
        color: [
            { name: "hotpink", code: "#ffbde3" }
        ],
        officialsite: "http://www.intimina.com/en/lily_cup_pd.php",
        country: "스웨덴",
        country_eng: "sweden",
        price: "$39.95",
        externalDiameter: 43.5,
        totalLength: 78,
        bodyLength: 66,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 12,
        material: "실리콘",
        totalCapacity: 32,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 18,
        name: "릴리컵 컴팩트 A",
        name_eng: "Lily Cup Compact A",
        imgUrls: "lily_cup_compact_a",
        size: "A",
        size_eng: "A",
        color: [
            { name: "pink", code: "#ffbdd4" }
        ],
        officialsite: "https://www.intimina.com/en/lily_cup_pd.php",
        country: "스웨덴",
        country_eng: "sweden",
        price: "$39.95",
        externalDiameter: 42,
        totalLength: 58,
        bodyLength: 47.5,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 10.5,
        material: "실리콘",
        totalCapacity: 18,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 19,
        name: "릴리컵 컴팩트 B",
        name_eng: "Lily Cup Compact B",
        imgUrls: "lily_cup_compact_b",
        size: "B",
        size_eng: "B",
        color: [
            { name: "hotpink", code: "#ffbde3" }
        ],
        officialsite: "https://www.intimina.com/en/lily_cup_pd.php",
        country: "스웨덴",
        country_eng: "sweden",
        price: "$39.95",
        externalDiameter: 45,
        totalLength: 58,
        bodyLength: 47.5,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 10.5,
        material: "실리콘",
        totalCapacity: 23,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 20,
        name: "유키컵 소프트 스몰",
        name_eng: "Yuuki Soft Small",
        imgUrls: "yuuki_cup_soft_small",
        size: "소프트 스몰",
        size_eng: "Soft Small",
        color: [
            { name: "clear", code: "#fff" },
            { name: "rainbow", code: "#fcd9ff" }
        ],
        officialsite: "https://www.yuuki.cz/",
        country: "체코",
        country_eng: "czechrepublic",
        price: "€19.90",
        externalDiameter: 42,
        totalLength: 67,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 17,
        material: "실리콘",
        totalCapacity: 24,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 21,
        name: "유키컵 클래식 스몰",
        name_eng: "Yuuki Classic Small",
        imgUrls: "yuuki_cup_classic_small",
        size: "클래식 스몰",
        size_eng: "Classic Small",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.yuuki.cz/",
        country: "체코",
        country_eng: "czechrepublic",
        price: "€19.90",
        externalDiameter: 42,
        totalLength: 67,
        bodyLength: 50,
        topToHole: "-",
         stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 17,
        material: "실리콘",
        totalCapacity: 24,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 22,
        name: "유키컵 소프트 라지",
        name_eng: "Yuuki Soft Large",
        imgUrls: "yuuki_cup_soft_large",
        size: "소프트 라지",
        size_eng: "Soft Large",
        color: [
            { name: "clear", code: "#fff" },
            { name: "rainbow", code: "#fcd9ff" }
        ],
        officialsite: "https://www.yuuki.cz/",
        country: "체코",
        country_eng: "czechrepublic",
        price: "€19.90",
        externalDiameter: 47,
        totalLength: 75,
        bodyLength: 57,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 18,
        material: "실리콘",
        totalCapacity: 37,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 23,
        name: "유키컵 클래식 라지",
        name_eng: "Yuuki Classic L",
        imgUrls: "yuuki_cup_classic_large",
        size: "클래식 라지",
        size_eng: "Classic Large",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.yuuki.cz/",
        country: "체코",
        country_eng: "czechrepublic",
        price: "€19.90",
        externalDiameter: 47,
        totalLength: 75,
        bodyLength: 57,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 18,
        material: "실리콘",
        totalCapacity: 37,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 24,
        name: "문컵UK A",
        name_eng: "Mooncup UK A",
        imgUrls: "moon_cup_uk_a",
        size: "A",
        size_eng: "A",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.mooncup.co.uk/",
        country: "영국",
        country_eng: "uk",
        price: "€25.99",
        externalDiameter: 46,
        totalLength: 71,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 21,
        material: "실리콘",
        totalCapacity: 29.3,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 25,
        name: "문컵UK B",
        name_eng: "Mooncup UK B",
        imgUrls: "moon_cup_uk_b",
        size: "B",
        size_eng: "B",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.mooncup.co.uk/",
        country: "영국",
        country_eng: "uk",
        price: "€25.99",
        externalDiameter: 43,
        totalLength: 71,
        bodyLength: 50,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Round',
            isNonslip: true
        },
        stemLength: 21,
        material: "실리콘",
        totalCapacity: 28.8,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 26,
        name: "디바컵 1",
        name_eng: "DivaCup 1",
        imgUrls: "diva_cup_1",
        size: 1,
        size_eng: 1,
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.divacup.com",
        country: "캐나다",
        country_eng: "canada",
        price: "$24.95",
        externalDiameter: 43,
        totalLength: 70,
        bodyLength: 53,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 17,
        material: "실리콘",
        totalCapacity: 20,
        airholeCapacity: "-",
        airholeType: "-"
    },

    {
        id: 27,
        name: "디바컵 2",
        name_eng: "DivaCup 2",
        imgUrls: "diva_cup_2",
        size: 2,
        size_eng: 2,
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://www.divacup.com",
        country: "캐나다",
        country_eng: "canada",
        price: "$27.38",
        externalDiameter: 46,
        totalLength: 70,
        bodyLength: 57,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: true
        },
        stemLength: 13,
        material: "실리콘",
        totalCapacity: 30,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 28,
        name: "키퍼 A",
        name_eng: "Keeper A",
        imgUrls: "keeper_a",
        size: "A",
        size_eng: "A",
        color: [
            { name: "rubber", code: "#935141" }
        ],
        officialsite: "https://keeper.com/",
        country: "미국",
        country_eng: "usa",
        price: "$35.00",
        externalDiameter: 46,
        totalLength: 79,
        bodyLength: 54,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: false
        },
        stemLength: 25,
        material: "천연고무(라텍스)",
        totalCapacity: 25,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 29,
        name: "키퍼 B",
        name_eng: "Keeper B",
        imgUrls: "keeper_b",
        size: "B",
        size_eng: "B",
        color: [
            { name: "rubber", code: "#935141" }
        ],
        officialsite: "https://keeper.com/",
        country: "미국",
        country_eng: "usa",
        price: "$35.00",
        externalDiameter: 45,
        totalLength: 79,
        bodyLength: 54,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: false
        },
        stemLength: 25,
        material: "천연고무(라텍스)",
        totalCapacity: 21,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 30,
        name: "더 문컵 A",
        name_eng: "The Moon Cup A",
        imgUrls: "the_moon_cup_a",
        size: "A",
        size_eng: "A",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://keeper.com/",
        country: "미국",
        country_eng: "usa",
        price: "$35.00",
        externalDiameter: 45,
        totalLength: 79,
        bodyLength: 54,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: false
        },
        stemLength: 25,
        material: "실리콘",
        totalCapacity: 25,
        airholeCapacity: "-",
        airholeType: "-"
    },
    {
        id: 31,
        name: "더 문컵 B",
        name_eng: "The Moon Cup B",
        imgUrls: "the_moon_cup_b",
        size: "B",
        size_eng: "B",
        color: [
            { name: "clear", code: "#fff" }
        ],
        officialsite: "https://keeper.com/",
        country: "미국",
        country_eng: "usa",
        price: "$35.00",
        externalDiameter: 45,
        totalLength: 79,
        bodyLength: 54,
        topToHole: "-",
        stemType: {
            name: '속이 빈 기둥 모양',
            name_eng: 'Hollow Tube',
            isNonslip: false
        },
        stemLength: 25,
        material: "실리콘",
        totalCapacity: 21,
        airholeCapacity: "-",
        airholeType: "-"
    }
];
