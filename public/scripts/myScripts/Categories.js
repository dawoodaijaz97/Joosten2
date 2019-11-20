function Categories(title, img) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g, "");
}

let categories = [];


categories.push(new Categories("Photography", "PhotographyV.jpg"));
categories.push(new Categories("Light works", "LightBoxV.jpg"));
categories.push(new Categories("Sculpture", "SculptureV.jpg"));
categories.push(new Categories("Scent architecture", "ARDV.jpg"));