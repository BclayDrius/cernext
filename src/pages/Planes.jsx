import { useNavigate } from "react-router-dom";
import "./Planes.css";

function Planes() {
  const navigate = useNavigate();

  const handleCotizar = (serviceName) => {
    navigate("/contacto", {
      state: {
        asunto: `Cotización de ${serviceName}`,
        servicio: serviceName,
      },
    });
    // Hacer scroll al formulario después de navegar
    setTimeout(() => {
      const formElement = document.getElementById("contacto-form-container");
      if (formElement) {
        formElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  return (
    <div className="servicios-container">
      <div className="servicios-header">
        <h2 className="servicios-title">Costos Aproximados de Servicios</h2>
        <p className="servicios-subtitle">
          Precios referenciales para nuestros servicios tecnológicos. Los costos
          finales pueden variar según los requerimientos específicos del
          proyecto.
        </p>
      </div>

      {/* Desarrollo Web */}
      <section className="categoria-servicios">
        <h3 className="categoria-title">
          <i className="bi bi-globe"></i>
          Desarrollo Web
        </h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h4>Página Web Corporativa</h4>
            <div className="servicio-price">$800 - $2,500</div>
            <ul className="servicio-features">
              <li>Diseño responsive</li>
              <li>5-10 páginas</li>
              <li>CMS básico</li>
              <li>SEO básico</li>
              <li>Formularios de contacto</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Página Web Corporativa")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>E-commerce</h4>
            <div className="servicio-price">$2,000 - $8,000</div>
            <ul className="servicio-features">
              <li>Catálogo de productos</li>
              <li>Carrito de compras</li>
              <li>Pasarelas de pago</li>
              <li>Panel administrativo</li>
              <li>Gestión de inventario</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("E-commerce")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Aplicación Web Personalizada</h4>
            <div className="servicio-price">$5,000 - $25,000</div>
            <ul className="servicio-features">
              <li>Funcionalidades específicas</li>
              <li>Base de datos compleja</li>
              <li>Múltiples usuarios</li>
              <li>APIs integradas</li>
              <li>Dashboard avanzado</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Aplicación Web Personalizada")}
            >
              Cotizar
            </button>
          </div>
        </div>
      </section>

      {/* Aplicaciones Móviles */}
      <section className="categoria-servicios">
        <h3 className="categoria-title">
          <i className="bi bi-phone"></i>
          Aplicaciones Móviles
        </h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h4>App Móvil Básica</h4>
            <div className="servicio-price">$3,000 - $8,000</div>
            <ul className="servicio-features">
              <li>iOS y Android</li>
              <li>Funcionalidades básicas</li>
              <li>Diseño nativo</li>
              <li>Integración con APIs</li>
              <li>Publicación en stores</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("App Móvil Básica")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>App Empresarial</h4>
            <div className="servicio-price">$8,000 - $20,000</div>
            <ul className="servicio-features">
              <li>Funcionalidades avanzadas</li>
              <li>Backend personalizado</li>
              <li>Notificaciones push</li>
              <li>Sincronización offline</li>
              <li>Analytics integrado</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("App Empresarial")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>App E-commerce</h4>
            <div className="servicio-price">$10,000 - $30,000</div>
            <ul className="servicio-features">
              <li>Catálogo móvil</li>
              <li>Pagos integrados</li>
              <li>Gestión de pedidos</li>
              <li>Programa de lealtad</li>
              <li>Geolocalización</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("App E-commerce")}
            >
              Cotizar
            </button>
          </div>
        </div>
      </section>

      {/* Sistemas Empresariales */}
      <section className="categoria-servicios">
        <h3 className="categoria-title">
          <i className="bi bi-building"></i>
          Sistemas Empresariales
        </h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h4>Sistema CRM</h4>
            <div className="servicio-price">$4,000 - $15,000</div>
            <ul className="servicio-features">
              <li>Gestión de clientes</li>
              <li>Pipeline de ventas</li>
              <li>Reportes y analytics</li>
              <li>Integración email</li>
              <li>Automatización</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Sistema CRM")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Sistema ERP</h4>
            <div className="servicio-price">$15,000 - $50,000</div>
            <ul className="servicio-features">
              <li>Gestión integral</li>
              <li>Inventarios</li>
              <li>Contabilidad</li>
              <li>Recursos humanos</li>
              <li>Reportes avanzados</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Sistema ERP")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Sistema de Inventario</h4>
            <div className="servicio-price">$2,500 - $10,000</div>
            <ul className="servicio-features">
              <li>Control de stock</li>
              <li>Códigos de barras</li>
              <li>Alertas automáticas</li>
              <li>Reportes de movimientos</li>
              <li>Múltiples almacenes</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Sistema de Inventario")}
            >
              Cotizar
            </button>
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="categoria-servicios">
        <h3 className="categoria-title">
          <i className="bi bi-hdd-network"></i>
          Infraestructura y Redes
        </h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h4>Cableado Estructurado</h4>
            <div className="servicio-price">$15 - $25 /punto</div>
            <ul className="servicio-features">
              <li>Cable Cat 6/6A</li>
              <li>Certificación incluida</li>
              <li>Canaletas y accesorios</li>
              <li>Documentación técnica</li>
              <li>Garantía 15 años</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Cableado Estructurado")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Red Wi-Fi Empresarial</h4>
            <div className="servicio-price">$800 - $3,000</div>
            <ul className="servicio-features">
              <li>Access Points profesionales</li>
              <li>Controlador centralizado</li>
              <li>Configuración avanzada</li>
              <li>Monitoreo remoto</li>
              <li>Soporte técnico</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Red Wi-Fi Empresarial")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Sistema de Vigilancia IP</h4>
            <div className="servicio-price">$200 - $500 /cámara</div>
            <ul className="servicio-features">
              <li>Cámaras IP 4K</li>
              <li>Grabación NVR</li>
              <li>Acceso remoto</li>
              <li>Detección inteligente</li>
              <li>Almacenamiento cloud</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Sistema de Vigilancia IP")}
            >
              Cotizar
            </button>
          </div>
        </div>
      </section>

      {/* Servicios Cloud */}
      <section className="categoria-servicios">
        <h3 className="categoria-title">
          <i className="bi bi-cloud"></i>
          Servicios Cloud y Hosting
        </h3>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h4>Migración a la Nube</h4>
            <div className="servicio-price">$2,000 - $10,000</div>
            <ul className="servicio-features">
              <li>Análisis de infraestructura</li>
              <li>Plan de migración</li>
              <li>Configuración cloud</li>
              <li>Pruebas y validación</li>
              <li>Capacitación del equipo</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Migración a la Nube")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Hosting Administrado</h4>
            <div className="servicio-price">$50 - $500 /mes</div>
            <ul className="servicio-features">
              <li>Servidor dedicado/VPS</li>
              <li>Monitoreo 24/7</li>
              <li>Backups automáticos</li>
              <li>SSL incluido</li>
              <li>Soporte técnico</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Hosting Administrado")}
            >
              Cotizar
            </button>
          </div>

          <div className="servicio-card">
            <h4>Backup y Recuperación</h4>
            <div className="servicio-price">$300 - $1,500</div>
            <ul className="servicio-features">
              <li>Estrategia de backup</li>
              <li>Automatización completa</li>
              <li>Almacenamiento seguro</li>
              <li>Plan de recuperación</li>
              <li>Pruebas periódicas</li>
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => handleCotizar("Backup y Recuperación")}
            >
              Cotizar
            </button>
          </div>
        </div>
      </section>

      {/* Nota importante */}
      <div className="servicios-note">
        <div className="note-content">
          <i className="bi bi-info-circle"></i>
          <div>
            <h4>Nota Importante</h4>
            <p>
              Los precios mostrados son aproximados y pueden variar según la
              complejidad, requerimientos específicos y alcance del proyecto.
              Todos nuestros servicios incluyen garantía, soporte técnico y
              documentación completa.
            </p>
            <p>
              <strong>Contacta con nosotros</strong> para una cotización
              personalizada y detallada de tu proyecto específico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;
