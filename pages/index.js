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
        <title>👫👫👫👫.eth</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>hi my name is <a href="https://www.ciao_chris@tutanota.com/">christopher woodyard</a> I'm a published poet and international painter. a multi-instrumentalist. investor. and a lover of reading, and riding my bike. I enjoy building on the new internet. 
- 𝒇𝒆𝒆𝒍 free 𝒕𝒐 𝒓𝒆𝒂𝒅 𝒎𝒚 <a href="https://www.barnesandnoble.com/w/life-of-a-line-christopher-woodyard/1138944764">poetry ʙᴏᴏᴋ</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊𝒇 𝒚𝒐𝒗'𝒓𝒆 𝒃𝒐𝒓ed 🦍💨 
and <a href="https://oncyber.io/3546">jump here</a> for a virtual 3D experience🖤🖤🖤🖤🖤🖤🖤🖤🐕👫👫👫👫👫👫🖤🖤🖤👫solo <a href="https://www.chriswoodyard.bandcamp.com">𝘮𝘶𝘴𝘪𝘤</a> project under indigo people on bandcamp👫👫🖤👫👫👫👫👫👫👫👫👫👫👫👫👫👫🖤👫👫🖤👫👫👫👫👫🖤👫investng(dot)eth (dot)limo for fun <a href="https://www.investng.eth.limo">𝒈𝒊𝒇</a> search👫👫👫🖤👫🖤👫👫👫👫👫👫👫👫🖤👫👫👫👫👫👫👫🖤👫stay hydrated👫👫👫👫👫👫👫👫👫stanforddailymemes(dot) vercel(dot)app to make<a href="https://www.stanforddaily.vercel.app/">𝒎𝒆𝒎𝒆𝒔</a>  
 👫🐕👫👫👫👫👫👫👫🖤👫👫👫🖤👫🖤👫👫madsgallery(dot)art to see <a href="https://www.madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝔸ℝt𝐰𝑜гҜ</a> 👫👫🖤👫🖤👫👫🐕👫👫👫🖤🖤👫👫🖤👫👫👫🖤🖤👫👫👫🖤👫👫👫👫🖤👫👫<a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers/">3️⃣5️⃣4️⃣6️⃣</a>👫👫🖤👫👫🖤👫👫🖤👫🖤🖤💡</h1>
    </div>
  );
}
