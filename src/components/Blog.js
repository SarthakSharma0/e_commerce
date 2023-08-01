import React from 'react'

export default function Blog() {
  return (
    <div>
      <div class="container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <h1>Welcome to the Fashion Rebels Blog</h1>
    </div>

    <div class="container my-4">
        <div class="card" style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={require('../assets/img/blog/bl1.jpg')} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Atlantic-pacific</h5>
                        <p class="card-text">Atlantic-Pacific creator Blair Eadie has been in the fashion industry for
                            several years now. Having worked for companies such as Tory Burch and Gap, she has the
                            insider's experience in how the industry has evolved over the years.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={require('../assets/img/blog/bl2.jpg')} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">The Daileigh</h5>
                        <p class="card-text">The Ultimate Fashion Photography Resource. Our mission is to provide
                            you with the right knowledge and tools you need in order to take on the challenges, and rise
                            to the top. With our service we wish to revolutionize the way fashion photography is taught,
                            bringing you an unfiltered insight to all sides of the industry</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={require('../assets/img/blog/bl3.jpg')} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Fash Shion</h5>
                        <p class="card-text">Covers articles about runway shows from the hottest fashion designers,
                            best-dressed celebrities on the red carpet street style, discovering the latest and greatest
                            beauty products to maintain a healthy glow, and getting a sneak peek at our celebrity cover
                            shoots.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={require('../assets/img/blog/b3.jpg')} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">FST</h5>
                        <p class="card-text">Sustainability is a lifestyle investment, a vision to develop on. Only a
                            deep conviction and nurturing it as a habit will take us closer, to the final goal - one day
                            at a time. It is a journey involving unlearning, learning, and perspective-shift. This can
                            happen with slow but steady mindfully conscious steps.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={require('../assets/img/blog/bl4.jpg')} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tourist</h5>
                        <p class="card-text">If you are thinking of taking a break from your daily routine in the summer
                            season and planning to travel somewhere, choosing the right outfit is necessary for a
                            comfortable journey. The heat and sweat during summer could be a turn off for your travel
                            plans. However, with the right and comfortable clothes you will not only feel better during
                            your travel but it will also enhance your style and looks.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container container d-flex align-items-center justify-content-center my-4">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary active">1</button>
            <button type="button" class="btn btn-outline-primary">2</button>
            <button type="button" class="btn btn-outline-primary">3</button>
            <button type="button" class="btn btn-outline-primary">→</button>
        </div>
    </div>
    </div>
  )
}
