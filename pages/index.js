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
    <h1>𝚑𝚒, 𝚖𝚢 𝚗𝚊𝚖𝚎 𝚒𝚜 <a href="https://www.my60stv.com/#viyufRQKlto">𝓬𝓱𝓻𝓲𝓼</a>, 𝚙𝚞𝚋𝚕𝚒𝚜𝚑𝚎𝚍 𝚊𝚞𝚝𝚑𝚘𝚛 𝚊𝚗𝚍 𝚒𝚗𝚝𝚎𝚛𝚗𝚊𝚝𝚒𝚘𝚗𝚊𝚕 𝚙𝚊𝚒𝚗𝚝𝚎𝚛 . 𝚊 𝚖𝚞𝚕𝚝𝚒–𝚒𝚗𝚜𝚝𝚛𝚞𝚖𝚎𝚗𝚝𝚊𝚕𝚒𝚜𝚝. 𝚒𝚗𝚟𝚎𝚜𝚝𝚘𝚛. 𝚊𝚗𝚍 𝚊 𝚕𝚘𝚟𝚎𝚛 𝚘𝚏 𝚛𝚎𝚊𝚍𝚒𝚗𝚐, 𝚊𝚗𝚍 <a href="https://drive.google.com/file/d/1Q8ncGRs5X8pKnDFO2gc9ka480SHhMj22/view">building new things.
</a><a href="https://ens.vision/0x/0x31686a4da3b7b04159d30c3ecf2821304f810f53"> 𝘌𝘕𝘚🌐</a>. 
𝙶𝚛𝚊𝚋 𝚖𝚢 <a href="https://bookstore.dorrancepublishing.com/life-of-a-line/">𝓫𝓸𝓸𝓴</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊f 𝒚o𝒗'𝒓𝒆 b𝒐𝒓ed 📓
<a href="https://oncyber.io/3546">𝓳𝓾𝓶𝓹 𝓱𝓮𝓻𝓮</a> 𝚝𝚘 𝚜𝚎𝚎 𝚓𝚙𝚎𝚐𝚜, 𝙴𝙽𝚂 𝚍𝚘𝚖𝚊𝚒𝚗𝚜, 𝚊𝚗𝚍 𝚜𝚘𝚖𝚎 𝚊𝚒 𝚊𝚛𝚝 𝚍𝚒𝚜𝚙𝚕𝚊𝚢𝚎𝚍 𝚒𝚗 𝚟𝚒𝚛𝚝𝚞𝚊𝚕 𝚜𝚙𝚊𝚌𝚎𝚜🖼️, 𝚖𝚢 <a href="https://chriswoodyard.bandcamp.com/">𝓶𝓾𝓼𝓲𝓬</a> 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚘𝚗 𝚋𝚊𝚗𝚍𝚌𝚊𝚖𝚙🎸(𝚊𝚗𝚍 𝚘𝚝𝚑𝚎𝚛 𝚙𝚞𝚋𝚕𝚒𝚜𝚑𝚒𝚗𝚐𝚜📚), 𝚊 𝚏𝚞𝚗 <a href="https://investng.eth.limo/">𝓰𝓲𝓯</a> 𝚜𝚎𝚊𝚛𝚌𝚑 🤹, 𝚊𝚗 𝚘𝚙𝚎𝚗 𝚜𝚘𝚞𝚛𝚌𝚎𝚍 <a href="https://stanforddaily.eth.limo/">𝔀𝓸𝓻𝓭𝓵𝓮</a> 𝚐𝚊𝚖𝚎 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚏𝚘𝚛 𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎 🐕,
𝚖𝚊𝚍𝚜𝚐𝚊𝚕𝚕𝚎𝚛𝚢(𝚍𝚘𝚝)𝚊𝚛𝚝 𝚝𝚘 𝚜𝚎𝚎 <a href="https://madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝓪𝓻𝓽𝔀𝓸𝓻𝓴</a> 🎨,& 𝚊 <a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers">𝓷𝓮𝔀 𝔂𝓸𝓻𝓴𝓮𝓻</a> 𝚕𝚎𝚝𝚝𝚎𝚛 𝚛𝚎𝚙𝚕𝚒𝚎𝚍 𝚋𝚢 𝙻𝚒𝚊𝚗𝚊 𝙵𝚒𝚗𝚌𝚔🗞️
<a href="https://mitpress.mit.edu/">3️⃣5️⃣4️⃣6️⃣</a> contact ➡️ ciao_chris@tutanota.com <a href="https://annas-archive.org/">|29938.𝘦𝘵𝘩👨🏿‍💻11h29.𝘦𝘵𝘩|</a> <a href="https://remix.ethereum.org/">-0024.𝘦𝘵𝘩</a>
</a></h1> have a good day
    </div>
  );
}
