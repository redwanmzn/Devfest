import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dashboard from "./components/Dashboard";
import "./index.css";
import Home from "./components/Home";
import Task from "./components/Task";
import Machines from "./components/machines";
import Machinemain from "./components/machinemain";

const Routers = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/machines" element={<Machinemain />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routers;