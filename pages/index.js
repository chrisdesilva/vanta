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
          color: 0x306AC0,
          backgroundColor: 0x110c11,
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
        <title>Christopher Woodyard</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>
🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟣️🟠️⚫️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️⚫️🟠️🟣️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️
🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟣️⚫️⚫️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️⚫️⚫️🟣️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️
🟡️🟡️🟡️🟡️🟣️🟡️🟡️🟡️🟣️⚫️⚫️🟡️🟣️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟡️🟣️🟡️🟡️🟡️🟡️🟡️🟣️🟡️🟡️🟡️
🟡️🟣️⚫️⚫️⚫️⚫️🟣️🟡️🟣️⚫️⚫️⚫️⚫️⚫️⚫️🟡️🟡️🟣️⚫️🟣️⚫️⚫️🟡️⚫️⚫️🟣️🟡️🟣️⚫️⚫️⚫️⚫️🟣️🟡️
🟣️⚫️⚫️⚫️⚫️⚫️⚫️🟣️⚫️🟠️⚫️⚫️⚫️⚫️🟠️🟣️🟡️⚫️🟠️⚫️⚫️⚫️🟡️⚫️⚫️🟣️🟡️⚫️⚫️⚫️🟣️⚫️🟠️🟣️
🟣️🟠️🟣️🟡️🟡️🟣️⚫️🟣️🟣️🟠️⚫️🟡️🟡️⚫️🟠️⚫️🟣️⚫️🟠️⚫️🟣️🟡️🟡️⚫️🟠️🟣️🟡️⚫️⚫️🟣️🟡️🟣️🟣️🟣️
⚫️🟠️🟣️🟡️🟡️🟡️🟣️🟡️🟣️🟠️⚫️🟡️🟡️🟣️🟠️⚫️🟡️⚫️🟠️⚫️🟡️🟡️🟡️⚫️🟠️🟣️🟡️⚫️🟠️⚫️🟣️🟣️🟡️🟡️
⚫️🟠️🟣️🟡️🟡️🟡️🟡️🟡️⚫️🟠️⚫️🟡️🟡️🟣️🟠️⚫️🟡️⚫️🟠️🟣️🟡️🟡️🟡️🟠️🟠️🟣️🟡️🟡️🟣️⚫️⚫️🟠️⚫️🟣️
⚫️⚫️⚫️🟡️🟡️🟣️🟣️🟡️⚫️🟠️⚫️🟡️🟡️🟣️🟠️⚫️🟡️⚫️⚫️🟣️🟡️🟡️🟡️⚫️🟠️⚫️🟣️🟣️🟣️🟡️🟣️⚫️🟠️⚫️
🟣️⚫️⚫️🟣️🟣️⚫️🟠️🟣️🟣️🟠️⚫️🟡️🟡️🟣️🟠️⚫️🟡️⚫️⚫️🟣️🟡️🟡️🟡️⚫️🟠️⚫️🟣️⚫️⚫️🟣️🟣️⚫️🟠️⚫️
🟡️🟣️⚫️🟠️🟠️⚫️🟣️🟡️⚫️🟠️⚫️🟡️🟡️🟣️🟠️⚫️🟡️⚫️⚫️🟣️🟡️🟡️🟡️⚫️🟠️🟣️🟡️🟣️🟠️⚫️⚫️🟠️⚫️🟣️
🟡️🟡️🟡️🟣️🟣️🟡️🟡️🟡️🟣️🟣️🟣️🟡️🟡️🟡️🟣️🟣️🟡️🟣️🟣️🟡️🟡️🟡️🟡️🟣️🟣️🟣️🟡️🟡️🟣️🟣️🟣️🟣️🟡️🟡️hi, my name is <a href="https://ens.vision/0x/0x31686a4da3b7b04159d30c3ecf2821304f810f53/">𝓬𝓱𝓻𝓲𝓼</a> pvblished author and international painter. a mvlti-instrvmentalist. investor. and a lover of reading, and riding my bike. <a href="https://app.ens.domains/">ENS🌐</a>. 
- grab my <a href="https://bookstore.dorrancepublishing.com/life-of-a-line/">𝓫𝓸𝓸𝓴</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊f 𝒚o𝒗'𝒓𝒆 b𝒐𝒓ed 📓 👫👫👫👫👫👫👫🖤👫👫👫👫👫👫👫👫
and <a href="https://oncyber.io/3546">𝓳u𝓶𝓹 here</a> to see stuff on walls in enclosed spaces🖼️🖤🖤🖤🖤🖤🖤🖤🖤👫👫👫👫👫👫🖤🖤👫👫👫👫👫👫👫🖤👫👫👫👫👫👫👫👫👫👫👫🖤👫solo <a href="https://chriswoodyard.bandcamp.com/">𝓶𝓾𝓼𝓲𝓬</a> project on bandcamp🎨👫👫🖤👫👫👫👫👫👫👫👫🖤🖤👫👫👫👫👫🖤👫👫👫👫👫👫👫👫investng(dot)eth (dot)limo for fvn <a href="https://investng.eth.limo/">𝓰𝓲𝓯</a> search 📊👫👫👫🖤👫🖤🖤👫stay hydrated👫👫👫🐕👫👫👫🖤🖤👫👫🖤👫👫👫🖤🖤👫👫👫👫dedicated <a href="https://michellesmemes.vercel.app/">𝓶𝓮𝓶𝓮</a> maker for Daily writers💡👫👫👫👫👫🐕 
 👫🐕👫👫👫👫👫👫👫🖤👫👫👫🖤👫🖤👫👫madsgallery(dot)art to see <a href="https://madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝓪𝓻𝓽𝔀𝓸𝓻𝓴</a> 🔊👫👫🖤👫🖤👫👫👫👫🖤👫👫👫👫🖤👫👫<a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers">𝓷𝓮𝔀 𝔂𝓸𝓻𝓴𝓮𝓻</a> letter🗞️👫👫🖤👫👫🖤👫👫🖤👫🖤🖤email - ciao_chris@tvtanota.com <a href="https://mitpress.mit.edu/">( ͡❛ ͜ʖ ͡❛)💜                                                                                                                          </a></h1>
    </div>
  );
}
