import React from 'react'

const Cards = () => {
  return (
    <>
    <section class="cards-section">
  <h2 class="cards-title">Our Services</h2>
  <div class="cards-container">
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/100/2563eb/services.png" alt="Service 1" />
      <h3>Web Development</h3>
      <p>We build fast and modern websites customized for your business needs.</p>
      <a href="#" class="card-btn">Learn More</a>
    </div>
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/100/2563eb/seo.png" alt="Service 2" />
      <h3>SEO Optimization</h3>
      <p>Improve your website ranking and visibility with our expert SEO services.</p>
      <a href="#" class="card-btn">Learn More</a>
    </div>
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/100/2563eb/cloud-computing.png" alt="Service 3" />
      <h3>Cloud Solutions</h3>
      <p>Scale your infrastructure securely and efficiently using cloud technology.</p>
      <a href="#" class="card-btn">Learn More</a>
    </div>
  </div>
</section>

    </>
  )
}

export default Cards