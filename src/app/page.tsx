import Image from "next/image";
import { Form } from "./components/Form/Form";
import ImageMobileHome from '../../public/inicio-mobile.jpg'
import ImageMobileAbout from '../../public/nosotros-mobile.jpg'
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="home">
        <h2>Sabías que...?</h2>
        <div className="section-info card">
          <Image 
            src={ImageMobileHome}
            alt="Imagen de Inicio"
            width={500}
            height={289}
            className="image"
          />
          <div className="copy">
            <p>
              Según el informe del American Council on the Teaching of Foreign
              Languages (ACTFL), el dominio de un segundo idioma puede aumentar los
              ingresos de un individuo en un promedio del 10% al 15%. Este aumento
              puede variar dependiendo del sector y la ubicación geográfica, pero
              proporciona una indicación general del impacto económico positivo que
              puede tener el conocimiento de idiomas adicionales en el salario.
            </p>
            <p>
              Bienvenido a Idiomas, donde exploramos el poder y la belleza de los
              idiomas. Desde el español melódico hasta el tono suave del italiano,
              cada idioma es una ventana hacia una cultura única y fascinante.
            </p>
            <p>
              En un mundo cada vez más interconectado, dominar varios idiomas no
              solo es una habilidad invaluable, sino también una puerta abierta a
              nuevas oportunidades personales y profesionales. En Idiomas 360, nos
              apasiona ayudarte a navegar por este vasto universo lingüístico.
            </p>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>Qué es Idiomas 360?</h2>
        <div className="section-info card">
          <Image 
            src={ImageMobileAbout}
            alt="Imagen de seccion Nosotros"
            width={500}
            height={333}
            className="image"
          />
          <div className="copy">
            <p>
              Idiomas 360 va más allá de la enseñanza tradicional de idiomas,
              aplicamos una nueva metodología con resultados que van más allá del
              promedio.
            </p>
            <div>
              <h4>Por Qué Elegirnos</h4>
              <ul>
                <li>
                  <strong>Experiencia y Profesionalismo:</strong> Con años de
                  experiencia en la enseñanza de idiomas y servicios lingüísticos,
                  nuestros expertos están aquí para apoyarte en tu viaje
                  lingüístico.
                </li>
                <li>
                  <strong>Enfoque Personalizado:</strong> Cada estudiante es único,
                  por lo tanto, adaptamos nuestros métodos de enseñanza y servicios
                  para satisfacer tus necesidades individuales.
                </li>
                <li>
                  <strong>Pasión por los Idiomas:</strong> Nos apasiona lo que
                  hacemos y creemos en el poder transformador de los idiomas para
                  conectar a las personas y enriquecer vidas.
                </li>
              </ul>
            </div>

            <div>
              <h4>Únete a Nosotros</h4>
              <p>
                Ya sea que estés buscando expandir tus horizontes personales o
                mejorar las habilidades lingüísticas de tu equipo, estamos aquí para
                ayudarte a alcanzar tus objetivos. Explora nuestro sitio web para
                conocer más sobre nuestros servicios y cómo podemos ayudarte a
                alcanzar fluidez en el idioma.
              </p>
              <p>
                <strong>
                  ¡Descubre el mundo a través de los idiomas hoy mismo!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contáctanos</h2>
        <h4>Puedes hacernos llegar tus dudas y/o sugerencias a:</h4>
        <Form />
      </section>

      <section id="footer">
        <Footer />            
      </section>
      
    </main>
  );
}
