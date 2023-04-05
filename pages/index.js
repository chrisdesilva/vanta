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
    <h1><p>𝚖𝚢 𝚗𝚊𝚖𝚎 𝚒𝚜 <a href="https://my90stv.com/#7XBcT41ImSI">𝓬𝓱𝓻𝓲𝓼</a>.</p>
<p>𝚊 𝚕𝚘𝚟𝚎𝚛 𝚘𝚏 𝚛𝚎𝚊𝚍𝚒𝚗𝚐, 𝚍𝚎𝚌𝚎𝚗𝚝𝚛𝚊𝚕𝚒𝚣𝚊𝚝𝚒𝚘𝚗 𝚊𝚗𝚍 <a href="https://drive.google.com/file/d/1Q8ncGRs5X8pKnDFO2gc9ka480SHhMj22/view">𝓫𝓾𝓲𝓵𝓭𝓲𝓷𝓰 𝓷𝓮𝔀 𝓽𝓱𝓲𝓷𝓰𝓼</a>.<a href="https://ens.vision/0x/0x31686a4da3b7b04159d30c3ecf2821304f810f53"> 𝘌𝘕𝘚🌐</a>.</p>

<p>𝙶𝚛𝚊𝚋 𝚖𝚢 <a href="https://bookstore.dorrancepublishing.com/life-of-a-line/">𝓫𝓸𝓸𝓴</a> "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" <a href="https://boredapeyachtclub.vercel.app/">𝒊f 𝒚o𝒗'𝒓𝒆 b𝒐𝒓ed</a>📓</p>
<p><a href="https://oncyber.io/stanfordgsb">𝓳𝓾𝓶𝓹 𝓱𝓮𝓻𝓮</a> 𝚝𝚘 𝚜𝚎𝚎 𝚍𝚒𝚐𝚒𝚝𝚊𝚕 𝚊𝚜𝚜𝚎𝚝𝚜 𝚍𝚒𝚜𝚙𝚕𝚊𝚢𝚎𝚍 𝚒𝚗 𝚟𝚒𝚛𝚝𝚞𝚊𝚕 𝚜𝚙𝚊𝚌𝚎𝚜🖼️,</p> <p>𝚖𝚢 <a href="https://chriswoodyard.bandcamp.com/">𝓶𝓾𝓼𝓲𝓬</a> 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚘𝚗 𝚋𝚊𝚗𝚍𝚌𝚊𝚖𝚙🎸(𝚊𝚗𝚍 𝚘𝚝𝚑𝚎𝚛 𝚙𝚞𝚋𝚕𝚒𝚜𝚑𝚒𝚗𝚐𝚜📚),</p> <p>𝚊 𝚏𝚞𝚗 <a href="https://investng.eth.limo/">𝓰𝓲𝓯</a> 𝚜𝚎𝚊𝚛𝚌𝚑 🎆, 𝚊𝚗 𝚘𝚙𝚎𝚗 𝚜𝚘𝚞𝚛𝚌𝚎 <a href="https://stanforddaily.eth.limo/">𝔀𝓸𝓻𝓭𝓵𝓮</a> 𝚐𝚊𝚖𝚎 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚏𝚘𝚛 𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎 🖋,</p>
<p>𝚖𝚊𝚍𝚜𝚐𝚊𝚕𝚕𝚎𝚛𝚢(𝚍𝚘𝚝)𝚊𝚛𝚝 𝚝𝚘 𝚜𝚎𝚎 <a href="https://madsgallery.art/item/085ddf21-f2f3-44d1-837b-6794109262af/artist/christopher-woodyard/">𝓪𝓻𝓽𝔀𝓸𝓻𝓴</a> 🎨</p>,<p>& 𝚊 <a href="https://www.newyorker.com/humor/daily-shouts/dear-pepper-writing-vs-drawing-and-low-flying-zippers">𝓷𝓮𝔀 𝔂𝓸𝓻𝓴𝓮𝓻</a> 𝚕𝚎𝚝𝚝𝚎𝚛 𝚛𝚎𝚙𝚕𝚒𝚎𝚍 𝚋𝚢 𝙻𝚒𝚊𝚗𝚊 𝙵𝚒𝚗𝚌𝚔🗞️</p>
<a href="https://mitpress.mit.edu/">3️⃣5️⃣4️⃣6️⃣</a> contact ➡️ ciao_chris@tutanota.com <a href="https://annas-archive.org/">|-0024.𝘦𝘵𝘩👨🏿‍💻29938.𝘦𝘵𝘩|
</a></h1><iframe src="https://giphy.com/embed/jnWMCLBfJb7CK4D8iY" width="340" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pixelart-rain-programming-jnWMCLBfJb7CK4D8iY"></a></p> <a href="https://givebutter.com/h0CJIU">ᵈᵒⁿᵃᵗᵉ ᵃ ᶜᵒᶠᶠᵉᵉ</a> ₿ </div>
  );
}
