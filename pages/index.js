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
    <h1>hi my name is ɹǝɥdoʇsıɹɥɔ -

    ̴͂̏̎̑̐́͘c̵̭̗̳͍̱̤̣̈́͗͗̈́̍͂͝i̷͖̘̩͈̠̳̳͐̽̐͗̅̐̀̋̕̚a̸͉̗̥̗̺̲͗̏̔͗͋͛̾̓̕o̵̗̼̍̀͒̐͌̚_̶̞̺͈͚̾̐̉͂̉͗͝c̷̛̘̼̥͗̌͘h̴̨̹̓͝ͅȑ̷͓̯͆̔̚î̶̧͇͈̺͑̿̓̀̃̒̓̊͝ş̶̧̬͍̳͉́̔̿̓̊͠ ̵̧̳̼̗̇̾̃̓͛͐̾̕͜a̸̢̬̝̺̜̠͐̓̈́̐̽͋̎́t̸̟̼̼͍͎̘̠̂̌̐̓͛ ̶̤̍̉̆ṭ̷̤̩̻͕͓̇̿̍̇̚v̷̡̱̝̰̟͍̺͙̪̀̆͜t̶͍̮̳̝͊̍̕ą̴̩̼̳̣̹̬̫͐̍̅̈͝n̵̜̣̬̱̆͂̓́̄͂͝ȍ̶̧̥̯̤̼̗̪̣̀͛̏͜t̵̯͖̜̟̜͝ͅa̶̜̟͖͇͝ ̴̧̦͖͉̺̫͙͛̈́ͅ(̴̣̄͑͋̃͑̓ď̷͓͊́͑̎́ȍ̷̺͈͎̼̯̯̙̲͈̈́̂̍͘t̶̥̲̪͋̈́̏͂̐͋̔̅͌)̵͖̖͕͌̏̽̇̅̔́̋̾͝ ̵͚̜͚̳͓̰͈̺̪̽̐̂̐̔͝c̷̼̳̩̗͙̭̀̈o̸̼͍̥̹̠̙̫̱̫͠m̷̩̠̺̥̣̫̄̓͜͝

- 𝒇𝒆𝒆𝒍 free 𝒕𝒐 𝒓𝒆𝒂𝒅 𝒎𝒚 poetry ʙᴏᴏᴋ "🅻🅸🅵🅴 🅾🅵 🅰 🅻🅸🅽🅴" 𝒊𝒇 𝒚𝒐𝒗'𝒓𝒆 𝒃𝒐𝒓ed 🦍💨 
and (hey you) jump over to 𝙤𝙣𝙘𝙮𝙗𝙚𝙧(𝙙𝙤𝙩)𝙞𝙤/4͎1͎5͎ for a virtual experience🖤🖤🖤🖤🖤🖤🖤🖤🙂🍑🍑🍑🍑🍑🍑🖤🖤🖤🍑chriswoodyard(dot)bandcamp(dot)com to hear soundscapes/instrumentals🍑🍑🖤🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🖤🍑🍑🖤🍑🍑🍑🍑🍑🖤🍑investng(dot)eth(dot)limo for gif search🍑🍑🍑🖤🍑🖤🍑🍑🍑🍑🍑🍑🍑🍑🖤🍑🍑🍑🍑🍑🍑🍑🖤🍑ipfs(dot)io/ipfs/QmXzh1HASDfaPkiAGow4dctzCqL3xkuzJP3wGLT5J5PWVj🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🙂🍑🍑🍑🍑🍑🍑🍑🖤🍑🍑🍑🖤🍑🖤🍑🍑madsgallery(dot)art to see artwork🍑🍑🖤🍑🖤🍑🍑🙂🍑🍑🍑🖤🍑🍑🍑🍑🍑🖤🍑🍑🖤🍑🍑🍑🖤🍑🍑🍑🍑🖤🍑🍑🍑🖤🍑🍑🍑🍑🖤🍑🍑3️⃣5️⃣4️⃣6️⃣🍑🍑🖤🍑🍑🖤🍑🍑🍑🍑🍑🖤🍑🖤🖤🖤</h1>
    </div>
  );
}
