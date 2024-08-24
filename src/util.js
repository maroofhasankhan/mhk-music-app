import{v4 as uuidv4} from "uuid";

function chillHop(){
    return[
        {
            name:"Shade",
            audio:"https://stream.chillhop.com/mp3/74455",
            artist:"Mac Kay",
            cover:"https://cms.chillhop.com/media/74700/square34fa3486c3dd84ca47418858778a8202f7aba3b2.jpg",
            color:["#C68650","#DCB76B"],
            id:uuidv4(),
            active:true
        },
        {
            name:"Spirals",
            audio:"https://stream.chillhop.com/mp3/75139",
            artist:"Enough Cereals",
            cover:"https://cms.chillhop.com/media/77074/squarelc1284a87fb0e47c518ccaec1df4f732a2f50230f.jpg",
            color:["#232030","#FA797B"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Kauai",
            audio:"https://stream.chillhop.com/mp3/74258",
            artist:"Loyae",
            cover:"https://cms.chillhop.com/media/75411/squarelc0ed595aa9c8193aa208a3ee990bd332e89cda8a.jpg",
            color:["#516024","#A1D9DC"],
            id:uuidv4(),
            active:false
        }
    ]
}


export default chillHop;