import { Navbar } from "@/components";
import { BsBootstrap, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiNodejsFill, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="grid grid-cols-1 px-5 py-3 lg:grid-cols-2">
        <section className="content-center col-span-1 py-24 lg:p-24">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#172554] mb-4">
            {`Hello 👋 I'm a passionate Full Stack Web Developer`}
          </h1>
          <p className="mb-4 text-lg text-gray-700 lg:text-xl">
            I have experience creating web and mobile applications using
            JavaScript, TypeScript, React.js, Next.js, React Native, and
            Node.js.
          </p>
          <div className="flex justify-center pt-10">
            <a
              href="/cv/Alfonso_Velarde_Mota_Developer_CV.pdf"
              download
              className="px-6 py-3 text-lg font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </section>

        <section className="grid col-span-1 gap-10 pb-24 lg:p-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172554] mb-8 text-center lg:hidden">
            Skills & Technologies
          </h2>

          <div className="grid items-center grid-cols-2 gap-10 lg:grid-cols-2">
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <TbBrandTypescript size={50} color="#3178c6" />
              <span className={styles.iconTitle}>TypeScript</span>
            </div>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 lg:grid-cols-2">
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <RiNodejsFill size={50} color="#68a063" />
              <span className={styles.iconTitle}>Node.js</span>
            </div>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 lg:grid-cols-2">
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <GrReactjs size={50} color="#61dafb" />
              <span className={styles.iconTitle}>React</span>
            </div>
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <RiNextjsLine size={50} color="black" />
              <span className={styles.iconTitle}>Next.js</span>
            </div>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 lg:grid-cols-2">
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <TbBrandReactNative size={50} color="#61dafb" />
              <span className={styles.iconTitle}>React Native</span>
            </div>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 lg:grid-cols-2">
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <RiTailwindCssLine size={50} color="#38bdf8" />
              <span className={styles.iconTitle}>Tailwind CSS</span>
            </div>
            <div
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit`}
            >
              <BsBootstrap size={50} color="#7952b3" />
              <span className={styles.iconTitle}>Bootstrap</span>
            </div>
          </div>
        </section>

        <section className="col-span-1 pb-24 lg:px-5 lg:pb-24 lg:col-span-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#172554] mb-4">
            Experience
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="p-5 bg-white rounded-lg shadow-lg lg:col-span-2">
              <h3 className="mb-2 text-xl font-bold">Full Stack Developer</h3>
              <p className="mb-2 text-gray-700">DevTech - 2024 to Present</p>
              <p className="text-gray-700">
                Currently working as a Full Stack Developer at DevTech,
                developing web and mobile applications using React, Next.js,
                MongoDB, Express, Node.js, and React Native. Collaborating with
                cross-functional teams to deliver innovative and scalable
                solutions.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold">
                Freelance Full Stack Developer
              </h3>
              <p className="mb-2 text-gray-700">Freelance - 2023</p>
              <p className="text-gray-700">
                Developed full-stack web applications using React, Next.js,
                MongoDB, Express, Node.js, and React Native. Worked on various
                projects, delivering high-quality code and maintaining best
                practices in software development.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Freelance Web Designer</h3>
              <p className="mb-2 text-gray-700">Freelance - 2021 & 2022</p>
              <p className="text-gray-700">
                Designed and developed web pages using HTML and CSS. Created
                custom WordPress themes and templates, ensuring responsive and
                user-friendly designs.
              </p>
            </div>
          </div>
        </section>

        <section className="col-span-1 pb-24 lg:px-5 lg:pb-24 lg:col-span-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#172554] mb-4">
            Contact
          </h2>
          <form className="p-5 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              className="px-6 py-3 text-lg font-bold text-white transition duration-300 bg-gray-400 rounded-lg shadow-lg cursor-not-allowed "
              type="submit"
              disabled={true}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="py-6 mt-10 text-white bg-gray-800">
        <div className="container flex flex-col items-center mx-auto">
          <div className="flex mb-4">
            <a
              href="https://github.com/ChuckmonsterXlx"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transition duration-300 hover:text-gray-400"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/alfonso-velarde-mota-43b273217/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transition duration-300 hover:text-gray-400"
            >
              <BsLinkedin size={30} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
