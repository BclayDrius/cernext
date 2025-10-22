import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleVerPlanes = () => {
    navigate("/planes");
  };

  const handleHablarConNosotros = () => {
    navigate("/contacto");
  };

  const handleSolicitarInformacion = () => {
    navigate("/contacto");
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
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1
          className="hero-title"
          data-text="Soluciones Tecnológicas Integrales"
        >
          Soluciones Tecnológicas Integrales
        </h1>
        <p className="hero-subtitle">
          Desde el cableado físico hasta aplicaciones móviles. Tu socio
          tecnológico completo para transformar tu negocio.
        </p>
        <div className="cta-buttons">
          <button
            className="btn btn-primary btn-hero"
            onClick={handleVerPlanes}
          >
            <span>Ver Precios</span>
            <i className="arrow">→</i>
          </button>
          <button
            className="btn btn-secondary btn-hero"
            onClick={handleHablarConNosotros}
          >
            <span>Consulta Gratuita</span>
            <i className="arrow">💬</i>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-header">
            <div className="about-text">
              <h2 className="section-title">¿Quiénes Somos?</h2>
              <p className="about-description">
                <strong>Cernext</strong> es una empresa líder en soluciones
                tecnológicas integrales con más de una década de experiencia
                transformando negocios a través de la tecnología. Nos
                especializamos en ofrecer servicios completos que van desde la
                infraestructura física hasta el desarrollo de software avanzado.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/icons/team-collaboration.jpg"
                alt="Equipo Cernext trabajando en soluciones tecnológicas"
                className="about-img"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <i className="bi bi-people-fill"></i>
                  <span>Equipo Experto</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Ofrecemos soluciones tecnológicas completas para empresas de todos los
          tamaños
        </p>
        <div className="services-categories">
          <div className="service-category">
            <div className="category-icon">
              <i className="bi bi-hdd-network"></i>
            </div>
            <h3>Infraestructura Física</h3>
            <p>
              Cableado estructurado, redes, instalación de equipos y sistemas de
              comunicación
            </p>
          </div>
          <div className="service-category">
            <div className="category-icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <h3>Desarrollo de Software</h3>
            <p>
              Aplicaciones web, móviles, de escritorio y sistemas empresariales
              personalizados
            </p>
          </div>
          <div className="service-category">
            <div className="category-icon">
              <i className="bi bi-cloud-arrow-up"></i>
            </div>
            <h3>Soluciones en la Nube</h3>
            <p>Migración, hosting, backup y gestión de infraestructura cloud</p>
          </div>
          <div className="service-category">
            <div className="category-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>Ciberseguridad</h3>
            <p>
              Protección de datos, auditorías de seguridad y sistemas de
              monitoreo
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="infrastructure-section">
        <h2 className="section-title">Infraestructura y Cableado</h2>
        <p className="section-subtitle">
          Construimos la base tecnológica sólida que tu empresa necesita
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-ethernet"></i>
            </div>
            <h3>Cableado Estructurado</h3>
            <p>
              Instalación de redes de datos Cat 5e, Cat 6, Cat 6A y fibra
              óptica. Certificación y documentación completa.
            </p>
            <ul>
              <li>Diseño de topología de red</li>
              <li>Instalación de canaletas y bandejas</li>
              <li>Certificación con equipos Fluke</li>
              <li>Documentación técnica completa</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-router"></i>
            </div>
            <h3>Equipos de Red</h3>
            <p>
              Instalación y configuración de switches, routers, access points y
              equipos de comunicación empresarial.
            </p>
            <ul>
              <li>Switches administrables</li>
              <li>Routers empresariales</li>
              <li>Access Points Wi-Fi 6</li>
              <li>Firewalls y seguridad</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-camera-video"></i>
            </div>
            <h3>Sistemas de Vigilancia</h3>
            <p>
              Cámaras IP, sistemas de grabación NVR, control de acceso y
              monitoreo remoto 24/7.
            </p>
            <ul>
              <li>Cámaras IP 4K</li>
              <li>Sistemas NVR/DVR</li>
              <li>Control de acceso biométrico</li>
              <li>Monitoreo remoto</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-telephone"></i>
            </div>
            <h3>Telefonía IP</h3>
            <p>
              Centrales telefónicas IP, softphones, integración con CRM y
              grabación de llamadas.
            </p>
            <ul>
              <li>Centrales IP Asterisk/FreePBX</li>
              <li>Teléfonos IP empresariales</li>
              <li>Integración con CRM</li>
              <li>Grabación y reportes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="development-section">
        <h2 className="section-title">Desarrollo de Software</h2>
        <p className="section-subtitle">
          Creamos soluciones de software personalizadas para impulsar tu negocio
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-globe"></i>
            </div>
            <h3>Aplicaciones Web</h3>
            <p>
              Desarrollo de aplicaciones web modernas, responsivas y escalables
              usando las últimas tecnologías.
            </p>
            <ul>
              <li>React, Vue.js, Angular</li>
              <li>Node.js, Python, PHP</li>
              <li>APIs RESTful y GraphQL</li>
              <li>Progressive Web Apps (PWA)</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3>Apps Móviles</h3>
            <p>
              Aplicaciones nativas e híbridas para iOS y Android con experiencia
              de usuario excepcional.
            </p>
            <ul>
              <li>React Native, Flutter</li>
              <li>iOS (Swift) y Android (Kotlin)</li>
              <li>Integración con APIs</li>
              <li>Publicación en stores</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-laptop"></i>
            </div>
            <h3>Software de Escritorio</h3>
            <p>
              Aplicaciones de escritorio robustas para Windows, macOS y Linux
              con interfaces intuitivas.
            </p>
            <ul>
              <li>Electron, .NET, Java</li>
              <li>Python (Tkinter, PyQt)</li>
              <li>C++ multiplataforma</li>
              <li>Integración con hardware</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-building"></i>
            </div>
            <h3>Sistemas Empresariales</h3>
            <p>
              ERP, CRM, sistemas de inventario y soluciones empresariales
              completas y personalizadas.
            </p>
            <ul>
              <li>Sistemas ERP personalizados</li>
              <li>CRM y gestión de clientes</li>
              <li>Control de inventarios</li>
              <li>Facturación electrónica</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Database Solutions */}
      <section className="database-section">
        <h2 className="section-title">Bases de Datos y Analytics</h2>
        <p className="section-subtitle">
          Gestión inteligente de datos para decisiones empresariales informadas
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-database"></i>
            </div>
            <h3>Diseño de Bases de Datos</h3>
            <p>
              Arquitectura y diseño de bases de datos relacionales y NoSQL
              optimizadas para rendimiento.
            </p>
            <ul>
              <li>MySQL, PostgreSQL, SQL Server</li>
              <li>MongoDB, Redis, Elasticsearch</li>
              <li>Optimización de consultas</li>
              <li>Modelado de datos</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h3>Business Intelligence</h3>
            <p>
              Dashboards interactivos, reportes automatizados y análisis de
              datos para toma de decisiones.
            </p>
            <ul>
              <li>Power BI, Tableau</li>
              <li>Dashboards personalizados</li>
              <li>Reportes automatizados</li>
              <li>KPIs y métricas</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-arrow-repeat"></i>
            </div>
            <h3>Migración de Datos</h3>
            <p>
              Migración segura de datos entre sistemas, limpieza y
              transformación de información.
            </p>
            <ul>
              <li>ETL (Extract, Transform, Load)</li>
              <li>Migración entre SGBD</li>
              <li>Limpieza de datos</li>
              <li>Validación e integridad</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-shield-lock"></i>
            </div>
            <h3>Backup y Recuperación</h3>
            <p>
              Estrategias de respaldo automatizadas y planes de recuperación
              ante desastres.
            </p>
            <ul>
              <li>Backups automatizados</li>
              <li>Replicación de datos</li>
              <li>Planes de recuperación</li>
              <li>Monitoreo continuo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="cloud-section">
        <h2 className="section-title">Soluciones en la Nube</h2>
        <p className="section-subtitle">
          Moderniza tu infraestructura con soluciones cloud escalables y seguras
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-cloud-upload"></i>
            </div>
            <h3>Migración a la Nube</h3>
            <p>
              Migración completa de sistemas on-premise a cloud con mínimo
              downtime y máxima seguridad.
            </p>
            <ul>
              <li>AWS, Azure, Google Cloud</li>
              <li>Análisis de infraestructura</li>
              <li>Plan de migración</li>
              <li>Optimización de costos</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-server"></i>
            </div>
            <h3>Hosting y Servidores</h3>
            <p>
              Servidores dedicados, VPS, hosting compartido y CDN para máximo
              rendimiento web.
            </p>
            <ul>
              <li>Servidores dedicados</li>
              <li>VPS administrados</li>
              <li>CDN global</li>
              <li>SSL y certificados</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-diagram-3"></i>
            </div>
            <h3>Arquitectura Cloud</h3>
            <p>
              Diseño de arquitecturas cloud escalables, resilientes y
              optimizadas para tu negocio.
            </p>
            <ul>
              <li>Microservicios</li>
              <li>Contenedores Docker</li>
              <li>Kubernetes</li>
              <li>Serverless computing</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-gear"></i>
            </div>
            <h3>DevOps y CI/CD</h3>
            <p>
              Automatización de despliegues, integración continua y monitoreo de
              aplicaciones.
            </p>
            <ul>
              <li>Jenkins, GitLab CI</li>
              <li>Terraform, Ansible</li>
              <li>Monitoreo con Grafana</li>
              <li>Automatización completa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="security-section">
        <h2 className="section-title">Ciberseguridad</h2>
        <p className="section-subtitle">
          Protege tu empresa con soluciones de seguridad avanzadas y monitoreo
          24/7
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>Auditorías de Seguridad</h3>
            <p>
              Evaluación completa de vulnerabilidades, pentesting y análisis de
              riesgos de seguridad.
            </p>
            <ul>
              <li>Pentesting ético</li>
              <li>Análisis de vulnerabilidades</li>
              <li>Evaluación de riesgos</li>
              <li>Reportes detallados</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-eye"></i>
            </div>
            <h3>Monitoreo 24/7</h3>
            <p>
              Centro de operaciones de seguridad (SOC) con monitoreo continuo y
              respuesta a incidentes.
            </p>
            <ul>
              <li>SOC 24/7/365</li>
              <li>SIEM y análisis</li>
              <li>Respuesta a incidentes</li>
              <li>Alertas en tiempo real</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-lock"></i>
            </div>
            <h3>Protección de Datos</h3>
            <p>
              Cifrado de datos, gestión de accesos, cumplimiento GDPR y
              protección de información sensible.
            </p>
            <ul>
              <li>Cifrado end-to-end</li>
              <li>Gestión de identidades</li>
              <li>Cumplimiento GDPR</li>
              <li>DLP (Data Loss Prevention)</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="bi bi-bug"></i>
            </div>
            <h3>Antimalware y EDR</h3>
            <p>
              Protección avanzada contra malware, ransomware y amenazas
              persistentes avanzadas (APT).
            </p>
            <ul>
              <li>EDR (Endpoint Detection)</li>
              <li>Anti-ransomware</li>
              <li>Sandboxing</li>
              <li>Threat intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="features-header">
          <h2 className="section-title" data-text="¿Por qué elegir Cernext?">
            ¿Por qué elegir Cernext?
          </h2>
          <p className="section-subtitle">
            Somos tu socio tecnológico integral con experiencia comprobada y
            resultados excepcionales
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-award"></i>
            </div>
            <h3 className="feature-title">Experiencia Comprobada</h3>
            <p className="feature-description">
              Más de 10 años desarrollando soluciones tecnológicas para empresas
              de todos los sectores y tamaños.
            </p>
            <div className="feature-highlight">10+ Años</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-people"></i>
            </div>
            <h3 className="feature-title">Equipo Especializado</h3>
            <p className="feature-description">
              Ingenieros certificados en las principales tecnologías y
              metodologías de desarrollo ágil.
            </p>
            <div className="feature-highlight">Certificados</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-tools"></i>
            </div>
            <h3 className="feature-title">Soluciones Integrales</h3>
            <p className="feature-description">
              Desde infraestructura física hasta software avanzado. Todo lo que
              necesitas en un solo lugar.
            </p>
            <div className="feature-highlight">Todo Incluido</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-headset"></i>
            </div>
            <h3 className="feature-title">Soporte 24/7</h3>
            <p className="feature-description">
              Soporte técnico especializado disponible las 24 horas para
              garantizar la continuidad de tu negocio.
            </p>
            <div className="feature-highlight">Siempre Disponible</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-graph-up-arrow"></i>
            </div>
            <h3 className="feature-title">Escalabilidad</h3>
            <p className="feature-description">
              Soluciones que crecen contigo. Arquitecturas escalables que se
              adaptan al crecimiento de tu empresa.
            </p>
            <div className="feature-highlight">Crece Contigo</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-currency-dollar"></i>
            </div>
            <h3 className="feature-title">ROI Garantizado</h3>
            <p className="feature-description">
              Nuestras soluciones están diseñadas para generar retorno de
              inversión medible y sostenible.
            </p>
            <div className="feature-highlight">ROI Positivo</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-lightning"></i>
            </div>
            <h3 className="feature-title">Implementación Rápida</h3>
            <p className="feature-description">
              Metodologías ágiles que nos permiten entregar resultados en
              tiempos récord sin comprometer la calidad.
            </p>
            <div className="feature-highlight">Entrega Rápida</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-patch-check"></i>
            </div>
            <h3 className="feature-title">Calidad Certificada</h3>
            <p className="feature-description">
              Procesos certificados ISO 9001, metodologías ITIL y mejores
              prácticas de la industria.
            </p>
            <div className="feature-highlight">ISO 9001</div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section">
        <h2 className="section-title">Sectores que Atendemos</h2>
        <p className="section-subtitle">
          Experiencia especializada en múltiples industrias y sectores
          empresariales
        </p>
        <div className="industries-grid">
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-hospital"></i>
            </div>
            <h3>Salud</h3>
            <p>
              Sistemas hospitalarios, historias clínicas electrónicas,
              telemedicina
            </p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-bank"></i>
            </div>
            <h3>Financiero</h3>
            <p>Sistemas bancarios, fintech, pagos digitales, blockchain</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-mortarboard"></i>
            </div>
            <h3>Educación</h3>
            <p>Plataformas e-learning, gestión académica, aulas virtuales</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-cart"></i>
            </div>
            <h3>Retail</h3>
            <p>E-commerce, POS, gestión de inventarios, omnicanalidad</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-truck"></i>
            </div>
            <h3>Logística</h3>
            <p>Sistemas WMS, tracking, optimización de rutas, IoT</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">
              <i className="bi bi-building"></i>
            </div>
            <h3>Inmobiliario</h3>
            <p>CRM inmobiliario, portales web, gestión de propiedades</p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-section">
        <h2 className="section-title">Tecnologías que Dominamos</h2>
        <p className="section-subtitle">
          Trabajamos con las tecnologías más avanzadas y demandadas del mercado
        </p>
        <div className="tech-categories">
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-palette"></i>
              </div>
              <h3>Frontend</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Angular</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Nuxt.js</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-server"></i>
              </div>
              <h3>Backend</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">C#/.NET</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">Go</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-phone"></i>
              </div>
              <h3>Móvil</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Swift</span>
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">Xamarin</span>
              <span className="tech-tag">Ionic</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-database"></i>
              </div>
              <h3>Bases de Datos</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">Elasticsearch</span>
              <span className="tech-tag">Oracle</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-cloud"></i>
              </div>
              <h3>Cloud</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Azure</span>
              <span className="tech-tag">Google Cloud</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
              <span className="tech-tag">Terraform</span>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-header">
              <div className="tech-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h3>DevOps</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">Jenkins</span>
              <span className="tech-tag">GitLab CI</span>
              <span className="tech-tag">Ansible</span>
              <span className="tech-tag">Grafana</span>
              <span className="tech-tag">Prometheus</span>
              <span className="tech-tag">ELK Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title" data-text="¿Listo para comenzar?">
          ¿Listo para comenzar?
        </h2>
        <p className="cta-description">
          Contáctanos hoy mismo para una consulta gratuita
        </p>
        <button
          className="btn btn-primary btn-cta"
          onClick={handleSolicitarInformacion}
        >
          <span>Solicitar Información</span>
          <i className="arrow">✨</i>
        </button>
      </section>
    </>
  );
}

export default Home;
