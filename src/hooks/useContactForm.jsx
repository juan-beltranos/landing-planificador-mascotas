import { useState, useEffect } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    userType: "client",
    country: "",
    captchaToken: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const storedCountry = localStorage.getItem("country") || "CO";

      setFormData((prevData) => ({
        ...prevData,
        userType: path === "/taskers" ? "tasker" : "client",
        country: storedCountry,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, captchaToken) => {
    e.preventDefault();
    setLoading(true);

    console.log("📩 Enviando datos...", { ...formData, captchaToken });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario.");
      }

      setSuccessMessage("¡Tu mensaje ha sido enviado con éxito! 🐾");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        userType: formData.userType,
        country: formData.country,
        captchaToken: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("❌ Error al enviar el formulario:", error);
      alert(
        "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    successMessage,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
