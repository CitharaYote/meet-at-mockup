import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const section1Ref = useRef(null);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  return (
    <div className="">
      <div className="relative h-[90vh] gradient-background w-full flex flex-col items-center justify-center gap-y-16">
        <div className="text-white grid grid-cols-2 gap-x-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-6xl font-bold">App Name</h1>
            <motion.h1
              className="text-6xl font-bold absolute top-2 left-2 overflow-visible whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.2, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              App Name
            </motion.h1>
            <motion.h1
              className="text-6xl font-bold absolute top-4 left-4 overflow-visible whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              App Name
            </motion.h1>
          </motion.div>
          <div>
            <motion.ul className="space-y-4 text-lg">
              <motion.li
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-row items-center gap-x-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Wow look!
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-row items-center gap-x-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                This is the
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-row items-center gap-x-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Rule of 3!
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div>
          <motion.button
            className="rounded-lg border border-white px-8 py-4 text-white hover:text-main-pink transition-colors hover:bg-white shadow-md flex flex-row items-center gap-x-2"
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.25,
                delay: 0,
              },
            }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </motion.button>
        </div>
        <div className="custom-shape-divider-bottom-1731489385">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full bg-white flex flex-row items-center justify-center h-[10vh] text-zinc-500">
        <motion.div
          className="flex flex-row items-center animate-bounce gap-x-2 fixed bottom-8 z-10"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: hasScrolled ? 0 : 1,
            transition: {
              delay: hasScrolled ? 0 : 2,
              duration: 0.5,
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
          <p>Scroll for More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </motion.div>
      </div>
      <div className="relative h-screen bg-white text-zinc-500 flex flex-col items-center justify-center gap-y-16">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.25,
              delay: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="flex flex-row items-center justify-center border-2 border-main-pink rounded-lg px-8 py-16 max-w-3xl gap-x-16 cursor-pointer"
        >
          <span className="text-main-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-card-list h-32 w-32"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
            </svg>
          </span>
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-main-pink">Header</h2>
            <p>
              This is where some words would go, just imagine something cool and
              funny here to get people interested in this thing
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.25,
              delay: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="flex flex-row items-center justify-center border-2 border-main-pink rounded-lg px-8 py-16 max-w-3xl gap-x-16 cursor-pointer"
        >
          <span className="text-main-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pin-map-fill h-32 w-32"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
          </span>
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-main-pink">Header</h2>
            <p>
              This is where some words would go, just imagine something cool and
              funny here to get people interested in this thing
            </p>
          </div>
        </motion.div>
        {/* <div className="custom-shape-divider-bottom-1731488764">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className="relative h-screen gradient-background text-white flex flex-col items-center justify-center gap-y-16">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.25,
              delay: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="flex flex-row items-center justify-center border-2 border-white rounded-lg px-8 py-16 max-w-3xl gap-x-16 cursor-pointer"
        >
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pin-map-fill h-32 w-32"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
              />
              <path
                fill-rule="evenodd"
                d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
          </span>
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-white">Header</h2>
            <p>
              This is where some words would go, just imagine something cool and
              funny here to get people interested in this thing
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.25,
              delay: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="flex flex-row items-center justify-center border-2 border-white rounded-lg px-8 py-16 max-w-3xl gap-x-16 cursor-pointer"
        >
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pin-map-fill h-32 w-32"
              viewBox="0 0 16 16"
            >
              <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1M1 9h4a1 1 0 0 1 0 2H1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </span>
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-white">Header</h2>
            <p>
              This is where some words would go, just imagine something cool and
              funny here to get people interested in this thing
            </p>
          </div>
        </motion.div>
        <div className="custom-shape-divider-top-1731488925">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 flex flex-row items-center justify-center py-4 w-full text-white ">
          <p className="opacity-40 hover:opacity-100 transition cursor-default">
            &copy; {new Date().getFullYear()} COM4525 - Team 5
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
