import React from "react";
import "./reset.css";
import styles from './App.module.css';
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
      </main>

      <Footer />
    </>
  );
}
