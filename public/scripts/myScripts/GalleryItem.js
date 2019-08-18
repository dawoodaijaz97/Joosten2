function GalleryItem(title, img,year,size,material,area,country,area2) {
    this.title = title;
    this.img = img;
    this.title2 = title.replace(/\s+/g, "");
    this.year = year;
    this.size = size;
    this.material = material;
    this.country = country;
    this.area = area;
    this.area2 = area2
}

let lightBoxGallery = [];
let photographyGallery = [];
let sculptureGallery = [];


lightBoxGallery.push(new GalleryItem("Sarabande", "Sarabande.jpg","2017-18","63x53 cm","plexiglass,LED","","",""));
lightBoxGallery.push(new GalleryItem("Shakti", "Shakti.jpg","2017-18","63x53 cm","plexiglass,LED","","",""));
lightBoxGallery.push(new GalleryItem("Monkoh", "Monkoh.jpg","2017-18","73x53 cm","plexiglass,LED","","",""));
lightBoxGallery.push(new GalleryItem("Twilight", "Twilight.jpg","2017-18","73x53 cm","plexiglass,LED","","",""));


photographyGallery.push(new GalleryItem("3236L","3236L-v.jpg","","print on cotton paper","Archival pigment","","","",""));
photographyGallery.push(new GalleryItem("3235B","3235B.jpg","","print on cotton paper","Archival pigment","","","",""));
photographyGallery.push(new GalleryItem("3313B","3313B.jpg","","print on cotton paper","Archival pigment","","","",""));
photographyGallery.push(new GalleryItem("3179L","3179L-v.jpg","","print on cotton paper","Archival pigment","","","",""));


//Sculpture Items
sculptureGallery.push(new GalleryItem("kujira","Kujira.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("kujira","Kujira2.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("kujira","Kujira3-v.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("kujira","Kujira4.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("kujira","Kujira5.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));

sculptureGallery.push(new GalleryItem("Ascent","Ascent-v.jpg","2017","76x32x16 cm","plastic,steel wire,acrylic","","",""));
sculptureGallery.push(new GalleryItem("Seascape","Seascape.jpg","2017","70x26x4 cm","plastic,steel wire,acrylic","","",""));
sculptureGallery.push(new GalleryItem("Cadence on the wind","Cadence-v.jpg","2009","100x60x32 cm","FRP,acrylic","","",""));
sculptureGallery.push(new GalleryItem("Cadence on the wind","Cadence2-v.jpg","2009","100x60x32 cm","FRP,acrylic","","",""));

sculptureGallery.push(new GalleryItem("Ryuu","Ryuu-v.jpg","2006","900x312x165 cm","Fibreglass resin (FRP)","Kyushu Dental College","","Kita Kyushu Japan"));
sculptureGallery.push(new GalleryItem("Ryuu","Ryuu2-v.jpg","2006","900x312x165 cm","Fibreglass resin (FRP)","Kyushu Dental College","","Kita Kyushu Japan"));
sculptureGallery.push(new GalleryItem("Ryuu","Ryuu3.jpg","2006","900x312x165 cm","Fibreglass resin (FRP)","Kyushu Dental College","","Kita Kyushu Japan"));
sculptureGallery.push(new GalleryItem("Ryuu","Ryuu4-v.jpg","2006","900x312x165 cm","Fibreglass resin (FRP)","Kyushu Dental College","","Kita Kyushu Japan"));

sculptureGallery.push(new GalleryItem("Wake","wake.jpg","2008","280x50x30 cm","Fibreglass resin (FRP)","Boardroom WingTaiAsia Holding","Singapore",""));
sculptureGallery.push(new GalleryItem("Wake","wake2.jpg","2008","280x50x30 cm","Fibreglass resin (FRP)","Boardroom WingTaiAsia Holding","Singapore",""));

sculptureGallery.push(new GalleryItem("Scent of dawn","Dawn.jpg","2006","300x65x42 cm","Fibreglass resin (FRP)","Residential building","Osaki, Tokyo","Oskai Art Village Project"));
sculptureGallery.push(new GalleryItem("Scent of dawn","Dawn2-v.jpg","2006","300x65x42 cm","Fibreglass resin (FRP)","Residential building","Osaki, Tokyo","Oskai Art Village Project"));

sculptureGallery.push(new GalleryItem("Door to the sky","Door.jpg","2005","180x42x38 cm","Paper mache, wire","","",""));


sculptureGallery.push(new GalleryItem("Transient Sea","Transient-v.jpg","2003","488x256x108 cm","Fibreglass resin (FRP)","Panasonic","Shiodome, Tokyo","(Matsushita Electric Works Ltd)"));
sculptureGallery.push(new GalleryItem("Transient Sea","Transient2-v.jpg","2003","488x256x108 cm","Fibreglass resin (FRP)","Panasonic","Shiodome, Tokyo","(Matsushita Electric Works Ltd)"));
sculptureGallery.push(new GalleryItem("Transient Sea","Transient3-v.jpg","2003","488x256x108 cm","Fibreglass resin (FRP)","Panasonic","Shiodome, Tokyo","(Matsushita Electric Works Ltd)"));
sculptureGallery.push(new GalleryItem("Transient Sea","Transient4-v.jpg","2003","488x256x108 cm","Fibreglass resin (FRP)","Panasonic","Shiodome, Tokyo","(Matsushita Electric Works Ltd)"));

sculptureGallery.push(new GalleryItem("Pantha rei","Pantha.jpg","2003","348x76x50 cm","Fibreglass resin (FRP)","Panasonic","Tokyo","(Matsushita Electric Works Ltd)"));

