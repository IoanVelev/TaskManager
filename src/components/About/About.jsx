
"use client";

import { Accordion } from "flowbite-react";
import { Instruction } from "./Instruction/Instruction";
import styles from './Instruction/Instruction.module.css';

export function About() {
  return (
    <>
    
    
    <div className={styles.instruction}>
      <h1 className={styles.h1}>How to use TaskManager:</h1>
    <Instruction />
    </div>

    <div className="accordion">
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>What is TaskManager?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            TaskManager is simple web application which allows you to manage all of your tasks and keep it track of them.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is the application difficcult to use?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            TaskManager is built with the idea to keep things simple and straightforward, so hakuna matata :D.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    </>
    
  );
}
