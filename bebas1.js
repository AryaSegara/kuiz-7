import{name} from "./bebas.js";

const bebas = (panggil) =>{
    panggil.nama.forEach((value,index) =>{
        console.log(`Nama : ${value}`);
        console.log(`NIm  : ${panggil.nim[index]}\n`);
    });
}
bebas(name);