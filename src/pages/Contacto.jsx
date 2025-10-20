import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

import "./Contacto.css";

function Contacto() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    plan: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Efecto para cargar datos desde la navegación
  useEffect(() => {
    if (location.state) {
      setFormData((prevState) => ({
        ...prevState,
        asunto: location.state.asunto || "",
        plan: location.state.plan || "",
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Preparar los datos para Supabase
      const contactData = {
        name: formData.nombre,
        email: formData.email,
        subject: formData.plan
          ? `${formData.asunto} - Servicio: ${formData.plan}`
          : formData.asunto,
        message: formData.mensaje,
      };

      // Guardar en Supabase
      const { data, error } = await supabase
        .from("contacts")
        .insert(contactData);

      if (error) {
        console.error("Error al guardar en Supabase:", error);
        setSubmitStatus({
          type: "warning",
          message:
            "Mensaje enviado por WhatsApp. Error al guardar en base de datos.",
        });
      } else {
        console.log("Contacto guardado exitosamente:", data);
        setSubmitStatus({
          type: "success",
          message:
            "Mensaje enviado y guardado exitosamente. Te contactaremos pronto.",
        });
      }

      // Número de WhatsApp (sin el signo + y con código de país)
      const phoneNumber = "51933975518";

      // Crear el mensaje formateado para WhatsApp
      let message = `*📩 Contacto desde Web Cernext*%0A%0A*👤 Nombre:* ${formData.nombre}%0A*✉️ Email:* ${formData.email}%0A*📝 Asunto:* ${formData.asunto}`;

      // Agregar plan si está seleccionado
      if (formData.plan) {
        message += `%0A*📋 Plan:* ${formData.plan}`;
      }

      message += `%0A*💬 Mensaje:* ${formData.mensaje}`;

      // Crear la URL de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      // Abrir WhatsApp en una nueva pestaña
      window.open(whatsappUrl, "_blank");

      // Limpiar el formulario después del envío exitoso
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        plan: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error inesperado:", error);
      setSubmitStatus({
        type: "error",
        message: "Ocurrió un error inesperado. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contáctanos</h1>

      <div className="contacto-info">
        <div className="contacto-card">
          <div className="contacto-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h3>Teléfono</h3>
          <p>
            988 490 319
            <br />
            933 975 518
          </p>
        </div>

        <div className="contacto-card">
          <div className="contacto-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Correo Electrónico</h3>
          <p>barclaydario@gmail.com</p>
        </div>
      </div>

      <div className="contacto-form-container" id="contacto-form-container">
        <h2>Envíanos un mensaje</h2>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              placeholder="Escribe el asunto de tu consulta"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="plan">Servicio de Interés (Opcional)</label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="select-plan"
            >
              <option value="">Selecciona un servicio (opcional)</option>
              <option value="Página Web Corporativa">
                Página Web Corporativa
              </option>
              <option value="E-commerce">E-commerce</option>
              <option value="Aplicación Web">
                Aplicación Web Personalizada
              </option>
              <option value="App Móvil">App Móvil</option>
              <option value="Sistema CRM">Sistema CRM</option>
              <option value="Sistema ERP">Sistema ERP</option>
              <option value="Cableado Estructurado">
                Cableado Estructurado
              </option>
              <option value="Red Wi-Fi">Red Wi-Fi Empresarial</option>
              <option value="Sistema de Vigilancia">
                Sistema de Vigilancia IP
              </option>
              <option value="Migración Cloud">Migración a la Nube</option>
              <option value="Hosting">Hosting Administrado</option>
              <option value="Consultoría">Consultoría Tecnológica</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Mensaje de estado */}
          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              <i
                className={`fas ${
                  submitStatus.type === "success"
                    ? "fa-check-circle"
                    : "fa-exclamation-triangle"
                }`}
              ></i>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Enviando...
              </>
            ) : (
              <>
                <i className="fab fa-whatsapp"></i>
                Enviar Mensaje
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
