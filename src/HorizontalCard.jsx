/* eslint-disable react/prop-types */
function HorizontalCard({
  icon: Icon,
  title,
  list1,
  list2,
  list3,
  list4 = "",
}) {
  return (
    <div className="card lg:card-side pt-10 lg:pt-0 bg-palette-sky-blue shadow-xl transition hover:shadow-2xl">
      <div className="flex items-center justify-center pl-10 pr-8">
        <div className="bg-palette-orange p-4 rounded-full">
          <Icon size={48} style={{ color: "black" }} />
        </div>
      </div>
      <div className="card-body ">
        <h2 className="card-title text-palette-dark-blue text-xl text-center lg:text-left">
          {title}
        </h2>
        <ul className="list-disc">
          <li className="text-md ">{list1}</li>
          <li className="text-md ">{list2}</li>
          <li className="text-md ">{list3}</li>
          {list4 !== "" ? <li className="text-md ">{list4}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalCard;
