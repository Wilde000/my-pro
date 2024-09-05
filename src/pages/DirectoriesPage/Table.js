import DirectoriesPage from "../DirectoriesPage/index";
import { useState } from "react";
export const Table = () => {
    const [data, setData] = useState ([
      {
        id: 1,
        name: "Detail1",
        vendor: "Vendor1",
        height: 14.2,
        length: 14.4
      },
      {
        id: 2,
        name: "Detail2",
        vendor: "Vendor2",
        height: 13.2,
        length: 13.4
      }, 
      {
        id: 3,
        name: "Detail3",
        vendor: "Vendor3",
        height: 12.2,
        length: 12.4
      },
      {
        id: 4,
        name: "Detail4",
        vendor: "Vendor1",
        height: 11.2,
        length: 11.4
      },
      {
        id: 5,
        name: "Detail5",
        vendor: "Vendor5",
        height: 10.2,
        length: 10.4
      }
    ]);

    /* const addRow = () => {
      const newRow = {name: , height: } }*/
    
    return (
        data.map((bla) => ({id, name, vendor, height, length}) => (<DirectoriesPage key={id} name={name} vendor={vendor} height={height} length={length}/>) )
    )
}