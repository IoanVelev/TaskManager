
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export function Instruction() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>1. Register your account</Timeline.Title>
          <Timeline.Body>
            Start your journey with TaskManager. 
          </Timeline.Body>
          <Button as={Link} to={'/register'} color="gray">
            Register
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>2. Login into your account</Timeline.Title>
          <Timeline.Body>
           After succesfull login you get access to your personal dashboard with tasks and their status.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>3. Start managing your tasks</Timeline.Title>
          <Timeline.Body>
            Read, create, edit and delete each task you want.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
