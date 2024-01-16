import { IconSettings } from "@tabler/icons-react";

function HorizontalCard() {
  return (
    <div className="card card-side bg-base-100 shadow-xl my-5">
      <div className="flex items-center justify-center px-5">
        <IconSettings size={64} />
      </div>
      <div className="card-body">
        <h2 className="card-title">Servicio 1</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
}

export default HorizontalCard;
