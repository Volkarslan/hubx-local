import React from "react";
import "./reset.css";
import styles from './App.module.css';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Feature } from "./components/feature";

export function App() {
  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
      <Header />

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Feature />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
