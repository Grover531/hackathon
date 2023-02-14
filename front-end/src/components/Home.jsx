import React from "react"
import { data1, data10, data11, data12, data2, data3, data4, data5, data6, data7, data8, data9 } from "./Feeds"
import './Home.css'



function Home() {

  const data = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12 ]

  return (
    <>
      <div id="homeDivId">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
        <div id="homeChildOne" class="container text-center ">
          <div class="row align-items-center ">
            <div class="col">
              {data[0]}
            </div>
            <div class="col ">
              {data[1]}
            </div>
            <div class="col">
              {data[2]}
            </div>
            <div class="col">
              {data[3]}
            </div>
          </div>
        </div>
        <div id="homeChildTwo" class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              {data[4]}
            </div>
            <div class="col">
              {data[5]}
            </div>
            <div class="col">
              {data[6]}
            </div>
            <div class="col">
              {data[7]}
            </div>
          </div>
        </div>
        <div  id="homeChildThree" class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              {data[8]}
            </div>
            <div class="col">
              {data[9]}
            </div>
            <div class="col">
              {data[10]}
            </div>
            <div class="col">
              {data[11]}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
