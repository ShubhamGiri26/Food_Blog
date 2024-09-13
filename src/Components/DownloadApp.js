import React from 'react'

const DownloadApp = () => {
  return (
    <>
      <div class="section" id="app">
      <div class="container flex">
        <div class="visual">
          <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/app.png" alt="" />
        </div>

        <div class="text">
          <h2 class="secondary">Download The App Now</h2>
          <p>
          Craving for a meal without the hassles of cooking or stepping out? The Delivery app has got you covered! Order online and bask in the delight of delicious meals delivered right to your doorstep. 
          Prepare yourself for a meal that’s both tantalizingly tasty and reassuringly healthy - our restaurant grade dishes are made using the freshest ingredients.
          </p>

          <div class="download flex">
            <div class="app-store">
            <i class="fa-brands fa-google-play"></i>
              <p>
                GET IT ON <br />
                <span>Google Play</span>
              </p>
            </div>

            <div class="app-store">
            <i class="fa-brands fa-apple"></i>
              <p>
                Donload on the <br />
                <span>App Store</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DownloadApp
