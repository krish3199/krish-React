 import React, { useState } from "react";
import "./App.css";

const App = () => {
  let products = [
    // Electronics (3)
    {
      productId: 1,
      img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      price: 29999,
      category: "Electronics",
      stock: 50,
      ratings: 4.5,
      tags: ["mobile", "android", "touchscreen"],
    },
    {
      productId: 2,
      img: "https://innovationmanagement.se/wp-content/uploads/2009/09/tips-for-innovative-ideas-from-electronics-technology-industry.jpg",
      price: 24999,
      category: "Electronics",
      stock: 40,
      ratings: 4.4,
      tags: ["LED", "smart", "4K"],
    },
    {
      productId: 3,
      img: "https://www.schott.com/-/media/project/onex/shared/teasers/consumer-electronics/consumer-electronics_01-displays_00_720x450.jpg?rev=fe6df7a508644a7d8e294e6c294a317b",
      price: 15999,
      category: "Electronics",
      stock: 35,
      ratings: 4.3,
      tags: ["monitor", "gaming", "4K"],
    },

    // Footwear (3)
    {
      productId: 4,
      img: "https://static.investindia.gov.in/s3fs-public/2021-04/Footwear%20pic.jpg",
      price: 4999,
      category: "Footwear",
      stock: 120,
      ratings: 4.3,
      tags: ["sports", "men", "comfortable"],
    },
    {
      productId: 5,
      img: "https://isteam.wsimg.com/ip/a8efe83b-6857-477d-9d0f-f13ca0229a20/ols/3554_original/:/rs=w:600,h:600",
      price: 2999,
      category: "Footwear",
      stock: 80,
      ratings: 4.0,
      tags: ["casual", "women", "stylish"],
    },
    {
      productId: 6,
      img: "https://www.voganow.com/cdn/shop/files/VNLF-050-018-SRAY_1_5d5c796b-7cee-483b-ad14-c94c3b17e7ae.jpg?v=1754552849",
      price: 3999,
      category: "Footwear",
      stock: 100,
      ratings: 4.2,
      tags: ["boots", "leather", "durable"],
    },

    // Shoes (3)
    {
      productId: 7,
      img: "https://admin.mochishoes.com/product/71-128/660/71-128H16.jpg",
      price: 5499,
      category: "Shoes",
      stock: 75,
      ratings: 4.6,
      tags: ["running", "men", "lightweight"],
    },
    {
      productId: 8,
      img: "https://m.media-amazon.com/images/I/81R6YbNKOzL._UY1000_.jpg",
      price: 3299,
      category: "Shoes",
      stock: 90,
      ratings: 4.1,
      tags: ["casual", "unisex", "trendy"],
    },
    {
      productId: 9,
      img: "https://m.media-amazon.com/images/I/7184lpsnh4L._UY1000_.jpg",
      price: 4499,
      category: "Shoes",
      stock: 65,
      ratings: 4.4,
      tags: ["formal", "men", "office"],
    },

    // Bags (3)
    {
      productId: 10,
      img: "https://t4.ftcdn.net/jpg/02/02/39/07/360_F_202390749_8T273Qalaj7HwjvW6W4VSiUsNb753vd2.jpg",
      price: 1200,
      category: "Bags",
      stock: 200,
      ratings: 4.0,
      tags: ["travel", "waterproof", "lightweight"],
    },
    {
      productId: 11,
      img: "https://img.joomcdn.net/56f4857c8f04379e2f15b7065de108fca897aa9d_original.jpeg",
      price: 2200,
      category: "Bags",
      stock: 150,
      ratings: 4.2,
      tags: ["office", "laptop", "stylish"],
    },
    {
      productId: 12,
      img: "https://m.media-amazon.com/images/I/71DVHRrjlkL.jpg",
      price: 1800,
      category: "Bags",
      stock: 130,
      ratings: 4.1,
      tags: ["backpack", "students", "durable"],
    },

    // Audio (2)
    {
      productId: 13,
      img: "https://lwks.com/hubfs/Audio-min.webp",
      price: 6999,
      category: "Audio",
      stock: 150,
      ratings: 4.7,
      tags: ["bluetooth", "noise-cancelling", "wireless"],
    },
    {
      productId: 14,
      img: "https://www.shutterstock.com/image-photo/home-studio-podcast-interior-microphone-600nw-1931610188.jpg",
      price: 3499,
      category: "Audio",
      stock: 100,
      ratings: 4.5,
      tags: ["headphones", "wired", "bass"],
    },

    // Accessories (2)
    {
      productId: 15,
      img: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg",
      price: 899,
      category: "Accessories",
      stock: 180,
      ratings: 3.9,
      tags: ["UV protection", "fashion", "unisex"],
    },
    {
      productId: 16,
      img: "https://media.istockphoto.com/id/531786318/photo/top-view-of-female-fashion-accessories.jpg?s=612x612&w=0&k=20&c=kA9wOhgfDQiz7RO6GoEztqlPNGaTxZyFwf14991aMM0=",
      price: 1299,
      category: "Accessories",
      stock: 150,
      ratings: 4.0,
      tags: ["polarized", "stylish", "lightweight"],
    },

    // Home Appliances (3)
    {
      productId: 17,
      img: "https://imgmediagumlet.lbb.in/media/2023/08/64e30ec0dcc87514d40b0292_1692602048310.jpg",
      price: 3500,
      category: "Home Appliances",
      stock: 35,
      ratings: 4.1,
      tags: ["kitchen", "coffee", "automatic"],
    },
    {
      productId: 18,
      img: "https://www.kitchen-retro.com/wp-content/uploads/2023/06/Home-Appliances.jpg",
      price: 1599,
      category: "Home Appliances",
      stock: 100,
      ratings: 4.3,
      tags: ["kitchen", "boil", "automatic shutoff"],
    },
    {
      productId: 19,
      img: "https://www.thespruce.com/thmb/HkUZ_1V6p7Tce_eSl8M6PAOoOXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/organize-your-kitchen-cabinets-2648622-04-2-2a80715b358f4d14990cd048d6600e13.jpg",
      price: 9999,
      category: "Home Appliances",
      stock: 20,
      ratings: 4.4,
      tags: ["washing", "energy-saving", "automatic"],
    },

    // Wearables (2)
    {
      productId: 20,
      img: "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2023/10/273_designing_for_wearables_illustration_blog-2-1.png",
      price: 10999,
      category: "Wearables",
      stock: 80,
      ratings: 4.6,
      tags: ["fitness", "bluetooth", "water-resistant"],
    },
    {
      productId: 21,
      img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg  ",
      price: 4999,
      category: "Wearables",
      stock: 70,
      ratings: 4.3,
      tags: ["watch", "analog", "classic"],
    },

    // Computer Accessories (2)
    {
      productId: 22,
      img: "https://img.freepik.com/premium-photo/top-view-office-desk-workspace_160097-385.jpg",
      price: 2999,
      category: "Computer Accessories",
      stock: 90,
      ratings: 4.2,
      tags: ["gaming", "mechanical", "LED-backlit"],
    },
    {
      productId: 23,
      img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/snp-category-pages/pc-accessories/keyboard-mouse-headset-mock.png?fmt=png-alpha&wid=1800&hei=800",
      price: 899,
      category: "Computer Accessories",
      stock: 200,
      ratings: 4.1,
      tags: ["wireless", "ergonomic", "USB"],
    },

    // Clothing (2)
    {
      productId: 24,
      img: "https://media.istockphoto.com/id/660490044/photo/the-perfect-dress-for-me.jpg?s=612x612&w=0&k=20&c=elEj_0xI7cId9PyIRqPrI4WZom3elIptpmAVRoORy44=",
      price: 1499,
      category: "Clothing",
      stock: 100,
      ratings: 4.0,
      tags: ["shirt", "men", "casual"],
    },
    {
      productId: 25,
      img: "https://img.freepik.com/premium-photo/happy-woman-choosing-clothes-clothing-store_380164-215931.jpg",
      price: 2599,
      category: "Clothing",
      stock: 80,
      ratings: 4.2,
      tags: ["dress", "women", "party"],
    },

    // Furniture (2)
    {
      productId: 26,
      img: "https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=",
      price: 15999,
      category: "Furniture",
      stock: 15,
      ratings: 4.4,
      tags: ["sofa", "living room", "comfortable"],
    },
    {
      productId: 27,
      img: "https://img.freepik.com/free-psd/elegant-armchair-coffee-table-set-modern-comfort-style_191095-80516.jpg",
      price: 4999,
      category: "Furniture",
      stock: 25,
      ratings: 4.3,
      tags: ["table", "wooden", "durable"],
    },

    // Sports (2)
    {
      productId: 28,
      img: "https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0=",
      price: 1499,
      category: "Sports",
      stock: 200,
      ratings: 4.5,
      tags: ["football", "outdoor", "durable"],
    },
    {
      productId: 29,
      img: "https://media.gettyimages.com/id/137352556/photo/sports-equipment.jpg?s=612x612&w=gi&k=20&c=Q-UE8G3WdRLp99rHx7qqYOcm_n25X4JyZSyeiswNVLE=",
      price: 1299,
      category: "Sports",
      stock: 180,
      ratings: 4.3,
      tags: ["basketball", "indoor", "training"],
    },

    // Books (1)
    {
      productId: 30,
      img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/books-925589_1280.jpg",
      price: 799,
      category: "Books",
      stock: 300,
      ratings: 4.7,
      tags: ["novel", "fiction", "bestseller"],
    },
  ];

  let minPrice = Math.min(...products.map((p) => p.price));
  let maxPrice = Math.max(...products.map((p) => p.price));

  let [range, setRange] = useState(maxPrice);
  let [pro, setPro] = useState(products);
  let [search, setSearch] = useState("");

  let handelRange = (e) => {
    let value = e.target.value;
    setRange(value);
    setPro(
      products.filter(
        (i) =>
          i.price <= value &&
          i.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  let handleSearch = (e) => {
    let searc = e.target.value;
    setSearch(searc);
    setPro(
      products.filter(
        (i) =>
          i.category.toLowerCase().includes(searc.toLowerCase()) &&
          i.price <= range
      )
    );
  };

  return (
    <>
      <div className="filters">
        <input
          type="search"
          placeholder="Search by category..."
          onChange={handleSearch}
          value={search}
        />
        <div className="range-filter">
          <label>Price: ₹{range}</label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            onChange={handelRange}
            value={range}
          />
        </div>
      </div>

      <div className="container">
        {pro.length > 0 ? (
          pro.map((e, i) => {
            return (
              <div className="card" key={i}>
                <img src={e.img} alt={e.category} />
                <div className="card-content">
                  <h2>₹{e.price}</h2>
                  <p className="category">{e.category}</p>
                  <p className="rating">⭐ {e.ratings}</p>
                  <div className="tags">
                    {e.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-products">No products found 🛒</p>
        )}
      </div>
    </>
  );
};

export default App;
