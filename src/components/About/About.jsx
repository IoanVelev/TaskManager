
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
    </Accordion>
    </div>
    </>
    
  );
}
