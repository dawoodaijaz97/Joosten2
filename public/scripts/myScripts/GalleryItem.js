function GalleryItem(title, img,year,size,material) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g, "");
    this.year = year;
    this.size = size;
    this.material = material;
}

let lightBoxGallery = [];


lightBoxGallery.push(new GalleryItem("Monkoh", "Monkoh.jpg","2017-18","73x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Twilight", "Twilight.jpg","2017-18","73x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Sarabande", "Sarabande.jpg","2017-18","63x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Shakti", "Shakti.jpg","2017-18","63x53 cm","plexiglass,LED"));