import React from "react";

export function VIP() {
  return (
    <>
      
      <div className="flex flex-wrap place-items-center">
        <a
          href="#"
          className="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/pc.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              PC Gamer
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Intel Core i20 10th Gen 10-Core 3.6 GHz, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 4090 Ti 300GB GDDR6, Windows 13 Home
            </p>
          </div>
        </a>
        <a
          href="#"
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/iphone.webp"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
             iPhone 20 Pro Max Plus 
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              One of the best phones in the world we are proud to present to you as a gift for your graduation party
            </p>
          </div>
        </a>

        <a
          href="#"
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/cars.jpeg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              TV
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Smart TV con tematica de la pelicula de Disney de Cars 
            </p>
          </div>
        </a>
        <a
          href="#"
          class=" m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="checo.jpeg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Checo Perez
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Autografo y foto con el piloto de F1 Checo Perez
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
