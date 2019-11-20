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


photographyGallery.push(new GalleryItem("Angelica","Angelica-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Hymne","Hymne-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Doulce memoire","Doulce memoire.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Cantate I","Cantate1.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Cantate II","Cantate2.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Cantate III","Cantate3.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Cantate IV","Cantate4.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Untitled","Untitled-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Respiro I","Respiro1-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Respiro II","Respiro2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Matins","Matins-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Nadi","Nadi-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Reminiscence","Reminiscence.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Nocturne II","Nocturne2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Nocturne III","Nocturne3-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Inspira","Inspira-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Shrine","Shrine.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Zanshin","Zanshin-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Untitled","Untitled2.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Sussurri notturni I","Sussurri notturni1-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Sussurri notturni II","Sussurri notturni2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Touching the night II","Touching the night2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Soffio II","Soffio2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Soffio III","Soffio3-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Samurai","Samurai-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Untitled","Untitled3.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Resurgo","Resurgo-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Lingam","Lingam-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Ruscello","Ruscello-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Sufi signature II","Sufi signature2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Tabernacle","Tabernacle-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Sushumna I","Sushumna1-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Sushumna II","Sushumna2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Unisono I","Unisono1-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Ambergris I","Ambergris1-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Ambergris III","Ambergris3-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Panta rhei II","Panta rhei2-v.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Night bloom I","Night bloom1.jpg","2016-18","","","","","",""));
photographyGallery.push(new GalleryItem("Night bloom III","Night bloom3-v.jpg","2016-18","","","","","",""));




//Sculpture Items
sculptureGallery.push(new GalleryItem("Kujira","Kujira.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("Kujira","Kujira2.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("Kujira","Kujira3-v.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("Kujira","Kujira4.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));
sculptureGallery.push(new GalleryItem("Kujira","Kujira5.jpg","2019","315x70x63 cm","Fibreglass resin (FBR)","Park Tower Harumi Tokyo","",""));


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

sculptureGallery.push(new GalleryItem("Shelter","Shelter.jpg","2005","133x29x10 cm","paper, wire","","",""));
sculptureGallery.push(new GalleryItem("Breath","Breath.jpg","2005","148x22x12 cm","paper, wire","","",""));
sculptureGallery.push(new GalleryItem("Dance","Dance-v.jpg","2001","186x94x60 cm","Fibreglass resin (FRP), wire","","",""));
sculptureGallery.push(new GalleryItem("Mercedes","Mercedes-v.jpg","2001","152x92x62 cm","Fibreglass resin (FRP), wire","","",""));
sculptureGallery.push(new GalleryItem("Flower","Flower-v.jpg","2001","205x92x62 cm","Fibreglass resin (FRP), wire","","",""));
sculptureGallery.push(new GalleryItem("Dress","Dress-v.jpg","2000","238x228x125 cm","Fibreglass resin (FRP)","(Homage to Carlo Mollino) ","",""));
sculptureGallery.push(new GalleryItem("Twin","Twin-v.jpg","1999","200x40x18 cm","Fibreglass resin (FRP)","","",""));
sculptureGallery.push(new GalleryItem("Canopy","Canopy-v.jpg","1998","282x162x184 cm","Fibreglass resin (FRP)","","",""));
sculptureGallery.push(new GalleryItem("Lamp","Lamp-v.jpg","1998","200x39x35 cm","Wood, paper, light bulbs","","",""));

