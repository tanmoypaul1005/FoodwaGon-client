import React from "react";
import searchpizza from '../../assets/img/gallery/search-pizza.png';
import burger from '../../assets/img/gallery/burger.png';
import noodles from '../../assets/img/gallery/noodles.png';
import subsandwich from '../../assets/img/gallery/sub-sandwich.png';
import chowmein from '../../assets/img/gallery/chowmein.png';
import steak from '../../assets/img/gallery/steak.png';


function SearchFood() {
  return (
    <div>
      <section class="py-8 overflow-hidden">
        <div class="container">
          <div class="row flex-center mb-6">
            <div class="col-lg-7">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">
                Search by Food
              </h5>
            </div>
            <div class="col-lg-4 text-lg-end text-center">
              <a class="btn btn-lg text-800 me-2" href="#" role="button">
                VIEW ALL <i class="fas fa-chevron-right ms-2"></i>
              </a>
            </div>
            <div class="col-lg-auto position-relative">
              <button
                class="carousel-control-prev s-icon-prev carousel-icon"
                type="button"
                data-bs-target="#carouselSearchByFood"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon hover-top-shadow"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next s-icon-next carousel-icon"
                type="button"
                data-bs-target="#carouselSearchByFood"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon hover-top-shadow"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col-12">
              <div
                class="carousel slide"
                id="carouselSearchByFood"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={searchpizza}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={burger}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={noodles}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={subsandwich}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={chowmein}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={steak}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="5000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src="assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
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
    </div>
  );
}

export default SearchFood;
