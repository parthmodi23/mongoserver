const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

// Sample data with the new entries categorized
const data = [
//   {
//     "id":20000,
//   "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/4cd6690ef44564f3.jpg?q=50"
// },
// {"id":20001,
//   "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/463395d3de52d030.png?q=50"
// },
// {"id":20002,
//   "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/844/140/image/d3c33da936d92e8e.jpg?q=50"
// },
// {"id":20003,
//   "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/8f3a227f1526cba9.jpg?q=50"
// },
// {"id":20004,
//   "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/4cd6690ef44564f3.jpg?q=50"
// },
  {
    "product_id": 1,
    "product_name": "Nike Air Max 97",
    "category": "shoes",
    "target_gender": "man",
    "description": "The Nike Air Max 97 is a classic running shoe that has been re-released in a variety of colors and styles. It features a comfortable Air Max cushioning system and a sleek, minimalist design.",
    "price": 120.00,
    "stock": 100,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/xz10qxggewfcr0u1hkhw/air-max-97-shoes-EBZrb8.png",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for running and everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 2,
    "product_name": "Adidas Ultraboost 22",
    "category": "shoes",
    "target_gender": "man",
    "description": "The Adidas Ultraboost 22 is a running shoe that features a comfortable Boost cushioning system and a Primeknit upper. It's designed to provide support and energy return for long-distance runs.",
    "price": 180.00,
    "stock": 50,
    "company_name": "Adidas",
    "product_images": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d6ba27577314b70a86aad9100ef305f_9366/Ultraboost_22_Shoes_White_GX5459_06_standard.jpg",
    "reviews": [
      {
        "author": "John Doe",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and supportive. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for long runs and everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 3,
    "product_name": "Puma Suede Classic",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Puma Suede Classic is a classic sneaker that has been around for decades. It features a comfortable suede upper and a rubber sole. It's perfect for everyday wear.",
    "price": 80.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "reviews": [
      {
        "author": "John Doe",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 4,
    "product_name": "Nike Air Max 270",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Nike Air Max 270 is a running shoe that features a comfortable Air Max cushioning system and a React foam midsole. It's designed to provide support and energy return for long-distance runs.",
    "price": 160.00,
    "stock": 50,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-shoes-2V5C4p.png",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and supportive. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for long runs and everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 5,
    "product_name": "Adidas Stan Smith",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Adidas Stan Smith is a classic tennis shoe that has been around for decades. It features a comfortable leather upper and a rubber sole. It's perfect for everyday wear.",
    "price": 80.00,
    "stock": 100,
    "company_name": "Adidas",
    "product_images": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f86168171d2a4644a8eeac1e00f52f85_9366/Stan_Smith_Shoes_White_FX5502_04_standard.jpg",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 6,
    "product_name": "Converse Chuck Taylor All Star",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Converse Chuck Taylor All Star is a classic sneaker that has been around for decades. It features a comfortable canvas upper and a rubber sole. It's perfect for everyday wear.",
    "price": 60.00,
    "stock": 100,
    "company_name": "Converse",
    "product_images": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw678f772b/images/d_08/A04541C_D_08X1.jpg?sw=406",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }]
  },
  {
    "product_id": 7,
    "product_name": "DynaSoft Reveal v4 BOA®",
    "category": "shoes",
    "target_gender": "Kids",
    "description": "The New Balance 574 is a classic running shoe that has been around for decades. It features a comfortable ENCAP midsole and a durable outsole. It's perfect for everyday wear.",
    "price": 100.00,
    "stock": 100,
    "company_name": "New Balance",
    "product_images": "https://nb.scene7.com/is/image/NB/ptrvlfg4_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },

  {
    "product_id": 8,
    "product_name": "Nike Tech Hera",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Puma Suede Classic XXI is a classic sneaker that has been updated with a modern twist. It features a comfortable suede upper and a rubber sole. It's perfect for everyday wear.",
    "price": 80.00,
    "stock": 100,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d98a444e-d21c-415f-9136-938c9e0ee419/tech-hera-shoes-JlV5km.png",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  


  {
    "product_id": 9,
    "product_name": "Vans Old Skool",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Vans Old Skool is a classic skate shoe that has been around for decades. It features a comfortable canvas upper and a vulcanized rubber sole. It's perfect for everyday wear.",
    "price": 70.00,
    "stock": 100,
    "company_name": "Vans",
    "product_images": "https://images.vans.com/is/image/Vans/VN0A4BV5_JV6_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },
  {
    "product_id": 10,
    "product_name": "Apple iPhone 13 Pro",
    "category": "mobile",
    "target_gender": "male",
    "description": "The Apple iPhone 13 Pro is a high-end smartphone that features a powerful A15 Bionic chip, a triple-lens rear camera system, and a Super Retina XDR display.",
    "price": 999.00,
    "stock": 100,
    "company_name": "Apple",
    "product_images": "https://media.karousell.com/media/photos/products/2019/11/03/brand_new_iphone_pro_max_256gb__1800_1572751382_22ac200c_progressive.jpg",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },
  {
    "product_id": 11,
    "product_name": "Samsung Galaxy S22 Ultra",
    "category": "mobile",
    "target_gender": "male",
    "description": "The Samsung Galaxy S22 Ultra is a high-end smartphone that features a powerful Snapdragon 8 Gen 1 chip, a quad-lens rear camera system, and a Dynamic AMOLED 2X display.",
    "price": 1199.00,
    "stock": 100,
    "company_name": "Samsung",
    "product_images":
      "https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg",

    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },

  {
    "product_id": 12,
    "product_name": "Google Pixel 6 Pro",
    "category": "mobile",
    "target_gender": "male",
    "description": "The Google Pixel 6 Pro is a high-end smartphone that features a powerful Tensor chip, a triple-lens rear camera system, and a 6.7-inch OLED display.",
    "price": 899.00,
    "stock": 100,
    "company_name": "Google",
    "product_images": "https://m.media-amazon.com/images/I/41QSABTiY3L._SX300_SY300_QL70_FMwebp_.jpg",

    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },
  {
    "product_id": 13,
    "product_name": "OnePlus 10 Pro",
    "category": "mobile",
    "target_gender": "male",
    "description": "The OnePlus 10 Pro is a high-end smartphone that features a powerful Snapdragon 8 Gen 1 chip, a triple-lens rear camera system, and a Fluid AMOLED 2.0 display.",
    "price": 899.00,
    "stock": 100,
    "company_name": "OnePlus",
    "product_images":
      "https://m.media-amazon.com/images/I/41hbeJ-SaUL._SX300_SY300_QL70_FMwebp_.jpg",

    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },
  {
    "product_id": 14,
    "product_name": "Xiaomi Mi 12 Pro",
    "category": "mobile",
    "target_gender": "male",
    "description": "The Xiaomi Mi 12 Pro is a high-end smartphone that features a powerful Snapdragon 8 Gen 1 chip, a triple-lens rear camera system, and a 6.73-inch AMOLED display.",
    "price": 899.00,
    "stock": 100,
    "company_name": "Xiaomi",
    "product_images":
      "https://m.media-amazon.com/images/I/71xMba-NW-L._SX679_.jpg",

    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },
  {
    "product_id": 15,
    "product_name": "Vivo Y35 ",
    "category": "mobile",
    "target_gender": "male",
    "description": "The Oppo Find X5 Pro is a high-end smartphone that features a powerful Snapdragon 8 Gen 1 chip, a triple-lens rear camera system, and a 6.7-inch LTPO AMOLED display.",
    "price": 899.00,
    "stock": 100,
    "company_name": "Vivo",
    "product_images":
      "https://m.media-amazon.com/images/I/61GA2mAD4KL._SX679_.jpg",

    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This phone is amazing! It's so powerful and the camera is incredible. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this phone! It's perfect for everyday use. It's a little bit on the expensive side, but it's worth it."
      }
    ]
  },
  {
    "product_id": 52,
    "product_name": "The Alchemist",
    "category": "books",
    "description": "The Alchemist is a story about a young shepherd named Santiago who travels from his homeland in Spain to the Egyptian desert in search of treasure buried near the Pyramids. Along the way, he meets a variety of people who teach him about life, love, and the importance of following one's dreams.",
    "price": 19.99,
    "old_price": 24.99,
    "stock": 100,
    "company_name": "HarperCollins",
    "product_images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLnoWERnO4KWohP2iGle_ptOcUT0__LMkpGLYNNdKtl_GWNpVrtOPvEOCPQiLYnQ6mzU&usqp=CAU",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is amazing! It's so inspiring and thought-provoking. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a great story with a lot of wisdom to offer."
      }
    ]
  },
  {
    "product_id": 53,
    "product_name": "To Kill a Mockingbird",
    "category": "books",
    "description": "To Kill a Mockingbird is a novel by Harper Lee that was published in 1960. It won the Pulitzer Prize and was adapted into an Academy Award-winning film in 1962. The novel tells the story of a young girl named Scout who learns about racism and courage from her father, Atticus Finch, a lawyer who defends a black man accused of rape.",
    "price": 15.99,
    "old_price": 19.99,
    "stock": 100,
    "company_name": "HarperCollins",
    "product_images": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is a classic for a reason! It's so well-written and thought-provoking. I highly recommend it."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a powerful story about racism and justice."
      }
    ]
  },
  {
    "product_id": 62,
    "product_name": "The Hitchhiker's Guide to the Galaxy",
    "category": "books",
    "description": "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series created by Douglas Adams. The series follows the adventures of Arthur Dent, a hapless Englishman, following the destruction of the Earth by the Vogons, a race of unpleasant and bureaucratic aliens.",
    "price": 12.99,
    "old_price": 14.99,
    "stock": 100,
    "company_name": "Pan Books",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/book/v/n/a/the-hitchhiker-s-guide-to-the-galaxy-original-imaggm4utu5ytfhc.jpeg?q=70",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is hilarious! It's a must-read for any fan of science fiction or comedy."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's so clever and thought-provoking."
      }
    ]
  },
  {
    "product_id": 63,
    "product_name": "The Lord of the Rings",
    "category": "books",
    "description": "The Lord of the Rings is an epic high fantasy trilogy written by English philologist and University of Oxford professor J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, with much of it being written during World War II, it was originally published in three volumes in 1954 and 1955.",
    "price": 22.99,
    "old_price": 25.99,
    "stock": 100,
    "company_name": "Allen & Unwin",
    "product_images": "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg          ",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is an epic masterpiece! It's one of the greatest fantasy novels ever written."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's an amazing story with unforgettable characters."
      }
    ]
  },
  {
    "product_id": 72,
    "product_name": "The Book Thief",
    "category": "books",
    "description": "The Book Thief is a historical novel by Markus Zusak set in Nazi Germany. The story is narrated by Death, who tells the story of Liesel Meminger, a young girl who is sent to live with foster parents in Molching during World War II. Liesel learns to read and steals books, which she shares with her foster father.",
    "price": 13.99,
    "old_price": 15.99,
    "stock": 100,
    "company_name": "Knopf Books",
    "product_images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-UBAc6FB1IYdH4dsPmNZ3TjYpQR793Dldw&usqp=CAU",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is a beautiful and heartbreaking story. It's a must-read for anyone who loves historical fiction or coming-of-age stories."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a powerful story about the importance of words and the power of the human spirit."
      }
    ]
  },
  {
    "product_id": 73,
    "product_name": "The Curious Incident",
    "category": "books",
    "description": "The Curious Incident of the Dog in the Night-Time is a novel by Mark Haddon. The novel is narrated by Christopher John Francis Boone, a fifteen-year-old boy with autism who sets out to solve the mystery of who killed his neighbor's dog.",
    "price": 12.99,
    "old_price": 14.99,
    "stock": 100,
    "company_name": "Doubleday",
    "product_images": "https://m.media-amazon.com/images/I/81XSWePTsfL._AC_UF1000,1000_QL80_.jpg",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is a fascinating and unique look at the world from the perspective of someone with autism. It's a must-read for anyone who wants to understand autism better."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a well-written and thought-provoking story that will stay with you long after you finish reading it."
      }
    ]
  },
  {
    "product_id": 82,
    "product_name": "The Kite Runner",
    "category": "books",
    "description": "The Kite Runner is a novel by Khaled Hosseini set in Afghanistan. The story is narrated by Amir, a young boy who befriends Hassan, a Hazara boy who is his father's servant. Amir's father disowns Hassan after he is accused of stealing, and Amir grows up to be a wealthy man who is haunted by his past.",
    "price": 14.99,
    "old_price": 16.99,
    "stock": 100,
    "company_name": "Riverhead Books",
    "product_images": "https://m.media-amazon.com/images/I/81cTo9qhJPL._AC_UF1000,1000_QL80_.jpg",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is a beautiful and heartbreaking story. It's a must-read for anyone who loves coming-of-age stories or stories set in Afghanistan."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a powerful story about friendship, betrayal, and redemption."
      }
    ]
  },
  {
    "product_id": 83,
    "product_name": "1984",
    "category": "books",
    "description": "1984 is a dystopian novel by George Orwell. The novel is set in Airstrip One, a province of Oceania, a totalitarian state where the government controls every aspect of people's lives. The protagonist, Winston Smith, works for the Thought Police, but he begins to question the government and eventually becomes involved in a rebellion.",
    "price": 11.99,
    "old_price": 13.99,
    "stock": 100,
    "company_name": "Secker & Warburg",
    "product_images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_TwSwXB5hUoZK_vgxLlPDttdxdUUxoK1Tg&usqp=CAU",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "This book is a classic for a reason! It's a thought-provoking and chilling look at a possible future."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love this book! It's a powerful story about the dangers of totalitarianism."
      }
    ]

  },
  {
    "product_id": 5001,
    "product_name": "Elegant Black Dress",
    "subcategory": "dresses",
    "category": "clothes",
    "target_gender": "woman",
    "description": "An elegant black dress perfect for formal occasions and evening events. The dress features a flattering A-line silhouette with a V-neckline and 3/4 sleeves.",
    "price": 120,
    "stock": 30,
    "company_name": "FashionElite",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/5/w/m-dv333-daevish-original-imaga8zhya5kgvgw-bb.jpeg?q=70",
    "reviews": [
      {
        "author": "Sophia Miller",
        "rating": 5,
        "review": "This dress is absolutely stunning! It fits perfectly and makes me feel like a queen."
      },
      {
        "author": "Emma Johnson",
        "rating": 4,
        "review": "Love the dress, but the sleeves are a bit tight. Overall, it's a beautiful piece."
      }
    ]
  },
  {
    "product_id": 5002,
    "product_name": "Men's Classic White Shirt",
    "subcategory": "shirts",
    "category": "clothes",

    "target_gender": "man",
    "description": "A classic white shirt for men, perfect for both formal and casual occasions. The shirt is made of high-quality cotton and features a regular fit.",
    "price": 45,
    "stock": 50,
    "company_name": "Men'sStyleCo",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/q/r/d/s-st2-vebnor-original-imagpv9ahx6dukkr.jpeg?q=70",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "The shirt fits perfectly and looks great. I'm very happy with this purchase."
      },
      {
        "author": "Michael Brown",
        "rating": 4,
        "review": "Nice shirt, but the fabric could be a bit softer. Still, it's a good buy."
      }
    ]
  },
  {
    "product_id": 5003,
    "product_name": "Casual Denim Jacket",
    "subcategory": "jackets",
    "category": "clothes",

    "target_gender": "unisex",
    "description": "A trendy denim jacket for casual everyday wear. The jacket has a classic design with front button closures and multiple pockets.",
    "price": 70,
    "stock": 40,
    "company_name": "DenimVibe",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/m/f/n/m-no-denim-jacket-for-women-and-girls-qtsy-original-imagagtkegejahxg-bb.jpeg?q=70",
    "reviews": [
      {
        "author": "Laura Adams",
        "rating": 5,
        "review": "Love this denim jacket! It's comfortable and goes well with any outfit."
      },
      {
        "author": "David Lee",
        "rating": 4,
        "review": "The jacket is stylish, but the sleeves are a bit short for me. Still, I like it."
      }
    ]
  },
  {
    "product_id": 5004,
    "product_name": "Athletic Yoga Leggings",
    "subcategory": "leggings",
    "category": "clothes",

    "target_gender": "woman",
    "description": "High-performance yoga leggings designed for maximum comfort and flexibility during workouts. The leggings have a moisture-wicking fabric and a supportive waistband.",
    "price": 55,
    "stock": 60,
    "company_name": "ActiveFit",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/legging/5/z/t/xl-20476280-her-by-invictus-original-imagq5e2cwatzxrf.jpeg?q=70",
    "reviews": [
      {
        "author": "Sarah Turner",
        "rating": 5,
        "review": "These leggings are perfect for yoga and other workouts. They're so comfortable!"
      },
      {
        "author": "Emily Martinez",
        "rating": 4,
        "review": "Great leggings, but the waistband could be a bit tighter. Overall, they're good."
      }
    ]
  },
  {
    "product_id": 5005,
    "product_name": "Stylish Linen Shirt",
    "subcategory": "shirts",
    "category": "clothes",

    "target_gender": "man",
    "description": "A stylish linen shirt for men, perfect for summer and casual occasions. The shirt features a relaxed fit and a button-down collar.",
    "price": 60,
    "stock": 70,
    "company_name": "LinenFusion",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/x/n/xl-hlzs000028-highlander-original-imagqy4f8rntvnqv.jpeg?q=70",
    "reviews": [
      {
        "author": "Alex Johnson",
        "rating": 5,
        "review": "This linen shirt is perfect for hot days. It's comfortable and looks great."
      },
      {
        "author": "Daniel White",
        "rating": 4,
        "review": "Nice shirt, but it wrinkles easily. Apart from that, I'm happy with it."
      }
    ]
  },
  {
    "product_id": 5006,
    "product_name": "Floral Maxi Dress",
    "subcategory": "dresses",
    "category": "clothes",

    "target_gender": "woman",
    "description": "A beautiful floral maxi dress, perfect for summer and beach outings. The dress features a flowy design with a halter neck and a cinched waist.",
    "price": 90,
    "stock": 35,
    "company_name": "SummerGlow",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/4/d/g/l-gr5759-black-harpa-original-imafwyv3vfe8wngb-bb.jpeg?q=70",
    "reviews": [
      {
        "author": "Olivia Turner",
        "rating": 5,
        "review": "This dress is stunning! The floral print and fit are perfect for summer."
      },
      {
        "author": "Jessica Clark",
        "rating": 4,
        "review": "Lovely dress, but the neckline is a bit low for my liking. Still, it's pretty."
      }
    ]
  },
  {
    "product_id": 5007,
    "product_name": "Men's Casual Polo Shirt",
    "subcategory": "shirts",
    "category": "clothes",

    "target_gender": "man",
    "description": "A comfortable and casual polo shirt for men, suitable for various everyday activities. The shirt is made of breathable fabric and features a classic polo collar.",
    "price": 35,
    "stock": 80,
    "company_name": "CasualTrend",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/j/m/2/xxl-ifst-37-tclast-original-imagqz6nkusznnnt.jpeg?q=70",
    "reviews": [
      {
        "author": "John Davis",
        "rating": 4,
        "review": "Nice polo shirt, but the size runs a bit small. Still, it's a good purchase."
      },
      {
        "author": "Michael Adams",
        "rating": 5,
        "review": "I love this polo shirt! It's comfortable and perfect for casual outings."
      }
    ]
  },
  {
    "product_id": 5008,
    "product_name": "Cozy Oversized Sweater",
    "subcategory": "sweaters",
    "category": "clothes",

    "target_gender": "woman",
    "description": "A cozy oversized sweater for women, ideal for staying warm during colder days. The sweater features a loose fit and a stylish cable-knit pattern.",
    "price": 75,
    "stock": 90,
    "company_name": "CozyChic",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/g/7/3/xxl-mc-sw-3481-orn-mansicollections-original-imagqy7jqkgkgtzu.jpeg?q=70",
    "reviews": [
      {
        "author": "Laura Martinez",
        "rating": 4,
        "review": "The sweater is warm and comfy, but it sheds a bit. Other than that, I like it."
      },
      {
        "author": "Sophia Turner",
        "rating": 5,
        "review": "I absolutely adore this oversized sweater! It's my go-to piece for winter."
      }
    ]
  },
  {
    "product_id": 5009,
    "product_name": "Classic Tailored Suit",
    "subcategory": "suits",
    "category": "clothes",

    "target_gender": "man",
    "description": "A classic tailored suit for men, suitable for formal events and business occasions. The suit includes a jacket and trousers with a timeless design.",
    "price": 250,
    "stock": 25,
    "company_name": "TailorMasters",
    "product_images": "https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/u/p/b/38-18240652-mr-bowerbird-original-imaghmt5jshkdxjh.jpeg?q=70",
    "reviews": [
      {
        "author": "Daniel Smith",
        "rating": 5,
        "review": "This suit is exceptional! The fit is perfect, and the quality is outstanding."
      },
      {
        "author": "Mark Johnson",
        "rating": 4,
        "review": "The suit looks great, but the pants needed some alterations. Overall, it's good."
      }
    ]
  },
  {
    "product_id": 5010,
    "product_name": "Active Performance Shorts",
    "subcategory": "shorts",
    "category": "clothes",

    "target_gender": "unisex",
    "description": "High-performance active shorts suitable for various sports and workouts. The shorts are made of moisture-wicking fabric and have a stretchy waistband.",
    "price": 40,
    "stock": 55,
    "company_name": "ActiveLife",
    "product_images": "https://m.media-amazon.com/images/I/711NJgQV4WL._AC_UL480_FMwebp_QL65_.jpg",
    "reviews": [
      {
        "author": "Alex Turner",
        "rating": 5,
        "review": "These shorts are perfect for my workouts. They're comfortable and stay in place."
      },
      {
        "author": "Emily White",
        "rating": 4,
        "review": "The shorts are great, but the sizing is a bit off. Still, they're good."
      }


    ]
  },


  {
    "product_id": 5011,
    "product_name": "Multicoloured Print Dress",
    "subcategory": "dress",
    "category": "clothes",

    "target_gender": "unisex", 
    "description": "Multicoloured floral printed woven fit and flare dress, has shoulder straps, sleeveless, concealed zip closure, and flared hem.",
    "price": 40,
    "stock": 55,
    
    "company_name": "Berrylush",
    "product_images": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/10/21/0350ba39-e5a3-45bb-97ee-019c30fec2ba1603233250277-3.jpg",
    "reviews": [
      {
        "author": "Alex Turner",
        "rating": 5,
        "review": "These shorts are perfect for my workouts. They're comfortable and stay in place."
      },
      {
        "author": "Emily White",
        "rating": 4,
        "review": "The shorts are great, but the sizing is a bit off. Still, they're good."
      }


    ]
  },
   {
    "product_id": 5012,
    "product_name": "Classic Trench Coat",
    "subcategory": "Coat",
    "key":"classic",
    "category": "clothes",

    "target_gender": "unisex",
    "description": "High-performance active shorts suitable for various sports and workouts. The shorts are made of moisture-wicking fabric and have a stretchy waistband.",
    "price": 40,
    "stock": 55,
    "company_name": "ActiveLife",
    "product_images": "https://themewagon.github.io/cozastore/images/product-04.jpg",
    "reviews": [
      {
        "author": "Alex Turner",
        "rating": 5,
        "review": "These shorts are perfect for my workouts. They're comfortable and stay in place."
      },    
      {
        "author": "Emily White",
        "rating": 4,
        "review": "The shorts are great, but the sizing is a bit off. Still, they're good."
      }


    ]
  },
  

  


];

// Endpoint to get data based on the 's' and 'id' query parameters
app.get('/api/data', (req, res) => {
  const category = req.query.s;
  const productId = req.query.id;
  const subcategory = req.query.sub;
  const target_gender = req.query.g;

  if (category && productId && subcategory && target_gender) {
    // If all parameters are provided, return the matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        item.subcategory === subcategory &&
        item.target_gender === target_gender
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && productId && subcategory) {
    // If 's', 'id', and 'sub' parameters are provided, return matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        item.subcategory === subcategory
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && productId && target_gender) {
    // If 's', 'id', and 'g' parameters are provided, return matching item
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        target_genders.includes(item.target_gender)
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && subcategory && target_gender) {
    // If 's', 'sub', and 'g' parameters are provided, filter the data based on all three
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (productId && subcategory && target_gender) {
    // If 'id', 'sub', and 'g' parameters are provided, filter the data based on all three
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.product_id.toString() === productId &&
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (category && productId) {
    // If 's' and 'id' parameters are provided, return matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && subcategory) {
    // If 's' and 'sub' parameters are provided, filter the data based on both
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.subcategory === subcategory
    );
    res.json(filteredData);
  } else if (category && target_gender) {
    // If 's' and 'g' parameters are provided, filter the data based on both
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (productId && subcategory) {
    // If 'id' and 'sub' parameters are provided, filter the data based on both
    const filteredData = data.filter(
      (item) =>
        item.product_id.toString() === productId &&
        item.subcategory === subcategory
    );
    res.json(filteredData);
  } else if (subcategory && target_gender) {
    // If 'sub' and 'g' parameters are provided, filter the data based on both
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (subcategory) {
    // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.subcategory === subcategory);
    res.json(filteredData);
  } else if (target_gender) {
    // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.target_gender === target_gender);
    res.json(filteredData);
  } else if (category) {
    // If only 's' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.category === category);
    res.json(filteredData);
  } else if (productId) {
    // If only 'id' parameter is provided, filter the data based on the 'id' query parameter
    const filteredData = data.filter((item) => item.product_id.toString() === productId);
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else {
    // If neither 's' nor 'id' parameters are provided, return all data
    res.json(data);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
