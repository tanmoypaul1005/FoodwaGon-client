import React from "react";
import "../../assets/css/theme.css";
import FeaturedRestaurants from "../FeaturedRestaurants/FeaturedRestaurants";
import PopularItems from "../PopularItems/PopularItems.js";
import SearchFood from "../SearchFood/SearchFood";
import Banner from "./Banner/Banner";
import Offer from "./Offer/Offer";
import Work from "./Work/Work";
import ctaonebg from "../../assets/img/gallery/cta-one-bg.png";
import ctatwobg from "../../assets/img/gallery/cta-two-bg.png";
import discounts from "../../assets/img/icons/discounts.png";
import livetracking from "../../assets/img/icons/live-tracking.png";
import quickdelivery from "../../assets/img/icons/quick-delivery.png";
import phonectaone from "../../assets/img/gallery/phone-cta-one.png";
import appstore from "../../assets/img/gallery/app-store.svg";
import googleplay from "../../assets/img/gallery/google-play.svg";
import crispysandwiches from "../../assets/img/gallery/crispy-sandwiches.png";
import friedchicken from "../../assets/img/gallery/fried-chicken.png";
import pizza from "../../assets/img/gallery/pizza.png";
import "./Home.css";
import Footer from "../Footer/Footer.js";
function Home() {
  return (
    // <div>
    <div class="main" id="top">
      <Banner />
      <Offer />
      <Work />
      <PopularItems></PopularItems>
      <FeaturedRestaurants />
      <SearchFood />

      <section>
        <div class="bg-holder ctaonebg">
          {" "}
          <img src={ctaonebg}></img>
        </div>
        {/* <!--/.bg-holder--> */}

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-10">
              <div
                class="card card-span shadow-warning"
                style={{ borderRadius: "35px" }}
              >
                <div class="card-body py-5">
                  <div class="row justify-content-evenly">
                    <div class="col-md-3">
                      <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img src={discounts} width="100" alt="..." />
                        <div class="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                            Daily
                            <br class="d-none d-md-block" />
                            Discounts{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 hr-vertical">
                      <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img src={livetracking} width="100" alt="..." />
                        <div class="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                            Live Tracking
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 hr-vertical">
                      <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img src={quickdelivery} width="100" alt="..." />
                        <div class="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                            Quick Delivery{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex-center mt-md-8">
            <div
              class="col-lg-5 d-none d-lg-block"
              style={{ marginBottom: "-122px" }}
            >
              {" "}
              <img class="w-100" src={phonectaone} alt="..." />
            </div>
            <div class="col-lg-5 mt-7 mt-md-0">
              <h1 class="text-primary">Install the app</h1>
              <p>
                It's never been easier to order food. Look for the finest{" "}
                <br class="d-none d-xl-block" />
                discounts and you'll be lost in a world of delectable food.
              </p>
              <a
                class="pe-2"
                href="https://www.apple.com/app-store/"
                target="_blank"
              >
                <img src={appstore} width="160" alt="" />
              </a>
              <a href="https://play.google.com/store/apps" target="_blank">
                <img src={googleplay} width="160" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============================================-->
      <!-- <section> begin ============================--> */}
      <section class="pb-5 pt-8">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                      <img
                        class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0"
                        src={crispysandwiches}
                        alt="..."
                      />
                    </div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">
                        Best deals{" "}
                        <span class="text-primary"> Crispy Sandwiches</span>
                      </h1>
                      <p class="fs-1">
                        Enjoy the large size of sandwiches. Complete your meal
                        with the perfect slice of sandwiches.
                      </p>
                      <div class="d-grid bottom-0">
                        <a class="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i class="fas fa-chevron-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of .container--> */}
      </section>
      {/* <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================--> */}
      <section class="py-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-md-0">
                      <img
                        class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-start rounded-md-top-0"
                        src={friedchicken}
                        alt="..."
                      />
                    </div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">
                        Celebrate parties with{" "}
                        <span class="text-primary">Fried Chicken</span>
                      </h1>
                      <p class="fs-1">
                        Get the best fried chicken smeared with a lip smacking
                        lemon chili flavor. Check out best deals for fried
                        chicken.
                      </p>
                      <div class="d-grid bottom-0">
                        <a class="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i class="fas fa-chevron-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of .container--> */}
      </section>
      {/* <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================--> */}
      <section class="pt-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                      <img
                        class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0"
                        src={pizza}
                        alt="..."
                      />
                    </div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">
                        Wanna eat hot &{" "}
                        <span class="text-primary">spicy Pizza?</span>
                      </h1>
                      <p class="fs-1">
                        Pair up with a friend and enjoy the hot and crispy pizza
                        pops. Try it with the best deals.
                      </p>
                      <div class="d-grid bottom-0">
                        <a class="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i class="fas fa-chevron-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of .container--> */}
      </section>
      {/* <!-- <section> close ============================-->
      <!-- ============================================--> */}

      <section class="py-0">
        <div
          class="bg-holder"
          style={{
            backgroundimage: "url(assets/img/gallery/cta-two-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img src={ctatwobg} />
        </div>
        {/* <!--/.bg-holder--> */}

        <div class="container">
          <div class="row flex-center">
            <div class="col-xxl-9 py-7 text-center">
              <h1 class="fw-bold mb-4 text-white fs-6">
                Are you ready to order <br />
                with the best deals?{" "}
              </h1>
              <a class="btn btn-danger" href="#">
                {" "}
                PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <!-- <section> close ============================-->
      <!-- ============================================--> */}
    </div>
  );
}

export default Home;
