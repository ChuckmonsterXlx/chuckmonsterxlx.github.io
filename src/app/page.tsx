import { Navbar } from "@/components";
import { BsBootstrap } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiNodejsFill, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 px-5 py-3 text-center lg:grid-cols-2">
        <div className="content-center py-24 lg:p-24">
          <p className="text-3xl lg:text-5xl">{`I'm a Full Stack Web Developer`}</p>
        </div>
        <div className="grid gap-10 lg:p-24">
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
              className={`${styles.iconContainer} bg-white rounded p-[2px] cursor-pointer w-fit w-fit`}
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
        </div>
      </main>
    </>
  );
}
