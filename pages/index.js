import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
      <Head>
        <title>3️⃣5️⃣4️⃣6️⃣</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>hi my name is christopher - 👫👫👫👫.eth - reach me at ciao_chris at tvtanota (dot) com - and feel free to read my poetry book "life of a line" if yov're bored 🦍💨

y(dot)at/👽🚀🍑💩 for random stvff</h1>
    </div>
  );
}
