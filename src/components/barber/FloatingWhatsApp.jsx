"use client";

import Link from "next/link";

const FloatingWhatsApp = ({
  phoneNumber,
  message = "¡Hola! Estoy interesado(a) en el Planificador para Mascotas 🐾. ¿Me puedes dar más información?",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-2 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M12 .5C5.649.5.5 5.649.5 12c0 2.126.559 4.142 1.618 5.932L.5 23.5l5.721-1.581C7.982 22.574 9.94 23.5 12 23.5 18.351 23.5 23.5 18.351 23.5 12S18.351.5 12 .5zm0 2c5.522 0 10 4.478 10 10s-4.478 10-10 10c-1.9 0-3.729-.53-5.313-1.521l-.384-.237-3.512.97.944-3.319-.247-.393A9.968 9.968 0 0 1 2 12c0-5.522 4.478-10 10-10zm-3.477 5.553c-.194-.433-.402-.44-.59-.447-.151-.006-.324-.007-.496-.007s-.454.065-.692.323c-.238.258-.907.89-.907 2.171s.928 2.521 1.057 2.693c.13.172 1.81 2.903 4.465 3.947 2.204.855 2.648.684 3.124.641.477-.043 1.54-.626 1.757-1.23.217-.604.217-1.122.152-1.23-.064-.107-.238-.172-.496-.302-.258-.13-1.54-.757-1.78-.843-.238-.086-.412-.129-.59.129-.179.258-.678.843-.832 1.02-.153.173-.305.194-.563.065-.259-.13-1.092-.401-2.079-1.278-.768-.684-1.285-1.532-1.433-1.79-.151-.26-.017-.397.113-.524.116-.115.259-.302.389-.453.13-.152.173-.216.26-.367.086-.151.043-.28-.022-.41-.065-.13-.59-1.472-.807-2.014z"></path>
      </svg>
    </Link>
  );
};

export default FloatingWhatsApp;
