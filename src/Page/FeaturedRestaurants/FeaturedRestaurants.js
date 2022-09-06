import React from 'react'
import foodworld from '../../assets/img/gallery/food-world.png'
import foodworldlogo from '../../assets/img/gallery/food-world-logo.png'
import pizzahub from '../../assets/img/gallery/pizza-hub.png';
import pizzahublogo from '../../assets/img/gallery/pizzahub-logo.png';
import donuthut from '../../assets/img/gallery/donuthut.png';
import donuthuts from '../../assets/img/gallery/donuts-hut.png';
import donuthutlogo from '../../assets/img/gallery/donut-hut-logo.png';
import donuthutslogo from '../../assets/img/gallery/donuts-hut-logo.png';
import rubytuesday from '../../assets/img/gallery/ruby-tuesday.png';
import rubytuesdaylogo from '../../assets/img/gallery/ruby-tuesday-logo.png';
import kuakata from '../../assets/img/gallery/kuakata.png';
import kuakatalogo from '../../assets/img/gallery/kuakata-logo.png';
import redsquare from '../../assets/img/gallery/red-square.png';
import redsquarelogo from '../../assets/img/gallery/red-square-logo.png';
import tacobell from '../../assets/img/gallery/taco-bell.png';
import tacobelllogo from '../../assets/img/gallery/taco-bell-logo.png';
function FeaturedRestaurants() {
    return (
        <div>
            <section id="testimonial">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Featured Restaurants
              </h5>
            </div>
          </div>
          <div class="row gx-2">
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={foodworld}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">20% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={foodworldlogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Food world</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">46</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-danger p-2">
                    <span class="fw-bold fs-1 text-danger">Opens Tomorrow</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={pizzahub}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">10% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={pizzahublogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Pizza hub</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">40</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-danger p-2">
                    <span class="fw-bold fs-1 text-danger">Opens Tomorrow</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={donuthuts}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">15% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={donuthutslogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">20</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={donuthut}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">15% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={donuthutlogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={rubytuesday}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">10% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={rubytuesdaylogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Ruby tuesday</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={kuakata}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">10% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={kuakatalogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">
                        Kuakata Fried Chicken
                      </h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={redsquare}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">10% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={redsquarelogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">
                        Kuakata Fried Chicken
                      </h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3">
                <img
                  class="img-fluid rounded-3 h-100"
                  src={tacobell}
                  alt="..."
                />
                <div class="card-img-overlay ps-0">
                  <span class="badge bg-danger p-2 ms-3">
                    <i class="fas fa-tag me-2 fs-0"></i>
                    <span class="fs-0">10% off</span>
                  </span>
                  <span class="badge bg-primary ms-2 me-1 p-2">
                    <i class="fas fa-clock me-1 fs-0"></i>
                    <span class="fs-0">Fast</span>
                  </span>
                </div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="img-fluid"
                      src={tacobelllogo}
                      alt=""
                    />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Taco bell</h5>
                      <span class="text-primary fs--1 me-1">
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span class="badge bg-soft-success p-2">
                    <span class="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-5">
              {" "}
              <a class="btn btn-lg btn-primary" href="#!">
                View All <i class="fas fa-chevron-right ms-2"> </i>
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default FeaturedRestaurants
