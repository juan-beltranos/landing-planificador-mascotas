"use client";

const ButtonPay = () => {
  const handleClick = () => {
    window.open(process.env.NEXT_PUBLIC_URL_PAY, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block bg-primary hover:bg-primary-dark text-white text-xl text-center p-2 rounded-xl shadow-md transition duration-300 ease-in-out w-auto font-semibold"
    >
      Obtener el Planificador por{" "}
      <span className="font-bold ">$12.000 COP</span>
    </button>
  );
};

export default ButtonPay;
