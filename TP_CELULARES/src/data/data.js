export const marcas = [
  { id: 1, nombre: 'Apple' },
  { id: 2, nombre: 'Samsung' },
  { id: 3, nombre: 'Xiaomi' },
  { id: 4, nombre: 'Motorola' }
];

export const celulares = [

  {
    id: 1,
    nombre: 'iPhone 15 Pro',
    descripcion: 'Pantalla Super Retina XDR, chip A17 Pro, cámara de 48 MP',
    precio: 1399,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096',
      'https://tienda.personal.com.ar/images/320/webp/i_Phone_15_Pro_Max_256_GB_Black_Titanium_10c02db62e.png',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009280648'
    ]
  },
  {
    id: 2,
    nombre: 'iPhone 14',
    descripcion: 'Pantalla Super Retina XDR, chip A15 Bionic, excelente rendimiento',
    precio: 999,
    marcaId: 1,
    fotos: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027204753',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205288',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205804'
    ]
  },
  {
    id: 3,
    nombre: 'iPhone SE (3ra gen)',
    descripcion: 'Diseño compacto con chip A15 Bionic',
    precio: 599,
    marcaId: 1,
    fotos: [
      'https://touchunwired.com/wp-content/uploads/2020/04/iphone_se-266x300-2.png',
      'https://media.croma.com/image/upload/v1708664203/Croma%20Assets/Communication/Mobiles/Images/262529_5_bhjgjl.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zDsUJN3Ggsgr3rKmO_EdAqRP9DKukVuIlA&s'
    ]
  },
  {
    id: 4,
    nombre: 'iPhone 13 mini',
    descripcion: 'Pantalla Super Retina XDR, chip A15 Bionic, tamaño compacto',
    precio: 799,
    marcaId: 1,
    fotos: [
      'https://www.att.com/es-us/scmsassets/global/devices/phones/apple/apple-iphone-13-mini/carousel/product(red)/6150D-2.png',
      'https://segurocelular.com.ar/wp-content/uploads/2022/02/seguro-iphone-13-rosa-min.png',
      'https://acdn-us.mitiendanube.com/stores/005/852/619/products/starlight_2-8ca1ca44780fd5d6df17418981881809-1024-1024.png'
    ]
  },


  {
    id: 5,
    nombre: 'Samsung Galaxy S23 Ultra',
    descripcion: 'Pantalla Dynamic AMOLED 2X, cámara de 200MP',
    precio: 1499,
    marcaId: 2,
    fotos: [
      'https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s23_ultra_black_frente_2_4.png',
      'https://dcdn.mitiendanube.com/stores/003/582/363/products/1-2db93da4150116741917080138785665-1024-1024.png',
      'https://media.power-cdn.net/images/h-cf8543c7203d327694efdbd29accb60e/products/1898451/1898451_24_600x600_t_g.webp'
    ]
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Z Flip5',
    descripcion: 'Diseño plegable, pantalla AMOLED, resistente',
    precio: 1299,
    marcaId: 2,
    fotos: [
      'https://images.samsung.com/is/image/samsung/assets/mx-faq-23-6/mx-faq-23-8-2/Hero.png?$ORIGIN_PNG$',
      'https://pardohogar.vtexassets.com/arquivos/ids/199928/Celular-Samsung-Galaxy-Z-Flip5-256GB-Cream-1.png?v=638579473239230000',
      'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-Z-Flip5/Graphite/Samsung-Galaxy-Z-Flip5-Graphite-rightimage.png'
    ]
  },
  {
    id: 7,
    nombre: 'Samsung Galaxy A54',
    descripcion: 'Pantalla Super AMOLED, cámara triple, excelente relación calidad-precio',
    precio: 499,
    marcaId: 2,
    fotos: [
      'https://tiendaonline.movistar.com.ar/media/catalog/product/s/a/samsung_a54_graphite_front_2_1_4_1_1.png',
      'https://samsungar.vtexassets.com/arquivos/ids/205847/Samsung-120127461-ar-galaxy-a54-5g-sm-a546-455651-sm-a546ezkfaro-536287468--Download-Source-.png?v=638815473988030000',
      'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/GALAXY_A54_5G_5K4_jpg.png'
    ]
  },
  {
    id: 8,
    nombre: 'Samsung Galaxy S21 FE',
    descripcion: 'Pantalla AMOLED 120Hz, cámara triple, diseño premium',
    precio: 699,
    marcaId: 2,
    fotos: [
      'https://riiing.com.ar/wp-content/uploads/2023/06/Samsung-S21-FE-1-1024x1024.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryCHWclio2aU9-ntuw-AqzgT0OtHMaVdpsQ&s',
      'https://www.datasoft.com.ar/Image/0/750_750-024081_04.png'
    ]
  },


  {
    id: 9,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara Leica, carga rápida 120W',
    precio: 1199,
    marcaId: 3,
    fotos: [
      'https://www.megatone.net/images/Articulos/zoom2x/209/MKT0502MHM-1.png',
      'https://acdn-us.mitiendanube.com/stores/001/531/943/products/hff64a44d773b43969185dc3f1e9f5cf1x_jpg_960x960_jpg_d971a722-3c3d-4c5f-bc5d-456e74937256_500x-23b76222e0a3a0caef16980778581235-1024-1024.png',
      'https://www.cordobadigital.net/wp-content/uploads/2024/01/Redmi-note-13-pro.png'
    ]
  },
  {
    id: 10,
    nombre: 'Xiaomi Redmi Note 12 Pro+',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 200MP, carga rápida 120W',
    precio: 499,
    marcaId: 3,
    fotos: [
      'https://storage.comprasmartphone.com/smartphones/xiaomi-redmi-note-12-pro-plus-5g.png',
      'https://i02.appmifile.com/314_operator_sg/06/03/2023/d81fc48c3f1b7e078512e7e574abe146.png',
      'https://d3ekkp2oigezer.cloudfront.net/business/531/products/pPZbme_6738865fea197_medium.png'
    ]
  },
  {
    id: 11,
    nombre: 'Xiaomi 12T Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 200MP, Snapdragon 8+ Gen 1',
    precio: 899,
    marcaId: 3,
    fotos: [
      'https://i02.appmifile.com/mi-com-product/fly-birds/m/xiaomi-12t-pro-daniel-arsham-edition/714ad7824f3e16deebcdd3718bc5cf27.png',
      'https://celularessf.com/wp-content/uploads/2022/10/Sin-titulo-2.png',
      'https://storage.comprasmartphone.com/smartphones/xiaomi-12t-pro.png'
    ]
  },
  {
    id: 12,
    nombre: 'Xiaomi Poco X5 Pro',
    descripcion: 'Pantalla AMOLED 120Hz, cámara de 108MP, Snapdragon 778G',
    precio: 399,
    marcaId: 3,
    fotos: [
      'https://i0.wp.com/mstore.ie/wp-content/uploads/2023/05/POCO-X5-Pro-5G-blue.png?fit=1600%2C1600&ssl=1',
      'https://www.tupi.com.py/imagen/600__600__6b0182-95264_2.png',
      'https://wsg.izenecdn.com/media/catalog/product/cache/84efb3eb3fce34f31ba40f0e6c53143e/_/_/__16863130593972.png'
    ]
  },


  {
    id: 13,
    nombre: 'Motorola Edge 40 Pro',
    descripcion: 'Pantalla pOLED 165Hz, Snapdragon 8 Gen 2, carga rápida 125W',
    precio: 999,
    marcaId: 4,
    fotos: [
      'https://cdn.v2.tiendanegocio.com/gallery/24228/img_24228_1919a7ab743.png',
      'https://storage.comprasmartphone.com/smartphones/motorola-edge-40-pro.png',
      'https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/m/o/moto-edge-40-pro-negrocuarzo-front.png'
    ]
  },
  {
    id: 14,
    nombre: 'Motorola Edge 30 Ultra',
    descripcion: 'Pantalla OLED 144Hz, cámara de 200MP, Snapdragon 8+ Gen 1',
    precio: 899,
    marcaId: 4,
    fotos: [
      'https://mancihogar.com.ar/wp-content/uploads/2023/04/moto-30ultra-1.png',
      'https://tiendaonline.movistar.com.ar/media/catalog/product/e/d/edge30-negro-frente_3.png',
      'https://storage.comprasmartphone.com/smartphones/motorola-edge-30-ultra.png'
    ]
  },
  {
    id: 15,
    nombre: 'Motorola G82',
    descripcion: 'Pantalla OLED 120Hz, cámara de 50MP, diseño delgado',
    precio: 399,
    marcaId: 4,
    fotos: [
      'https://i.blogs.es/d18e60/motopivot/original.png',
      'https://cdn.prod.website-files.com/632e1b3fb161a903129c733e/67337aeecf124475a5b695b8_156836-1200-auto.png',
      'https://acdn-us.mitiendanube.com/stores/001/145/546/products/celulares-tienda-0730dd7c9039b5bfaa17454111068372-1024-1024.png'
    ]
  },
  {
    id: 16,
    nombre: 'Motorola Edge 20 Pro',
    descripcion: 'Pantalla OLED 144Hz, cámara de 108MP, diseño premium',
    precio: 599,
    marcaId: 4,
    fotos: [
      'https://motorolamy.vtexassets.com/assets/vtex.file-manager-graphql/images/bfa4675c-b075-46da-a4a4-453f1ec8ff23___fcc129bdf0615b2cf67235a4611e9336.png',
      'https://clevercel.mx/cdn/shop/files/Moto_edge20Pro_Portada.webp?v=1750944770',
      'https://tiendaonline.movistar.com.ar/media/catalog/product/2/0/2021_sierra_basicpack_thunderblack_frontside_3_1_1_2.png'
    ]
  }
];