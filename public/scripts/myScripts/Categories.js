
function Categories(title, img) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g,"");
}

let categories  = [];


categories.push(new Categories("Sculptures","Ascent.jpg"));
categories.push(new Categories("Photography","Photography.jpg"));
categories.push(new Categories("Olfactory Space Design","ARD.jpg"));
categories.push(new Categories("Drawings","drawing.jpg"));
categories.push(new Categories("LightBox","LightBox.jpg"));



