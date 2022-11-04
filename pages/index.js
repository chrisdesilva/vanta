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
        <title>🚀🚀🚀🚀</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>hi my name is <a href="https://ens.vision/0x/0x31686a4da3b7b04159d30c3ecf2821304f810f53/">𝓬𝓱𝓻𝓲𝓼𝓽𝓸𝓹𝓱𝓮𝓻</a> pvblished author and international painter. a mvlti-instrvmentalist. investor. and a lover of reading, and riding my bike. <a href="https://app.ens.domains/">ENS🌐</a>. 
- 𝒇𝒆𝒆𝒍 free 𝒕𝒐 𝒓𝒆𝒂𝒅 𝒎𝒚 <a href="https://bookstore.dorrancepublishing.com/life-of-a-line/">𝓹𝓸𝓮𝓽𝓻𝔂 𝓫𝓸𝓸𝓴</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊𝒇 𝒚𝒐𝒗'𝒓𝒆 𝒃𝒐𝒓ed 📓 👫👫👫👫👫👫👫
and <a href="https://oncyber.io/3546">𝓳𝓾𝓶𝓹 𝓱𝓮𝓻𝓮</a> for a 3D experience🖼️🖤🖤🖤🖤🖤🖤🖤🖤👫👫👫👫👫👫🖤🖤👫👫👫👫👫👫👫👫👫👫🖤👫solo <a href="https://chriswoodyard.bandcamp.com/">𝓶𝓾𝓼𝓲𝓬</a> project on bandcamp🎨👫👫🖤👫👫👫👫👫👫👫👫🖤🖤👫👫👫👫👫🖤👫👫👫👫👫👫👫👫investng(dot)eth (dot)limo for fvn <a href="https://investng.eth.limo/">𝓰𝓲𝓯</a> search 📊👫👫👫🖤👫🖤🖤👫stay hydrated👫👫👫🐕👫👫👫🖤🖤👫👫🖤👫👫👫🖤🖤👫👫👫👫dedicated <a href="https://michellesmemes.vercel.app/">𝓶𝓮𝓶𝓮</a> maker for Daily writers💡👫👫👫👫👫🐕 
 👫🐕👫👫👫👫👫👫👫🖤👫👫👫🖤👫🖤👫👫madsgallery(dot)art to see <a href="https://madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝓪𝓻𝓽𝔀𝓸𝓻𝓴</a> 🔊👫👫🖤👫🖤👫👫👫👫🖤👫👫👫👫🖤👫👫<a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers">𝓷𝓮𝔀 𝔂𝓸𝓻𝓴𝓮𝓻 𝓵𝓮𝓽𝓽𝓮𝓻</a>🗞️👫👫🖤👫👫🖤👫👫🖤👫🖤🖤email - ciao_chris@tvtanota.com <a href="https://mitpress.mit.edu/">❤️</a></h1>
    </div>
  );
}
