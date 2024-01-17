import { IconSettings } from "@tabler/icons-react";

function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="flex justify-center pt-5">
        <IconSettings size={64} />
      </div>
      <div className="card-body">
        <h2 className="card-title flex justify-center text-center">
          Servicio 1
        </h2>
        <p className="text-center">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
}

export default Card;
