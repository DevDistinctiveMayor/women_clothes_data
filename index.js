const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Use CORS to allow cross-origin requests
app.use(cors());

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample data for women's clothing
const womenClothing = [
  {
    id: 1,
    title: "Knitted Rib Acrylic Crochet Hollow",
    description: "ICW Women's Knitted Rib Acrylic Crochet Hollow Out Crop Top T-Shirt for Girls (FIT to XS-S) (BUST SIZE 28-32 Inch). A beautiful Knitted dress perfect for summer ",
    price: '20.000',
    image: '/images/1.png',
    rating: "5 (12)",
    Quantity: 12
  },
  {
    id: 2,
    title: 'Denim pant',
    description: 'Women Grey Jeans Streetwear Vintage Wash Wide Leg Denim Pants Y2k Straight Four Pockets Baggy Cargo Jeans With Stars Pants. A stylish denim for casual wear.',
    price: '18.000',
    image: '/images/mira.jpg',
    rating: "5 (10)",
    Quantity: 8
  },
  {
    id: 3,
    title: 'Woman Elegant',
    description: 'NewAsia Slim Fit Dress Fashion Ruched Sloping Shoulders Long Sleeves Vestidos Elegant Solid Bag Hip Summer Mini Banquet Dresses. A light and airy top for warm weather.',
    price: '19.000',
    image: '/images/3.jpg',
    rating: "4 (12)",
    Quantity: 18
  },
  {
    id: 4,
    title: 'Rose Pink Dress',
    description: 'Slim Fit Dress Fashion rose shoulder.  A chic leather skirt for a night out.',
    price: '28.000',
    image: '/images/4.jpg',
    rating: "4 (18)",
    Quantity: 11,
  },
  {
    id: 5,
    title: 'French Lace',
    description: 'French Lace Up Pleated Chiffon Female Dress. A beautiful floral dress perfect for summer.',
    price: '22.000',
    image: '/images/5.png',
    rating: "4 (29)",
    Quantity: 6
  },
  {
    id: 6,
    title: 'French Mesh Lace',
    description: 'Autumn New Pure Desire Wind French Mesh Lace Ruffle Satin Bubble Long-sleeved Dress.',
    price: '18.000',
    image: '/images/6.jpg',
    rating: "4 (18)",
    Quantity: 16,
  },
  {
    id: 7,
    title: 'Women Single Shoulder ',
    description: 'High Quality Women Single Shoulder Strap Hollow Bag Hip INS Wind Casual Dress.',
    price: '18.000',
    image: '/images/7.jpg',
    rating: "5 (8)",
    Quantity: 11
  },
  {
    id: 8,
    title: 'Elegant Solid Knitted Maxi',
    description: 'Elegant Solid Knitted Maxi Dress Women Long Sleeve Square Neck Slim Fit Elastic Clubwear Sheath Party Long Dresses Vestidos. A chic Dress for a Dinner out.',
    price: '19.000',
    image: '/images/8.jpg',
    rating: "5 (5)",
    Quantity: 6
  },
  {
    id: 9,
    title: 'Trend High Street Denim Suits',
    description: 'SINGREINY Trend High Street Denim Suits Backless Sleeveles Halter Y2K Top+ Zipper Pleated Mini Skirt Hollow Out Two Pieces Sets. A beautiful Denim perfect for night out.',
    price: '29.000',
    image: '/images/9.jpg',
    rating: "4 (32)",
    Quantity: 9
  },
  {
    id: 10,
    title: 'Cute Ladies Short Bodycon',
    description: 'Cute Ladies Short Bodycon. A light and airy short for warm weather.',
    price: '17.500',
    image: '/images/10.jpg',
    rating: "4 (10)",
    Quantity: 11
  },
  {
    id: 11,
    title: 'Denim Long Sleeve',
    description: 'Autumn Women 2 Piece Set Long Sleeve Crop Top and High Waist Pants Gray Matching Outfits Streetwear.',
    price: '20.000',
    image: '/images/11.jpg',
    rating: "5 (8)",
    Quantity: 8
  },
  {
    id: 12,
    title: 'Leather Short',
    description: 'A chic leather skirt for a night out.',
    price: '25.000',
    image: '/images/12.png',
    rating: "4 (10)",
    Quantity: 9
  },
  {
    id: 13,
    title: 'Spring French Knitted',
    description: 'Spring French Knitted Long-Sleeved Shawl Cardigan + Halter Hem Dress Two-Piece Set.',
    price:'18.000',
    image: '/images/13.jpg',
    rating: "5 (20)",
    Quantity: 11
  },
  {
    id: 14,
    title: 'Striped Shirt',
    description: 'Solid Shirt Oxford Striped Casual Cotton Blouse Collar Thick. A light and airy top for casual wear.',
    price: '15.600',
    image: '/images/14.jpg',
    rating: "4 (15)",
    Quantity: 10
  },
  {
    id: 15,
    title: 'solid Casual Cotton Top',
    description: 'Solid Casual Cotton Top. A airy top for casual wear.',
    price: '12.600',
    image: '/images/15.png',
    rating: "4 (15)",
    Quantity: 10
  },
  {
    id: 16,
    title: 'Long sleeve Flame sweater ',
    description: "Vamtac Women's Long sleeve Flame sweater .",
    price: '18.000',
    image: '/images/16.jpg',
    rating: "5 (23)",
    Quantity: 11
  },
  {
    id: 17,
    title: 'Zara pink dress',
    description: 'A beautiful floral dress perfect for summer.',
    price: '19.000',
    image: '/images/17.png',
    rating: "4 (13)",
    Quantity: 6
  },
  {
    id: 18,
    title: 'Denim Big Pockets Streetwear Loose',
    description: "Autumn Women's Straight Pants Big Pockets Streetwear Loose High Waist Zipper Versatile Fashion. A stylish denim jacket for casual wear.",
    price: '25.000',
    image: '/images/18.jpg',
    rating: "5 (33)",
    Quantity: 9
  },

];



// Endpoint to get women's clothing
app.get('/api/women-clothing', (req, res) => {
  res.json(womenClothing);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
