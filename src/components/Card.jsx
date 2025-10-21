import React from "react";

function Card(props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md w-64">
      <img src={props.image} alt={props.title} className="rounded-lg mb-3" />
      <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        {props.buttonText}
      </button>
    </div>
  );
}

export default Card;
