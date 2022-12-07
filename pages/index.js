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
          backgroundColor: 0x1e1c1c,
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
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}></main>
    <h1>𝚑𝚒, 𝚖𝚢 𝚗𝚊𝚖𝚎 𝚒𝚜 <a href="https://my90stv.com/#bcTi_3Eq-mQ">𝓬𝓱𝓻𝓲𝓼</a>, 𝚙𝚟𝚋𝚕𝚒𝚜𝚑𝚎𝚍 𝚊𝚞𝚝𝚑𝚘𝚛 𝚊𝚗𝚍 𝚒𝚗𝚝𝚎𝚛𝚗𝚊𝚝𝚒𝚘𝚗𝚊𝚕 𝚙𝚊𝚒𝚗𝚝𝚎𝚛 . 𝚊 𝚖𝚟𝚕𝚝𝚒–𝚒𝚗𝚜𝚝𝚛𝚟𝚖𝚎𝚗𝚝𝚊𝚕𝚒𝚜𝚝. 𝚒𝚗𝚟𝚎𝚜𝚝𝚘𝚛. 𝚊𝚗𝚍 𝚊 𝚕𝚘𝚟𝚎𝚛 𝚘𝚏 𝚛𝚎𝚊𝚍𝚒𝚗𝚐, 𝚊𝚗𝚍 <a href="https://drive.google.com/file/d/1Q8ncGRs5X8pKnDFO2gc9ka480SHhMj22/view">building new things.</a><a href="https://ens.vision/0x/0x31686a4da3b7b04159d30c3ecf2821304f810f53"> 𝘌𝘕𝘚🌐</a>. 𝙶𝚛𝚊𝚋 𝚖𝚢 <a href="https://bookstore.dorrancepublishing.com/life-of-a-line/">𝓫𝓸𝓸𝓴</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊f 𝒚o𝒗'𝒓𝒆 b𝒐𝒓ed 📓 👫👫👫👫👫👫👫🖤👫👫👫👫👫👫👫👫
<a href="https://oncyber.io/3546">𝓳u𝓶𝓹 here</a> 𝚝𝚘 𝚜𝚎𝚎 𝚜𝚝𝚞𝚏𝚏 𝚘𝚗 𝚠𝚊𝚕𝚕𝚜 𝚒𝚗 𝚎𝚗𝚌𝚕𝚘𝚜𝚎𝚍 𝚜𝚙𝚊𝚌𝚎𝚜🖼️🖤🖤🖤🖤🖤🖤🖤🖤👫👫👫👫👫👫🖤👫👫👫👫👫👫🖤👫solo <a href="https://chriswoodyard.bandcamp.com/">𝓶𝓾𝓼𝓲𝓬</a> 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚘𝚗 𝚋𝚊𝚗𝚍𝚌𝚊𝚖𝚙🎨👫👫🖤👫👫👫👫👫👫👫👫🖤🖤👫👫👫👫👫🖤👫👫👫👫👫👫👫👫👫👫👫👫𝚏𝚟𝚗 <a href="https://investng.eth.limo/">𝓰𝓲𝓯</a> search 🤹👫👫👫🖤👫🖤🖤👫stay hydrated👫👫👫🐕👫👫👫🖤🖤👫👫🖤👫👫👫🖤👫<a href="https://amandasmemes.vercel.app/">𝓶𝓮𝓶𝓮</a> 𝚖𝚊𝚔𝚎𝚛 𝚏𝚘𝚛 everyone💡👫👫👫👫👫🐕 
 👫🐕👫👫👫👫👫👫👫🖤👫👫👫🖤👫🖤👫👫madsgallery(dot)art to see <a href="https://madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝓪𝓻𝓽𝔀𝓸𝓻𝓴</a> 🔊👫👫🖤👫🖤👫👫👫<a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers">𝓷𝓮𝔀 𝔂𝓸𝓻𝓴𝓮𝓻</a> letter🗞️👫👫🖤👫👫🖤👫👫🖤👫🖤🖤<a href="https://mitpress.mit.edu/">3️⃣5️⃣4️⃣6️⃣</a>🖤🖤🖤👫👫👫👫contact ➡️ ciao_chris@tutanota.com <a href="https://annas-archive.org/">|29938.eth🧑🏿‍💻</a></h1>
    </div>
  );
}
