
function Sculpture (title,year,size,material) {
    this.title= title;
    this.year = year;
    this.size = size;
    this.material = material;
}

let sculpture1 = new Sculpture("Ascent","2017","76*32*16cm","plastic, steel, acrilic");
let sculpture2 = new Sculpture("Seascape","2017","70*26*4cm","plastic, steel, acrilic");


let sculptures =[];

sculptures.push(sculpture1);
sculptures.push(sculpture2);
