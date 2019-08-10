function GalleryItem(title, img,year,size,material) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g, "");
    this.year = year;
    this.size = size;
    this.material = material;
}

let lightBoxGallery = [];
let photographyGallery = [];
let sculptureGallery = [];


lightBoxGallery.push(new GalleryItem("Sarabande", "Sarabande.jpg","2017-18","63x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Shakti", "Shakti.jpg","2017-18","63x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Monkoh", "Monkoh.jpg","2017-18","73x53 cm","plexiglass,LED"));
lightBoxGallery.push(new GalleryItem("Twilight", "Twilight.jpg","2017-18","73x53 cm","plexiglass,LED"));


photographyGallery.push(new GalleryItem("3236L","3236L.jpg","Archival pigment","print on cotton paper",""));
photographyGallery.push(new GalleryItem("3235B","3235B.jpg","Archival pigment","print on cotton paper","",""));
photographyGallery.push(new GalleryItem("3313B","3313B.jpg","Archival pigment","print on cotton paper","",""));
photographyGallery.push(new GalleryItem("3179L","3179L.jpg","Archival pigment","print on cotton paper","",""));

sculptureGallery.push(new GalleryItem("Ascent","Ascent.jpg","2017","76x32x16 cm","plastic,steel wire,acrylic"));
sculptureGallery.push(new GalleryItem("Seascape","Seascape.jpg","2017","70x26x4 cm","plastic,steel wire,acrylic"));
sculptureGallery.push(new GalleryItem("Cadence on the wind","Cadence.jpg","2009","100x60x32 cm","FRP,acrylic"));
sculptureGallery.push(new GalleryItem("Cadence on the wind","Cadence2.jpg","2009","100x60x32 cm","FRP,acrylic"));
sculptureGallery.push(new GalleryItem("Ryuu 2006","Ryuu.jpg","Kyushu Dental College, Kita Kyushu Japan","900x312x165 cm","Fibreglass resin (FRP)"));
sculptureGallery.push(new GalleryItem("Ryuu 2006","Ryuu2.jpg","Kyushu Dental College, Kita Kyushu Japan","900x312x165 cm","Fibreglass resin (FRP)"));
sculptureGallery.push(new GalleryItem("Ryuu 2006","Ryuu3.jpg","Kyushu Dental College, Kita Kyushu Japan","900x312x165 cm","Fibreglass resin (FRP)"));
sculptureGallery.push(new GalleryItem("Ryuu 2006","Ryuu4.jpg","Kyushu Dental College, Kita Kyushu Japan","900x312x165 cm","Fibreglass resin (FRP)"));
sculptureGallery.push(new GalleryItem("Ryuu 2006","Ryuu4.jpg","Kyushu Dental College, Kita Kyushu Japan","900x312x165 cm","Fibreglass resin (FRP)"));
