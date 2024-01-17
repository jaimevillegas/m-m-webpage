/* eslint-disable react/prop-types */
function Card({ image, icon: Icon, title, description }) {
  return (
    <div className="card w-1/3 gap-10 bg-base-100 shadow-xl">
      <figure>
        <img className="w-3/4  p-4 object-scale-down" src={image} alt="Shoes" />
      </figure>
      <div className="flex justify-center items-center m-0 p-0">
        <div className="flex justify-center items-center bg-orange-400 rounded-full w-30 h-30 p-3">
          <Icon size={64} />
        </div>
      </div>
      <div className="card-body m-0 pt-0">
        <h2 className="card-title flex justify-center text-center">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

export default Card;
