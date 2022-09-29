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
        <title>Tornado Cash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>hi my name is christopher woodyard feel free to reach me at elontusk(dot)x at skiff (dot) com or ciao_chris at tutanota (dot) com - my portfolio is on y(dot)at/👽🚀🍑💩- jump to chriswoodyard(dot)on(dot)fleek(dot)co for inspiration</h1>
    </div>
  );
}
