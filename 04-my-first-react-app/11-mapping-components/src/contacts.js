import { getParsedCommandLineOfConfigFile } from "typescript";

const contacts = [
  {
    id:"1",
    name: "Jim Carrey",
   imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU",
   phone: "+123 456 789",
   email: "j@carrey.com" 
  },
  {
    id:"2",
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    id:"3",
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  },
  {
    id:"4",
    imgURL:"https://media.wfaa.com/assets/WFAA/images/6ccb7e54-8529-4c8f-98f8-5a9ce6592482/6ccb7e54-8529-4c8f-98f8-5a9ce6592482_1920x1080.jpg",
    name:"Los Angales",
    phone:"21043434",
    email:"la@gmail.com"
  }
];
export default contacts;
