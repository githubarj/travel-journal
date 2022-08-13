import React from "react"
import Navbar from "./Components/Navbar"
import Places from "./Components/Places"
import data from "./data.json"
import "./index.css"

export default function App() {

  const trips = data.map( place => <Places key={place.id} {...place} />)

  return (
    <div>
      <Navbar />
      <div className="trips">
        {trips}
      </div>
    </div>
  );
}