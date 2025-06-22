import React from 'react'
// import '../App.css'

import Carousal from './carousal'

import DestinationList from './destination copy 2.jsx'
import { Card } from '@material-ui/core'
import Cards from './cards.jsx'
import HockeyCards from './hockeycards.jsx'


export default function Home() {


  return (
    <div>
      {/* 
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

         */}

      <Carousal />
      <Cards />
      <div className="container-fluid pb-3 px-3">
        <h1 className="fw-bold">Hockey Matches</h1>
      </div>
      <Cards />
      <div className="container-fluid pb-3 px-3">
        <h1 className="fw-bold">Hockey News</h1>
      </div>
      <Cards />
      <div className="container-fluid pb-3 px-3">
        <h1 className="fw-bold">Hockey Matches</h1>
      </div>
      <Cards />
      <div style={{ backgroundColor: "#ea4c2d" }} className="container-fluid pb-3 px-3">
        <h1 className="fw-bold text-light pt-4 pb-2">Latest Hockey Players</h1>
        <HockeyCards />
      </div>
      <div className="container-fluid">
        <h1 className="fw-bold pt-4 pb-2" style={{ color: "#ea4c2d" }}>Latest Hockey Scores</h1>

        <div className="row">
          {/* Sticky Left Column */}
          <div className="col-md-6">
            <div className="sticky-top" style={{ top: "80px" }}>
              <div className="card h-100 border-0">
                <img
                  src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/fd4089c7-2b47-4770-ab11-de0379d5eeee/Smith-walking-off.jpg?width=370&height=209"
                  className="card-img-top rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                  </h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, officiis maxime! Beatae libero a delectus ex aspernatur fugiat expedita suscipit quasi voluptatibus at maiores saepe, quas accusantium cumque dolorem velit.</p>
                  <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Right Column */}
          <div className="col-md-6" style={{}}>
            <div className="row">
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/02151c9a-bbb4-407e-9f4a-11e5ba23ac19/AFzeqVwW.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/293ad125-aa32-4bc7-af49-1a2515cb51f4/Bavuma-Markram.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/293ad125-aa32-4bc7-af49-1a2515cb51f4/Bavuma-Markram.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/293ad125-aa32-4bc7-af49-1a2515cb51f4/Bavuma-Markram.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/13/77c78b85-56ee-464f-a4fd-3be764e2a588/murph-gloucester.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/12/1c7f7b11-d81f-4746-9768-9b29200423a7/prestwidge-hayward.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/10/2c4a437b-972a-4fe9-bcf1-efcca5ab0050/qHO8xXoe.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0">
                  <img
                    src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/02/25/f349afe3-9451-4ec7-8735-a8126a481963/wbbl-squads.jpg?width=370&height=209"
                    className="card-img-top rounded-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, similique.
                    </h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#ea4c2d" }} className="container-fluid pb-3 px-3">
        <h1 className="fw-bold text-light pt-4 pb-2">Hockey Live Scores</h1>
        <HockeyCards />
      </div>
      <div className="container-fluid pb-3 px-3">
        <h1 className="fw-bold pt-4">Hockey Upcoming Matches</h1>
      </div>
      <Cards />
      <div>
        <div className="container pt-2 pb-5">
          <h1 className="fw-bold pb-3 text-center">Our Partners</h1>
          <div className="row">
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/04/02/225f3300-2c0e-41d1-853b-9821da4b333d/NRMAI_Standalone_Logo_Primary_Positive_-RGB-.png?width=320" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/03/11/79dc070a-f390-4f10-b4d0-580ffccb6902/KFC_reversed_red_RGB.png?width=320" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/d9c4cab5-5ebc-4956-9e8d-b1fa46390f58/CommBank-Stacked-Wordmark-sRGB-300ppi-1-.jpg?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/08/09/d5dd0da3-2321-4022-9613-ca7ec03cfca6/HCLtech.jpg?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/988b7620-49e2-4504-bd77-6de535686979/Qantas-Logo.png?width=200" alt="" className="card-img-top" />
            </div>
            <div className="col-md-2 col-6 justify-content-center py-2 d-flex align-items-center">
              <img style={{width:"100px"}} src="https://resources.cricket-australia.pulselive.com/photo-resources/2023/02/14/5a7eafee-1841-428b-b306-14a98d7b4fb0/ToyotaProductLogoVertical_BLACK_RGB-1-.png?width=200" alt="" className="card-img-top" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}