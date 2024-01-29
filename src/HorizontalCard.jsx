/* eslint-disable react/prop-types */
function HorizontalCard({ icon: Icon, title, list1, list2, list3 }) {
  return (
    <div className="card card-side bg-palette-sky-blue shadow-xl my-5">
      <div className="flex items-center justify-center pl-12 pr-8">
        <div className="bg-palette-orange p-4 rounded-full">
          <Icon size={64} style={{ color: "black" }} />
        </div>
      </div>
      <div className="card-body ">
        <h2 className="card-title text-palette-dark-blue text-2xl">{title}</h2>
        <ul className="list-disc">
          <li className="text-lg py-1">{list1}</li>
          <li className="text-lg py-1">{list2}</li>
          <li className="text-lg py-1">{list3}</li>
        </ul>
      </div>
    </div>
  );
}

export default HorizontalCard;
