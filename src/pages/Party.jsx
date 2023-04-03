import { useEffect } from "react";
import React from "react";


export function Party() {
  const absoluteChairs = [
    "bottom-0 left-0",
    "bottom-1/3 -left-5",
    "top-0 left-0",
    "-top-5 left-1/2",
    "bottom-0 right-0",
    "bottom-1/3 -right-5",
    "top-0 right-0",
    "-bottom-5 right-1/2",
  ];

  useEffect(() => {
    const studentsGrid = document.querySelector("#students-grid");

    for (let i = 0; i < 20; i++) {
      const table = document.createElement("div");
      table.className = "z-40 w-24 h-24 bg-blue-400 ";

      const tableContainer = document.createElement("div");
      tableContainer.className =
        "relative p-6 flex justify-center items-center";

      for (let j = 0; j < 8; j++) {
        const chairContainer = document.createElement("div");
        chairContainer.className = `z-50 absolute ${absoluteChairs[j]} w-6 h-6 bg-transparent`;

        const chairImg = document.createElement("img");
        chairImg.src = "/chair-available.png";
        chairImg.alt = "";

        chairContainer.appendChild(chairImg);
        tableContainer.appendChild(chairContainer);
      }

      tableContainer.appendChild(table);
      studentsGrid.appendChild(tableContainer);
    }
  }, []);
  return (
    <>
       
      <div class="flex justify-center"> 
      
        <div class="w-5/6 bg-stone-200 flex p-12"> 
            <div 
              class="w-full h-18 grid grid-cols-5 place-items-center px-5 " id="students-grid">
            </div>   
        </div>

      </div>
    </>
  );
}
