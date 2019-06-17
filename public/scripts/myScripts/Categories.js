function Categories(title, img) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g, "");
}

let categories = [];


categories.push(new Categories("Sculpture", "Sculpture.jpg"));
categories.push(new Categories("Photography", "Photography.jpg"));
categories.push(new Categories("Light box", "LightBox.jpg"));
categories.push(new Categories("Drawing", "Drawing.jpg"));
categories.push(new Categories("Olfactory space design", "ARD.jpg"));
categories.push(new Categories("mode", "ARD.jpg"));