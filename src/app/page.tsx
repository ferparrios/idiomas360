import Image from "next/image";
import { Form } from "./components/Form/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="home">
        <h2>Sabías que...?</h2>
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
      </section>
      <section id="about">
        <h2>Qué es Idiomas 360?</h2>
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
              ¡Descubre el mundo a través de los idiomas con [Nombre de tu
              Empresa] hoy mismo!
            </strong>
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contáctanos</h2>
        <h4>Puedes hacernos llegar tus dudas y/o sugerencias a:</h4>
        <Form />
      </section>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing &nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
