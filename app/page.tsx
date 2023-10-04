'use client'
import Typewriter from 'typewriter-effect';
import {AiFillGithub} from 'react-icons/ai'
import "@/styles/custom.css";

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Showcasing&nbsp;
              <Typewriter options={{
                  strings: ['front-end expertise', 'server-side development'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
              <div className="flex flex-row justify-center gap-10 mb-0">
                  <a href='https://github.com/danmxli/theodinproject-project-library' target='_blank' className="text-6xl">
                    <AiFillGithub />
                  </a>
                  <p className="sm:text-md lg:text-xl lg:w-56 md:w-48">Project Library curated by Dan Li, for <a href='https://www.theodinproject.com/' target='_blank' className="text-violet-500">The Odin Project</a></p>
            </div>
          </div>

          <div className="mb-32 mt-5 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
              href="/htmlcss"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target=""
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                HTML CSS{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Showcasing animated, accessible, and responsive front end design.
              </p>
            </a>

            <a
              href="https://github.com/danmxli"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Javascript{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Showcasing modules, asyncronous programming, and testing.
              </p>
            </a>

            <a
              href="https://github.com/danmxli"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                ReactJS{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Showcasing Reactive components, states and effects, and routing.
              </p>
            </a>

            <a
              href="https://github.com/danmxli"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                NodeJS{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Showcasing server-side processing and integration with ExpressJS, MongoDB.
              </p>
            </a>

            <a
              href="https://danmxli.vercel.app/projects"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                All Projects by Dan{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Visit my website for projects done in Python, C++, Java, and more!
              </p>
            </a>
          </div>
      </main>
  )
}
