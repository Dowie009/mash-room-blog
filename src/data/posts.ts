export interface Post {
  id: number;
  title: string;
  category: "Story" | "AI" | "Gear";
  chapter?: number;
  readTime?: string;
  image?: string;
  excerpt?: string;
  date: string;
  content: string;
}

export const POSTS: Post[] = [
  // --- のけ物語 (Story) ---
  {
    id: 31,
    title: "プロローグ「再会」",
    category: "Story",
    chapter: 0,
    readTime: "3 min",
    image: "/images/ノケ物語サムネ.png",
    excerpt: "2025年、冬。札幌、ススキノ。俺は、高級寿司屋の個室にいた。",
    date: "2025-12-14",
    content: `<p>2025年、冬。<br>札幌、ススキノ。</p><p>俺は、高級寿司屋の個室にいた。</p><p>目の前には、S氏がいる。<br>60代前半。<br>やっぱり、すごいオーラだ。</p><p>何千人ものアーティストを見てきた男だけが持つ、静かな威厳。<br>部屋全体を支配するような存在感。</p><p>S氏は、俺の人生を変えた男だ。</p><p>そして、もう一人。<br>小川真理子（おがわ まりこ）。50代後半。<br>噂には聞いていた。<br>彼女もまた、この業界で名の知れた人物だ。</p><p>個室には、ただならぬ空気が漂っていた。<br>沈黙が、重くのしかかる。</p><p>俺は、あの日のことを思い出していた。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">渋谷。<br><br>ど真ん中のビルの高層階。<br><br>窓の外には、東京の街が広がっていた。</div><p>夕暮れ時。<br>高層ビルのガラスが、夕日を反射して、街全体がオレンジ色に染まっていた。</p><p>でも、音は何も聞こえない。<br>車のクラクションも、人の声も、電車の音も。<br>すべてが、静まり返っている。</p><p>街には、何千人、何万人もの人がいるはずなのに、誰一人見えない。</p><p>高層ビルが立ち並び、道路が走り、街が動いているはずなのに、すべてが静止しているかのようだった。</p><div style="text-align: center; margin: 2em 0; color: #555;">まるで、別世界を見ているかのような感覚。</div><p>S氏は、窓の外を指差した。<br>そして、静かに言った。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">「ソロだったら契約するよ」</div><p>その瞬間、俺の心臓が止まった。</p><p>ソロ。</p><p>俺は、仲間と一緒に夢を追いかけてきた。<br>でも、S氏は、俺一人で勝負しろと言った。</p><p>窓の外の東京の景色が、急に冷たく見えた。<br>まるで、俺を拒絶しているかのように。</p><p>でも、俺は、答えた。</p><p>「やります」</p><p>そして、俺は、一人で東京へ行くことを決めた。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0;">あれから、何年経ったんだろう。<br><br>俺は、札幌に戻ってきた。<br><br>挫折して、再起して、音楽スタジオを始めた。</div><p>そして今、S氏と、再び向かい合っている。</p><p>個室の空気が、また重くなる。</p><p>S氏が、静かに言った。</p><p>俺は、涙を堪えながら、答えた。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">「やります。やらせてください」</div><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0; text-align: center;"><strong>この物語は、俺がまだ『佐藤勇輝』だった頃から始まる。</strong></div><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.1em; color: #666;">（つづく）</span></div>`
  },
  {
    id: 36,
    title: "幼少期編・第1話「三角屋根の秘密基地」",
    category: "Story",
    chapter: 1,
    readTime: "4 min",
    image: "/images/幼少期編　サムネ.png",
    date: "2025-12-15",
    content: `<p>7歳の僕には、王国があった。<br>場所は札幌。3階建てのログハウスの、三角屋根の部屋。</p><p>国民は僕だけ。<br>人口1人。<br>GDP、0円。<br>主な産業、妄想。</p><p>いや、王国は言いすぎたかもしれない。<br>秘密基地。うん、秘密基地のほうがしっくりくる。</p><p>僕は埼玉県朝霞市で生まれたらしい。<br>でも記憶にあるのは札幌だけ。<br>2歳で引っ越したから、朝霞の記憶は、、、<br>ない (^ ^)</p><p>7歳。<br>ここから僕の人生は始まる。</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0; color: #555;">3階建て。ログハウス。天窓。</div><p>その部屋は、屋根裏と部屋の中間みたいな場所だった。<br>天窓がひとつだけあって、そこから光が斜めに落ちてくる。<br>僕はその光に手を入れるのが好きだった。</p><p>なんか、、、いい感じだった。<br>勇者が伝説の剣を見つける直前みたいな気持ちになれた。</p><p>木の床。<br>木の壁。<br>木の匂い。<br>あったかい。</p><p>外はマイナス10度。<br>でもあの部屋だけ、なんか違う国みたいだった。<br>僕だけの国。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;">友達？<br><br><strong>いない (^ ^)</strong><br><br>でも関係なかった。<br>だって僕には妄想があった。</div><p>僕の遊びを説明しよう。<br>名付けて、「設定を作る遊び」。</p><p>たとえば、部屋の隅にある木の節をじっと見つめる。<br>じーーーっと見つめる。<br>すると、だんだんそれが**「魔王の目」**に見えてくる。</p><p>見えてきた。<br>よし、勝ち。</p><p>次に、その魔王に設定を与える。<br>名前は「ダークネス・アイ」。<br>能力は「見つめた相手の心を読む」。<br>弱点は「光に弱い」。</p><p><span style="color: #999; font-size: 0.9em;">（7歳の語彙力、フル稼働）</span></p><p>設定が決まったら、天窓からの光をダークネス・アイに当てる。<br>心の中で叫ぶ。<br>「うわあああああ！！」</p><p>魔王、倒した。<br>世界、救った。</p><p>誰にも見られてないから確認はできないけど、、、<br>まあ、救ったと思う (ﾟoﾟ;;</p><div style="font-size: 1.1em; text-align: center; margin: 2em 0;">7歳、札幌、屋根裏。<br><br><strong>世界、何回救ったか分からない。</strong><br><br>誰にも感謝されたことないけど (-_-)</div>`
  },
  {
    id: 39,
    title: "幼少期編・第2話「レイガンと夕暮れ」",
    category: "Story",
    chapter: 2,
    readTime: "5 min",
    image: "/images/幼少期編　サムネ.png",
    excerpt: "僕の妄想力は、日々進化していた。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜妄想少年、進化する〜</span></div><p>僕の妄想力は、日々進化していた。</p><p>三角屋根の秘密基地で「設定を作る遊び」を覚えた僕は、次のステージに進んでいた。</p><p>人形遊び。</p><p>といっても、大量の人形があったわけじゃない。<br>ヒーローの人形が、ひとつ。<br>たったひとつ。</p><p>でも、永遠に遊べた。</p><p>なぜなら、設定は無限に作れるから。<br>今日のこのヒーローは、記憶をなくしている。<br>明日のこのヒーローは、実は双子の弟。<br>明後日は、敵に洗脳されてる。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;">人形はひとつ。<br><br><strong>世界観は関ヶ原くらい広がった。</strong></div><p>友達に「まだそれで遊んでるの？」と言われたことがある。<br>うん、遊んでる。<br>だって関ヶ原の戦い、まだ終わってないから。</p><p>……伝わらなかった (^ ^)</p><p>スケボーは、その日から置物になった。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">教訓：止まり方を覚えてから乗ろう。<br><br><span style="font-size: 0.9em; color: #888;">（7歳、学ぶ）</span></div><p>当時、幽☆遊☆白書が流行っていた。<br>主人公の浦飯幽助が使う必殺技、霊丸（レイガン）。<br>指先から霊気を発射するやつ。</p><p>あれが撃ちたかった。</p><p>ある日、近所の子が言った。<br>「……なあ、レイガンの撃ち方、知りたい？」</p><p>その子は、内緒話みたいな声で言った。<br>「30分間、温めろ」</p><p>僕は信じた。<br>その日から、学校帰りの30分間、僕はずっとレイガンを温めていた。</p><p>家に着いた。<br>30分、経った。<br>霊気、溜まったはず。</p><p>僕は静かに、左手を外した。<br>レイガンのポーズ、完成。<br>狙いを定める。</p><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">どこに撃てばいいんだ？</div><p>家？　壊れたら怒られる。<br>木？　なんか関係ない木を撃つの、かわいそう。<br>空？　なんか違う。</p><p>30分間、温め続けた霊気は、<br>行き場を失って消えた。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0;">たぶん。知らないけど。</div><p>夕方5時。<br>外で遊んでいると、あちこちから声が聞こえてくる。<br>みんな、名前を呼ばれて帰っていく。</p><p>僕は、呼ばれない。<br>だって、家には誰もいないから。</p><div style="text-align: center; margin: 2em 0; color: #666;">夕暮れの公園。<br><br>オレンジ色の空。<br><br>僕、ひとり。</div><p>でも、僕にはやることがあった。<br>妄想。</p><p>みんなが帰った後の公園は、僕だけの世界になった。<br>ひとりの時間が、僕の妄想力を育てた。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">今思えば、あの夕暮れの時間がなかったら、<br><br>僕は「物語を作る人間」にはならなかったかもしれない。<br><br><strong>あの寂しさが、全部、力になった。</strong></div><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>幼少期編・第2話「レイガンと夕暮れ」 —— 完</em></div>`
  },
  {
    id: 42,
    title: "幼少期編・第3話「ゲンちゃんと夜の温泉」",
    category: "Story",
    chapter: 3,
    readTime: "5 min",
    image: "/images/幼少期編　サムネ.png",
    excerpt: "僕の人生で、一番楽しみにしていたこと。それは、ゲンちゃんと家族でキャンプに行くことだった。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"> <span style="font-size: 0.9em; color: #666;">〜僕の人生で一番楽しかったこと〜</span> </div><p>僕の人生で、一番楽しみにしていたこと。<br>それは、ゲンちゃんと家族でキャンプに行くことだった。</p><p>ゲンちゃん。<br>お父さんの親友。<br>大人なのに、「ゲンちゃん」と呼んでいい人だった。</p><p>ゲンちゃんは、とにかく周りを明るくする人だった。<br>一緒にいると、空気が変わる。<br>笑いが増える。<br>楽しくなる。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;"> ゲンちゃんといると、自分の父親がクールに見えた。<br><br> <span style="font-size: 0.9em; color: #888;">（お父さん、ごめん）</span> </div><p>キャンプ場に着いたら、さらに妄想は加速する。<br>テントを張る場所を決めるだけで、冒険だった。<br>「ここは敵に見つかりにくい」とか言って。</p><div style="text-align: center; margin: 2em 0; color: #555;"> 車の中から、もう楽しい。 </div><p>でも、僕の中でキャンプの醍醐味は、実は別のところにあった。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;"> 帰り道。 </div><p>目一杯楽しんだ後の、帰りの車。<br>あの雰囲気が、たまらなく好きだった。</p><p>そんな時、ゲンちゃんが言う。<br>「温泉寄って帰ろうか」</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0; text-align: center;"> <strong>この一言のワクワク感、伝わるかな。</strong><br><br> 伝わってほしい。 </div><p>夜の温泉。<br>露天風呂。<br>外は寒い。<br>でも湯船はあったかい。<br>星が見える。</p><div style="text-align: center; margin: 2em 0;"> <span style="font-size: 1.1em;">疲れた体に、お湯が染みる。</span><br><br> <span style="color: #666;">子供ながらに、「生きてるって最高だな」と思った。</span> </div><div style="text-align: center; margin: 2em 0;"> <span style="font-size: 1.3em; font-weight: bold;">家族って、最高だ。</span><br><br> <span style="color: #666;">何が起きても、笑える。</span> </div><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"> <em>幼少期編・第3話「ゲンちゃんと夜の温泉」 —— 完</em> </div>`
  },
  {
    id: 44,
    title: "少年期編・第4話「A面とB面」",
    category: "Story",
    chapter: 4,
    readTime: "4 min",
    image: "/images/少年期編サムネ.png",
    excerpt: "僕には、A面とB面がある。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜僕には、2つの顔があった〜</span></div><p>僕は引っ越しが多い子供だった。<br>ログハウス → 平屋 → 庭付き一軒家。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">ログハウス → 平屋 → 庭付き一軒家<br><br><span style="font-size: 0.9em; color: #888;">なんか、ランクが迷走してる気がするけど、気にしない。</span></div><p>この頃、僕はひたすらサッカーボールを追いかけていた。<br>西野に来て、サッカー少年団に入った。</p><p>でも、ここで僕はあることに気づく。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">僕には、A面とB面がある。</div><p>A面。サッカー少年団でやるサッカー。<br>B面。それ以外でやるサッカー。</p><p>この2つが、全然違った。</p><p>A面の僕は、ダメだった。<br>緊張する。体が固まる。<br>「ちゃんとやらなきゃ」「見られている」</p><p>でも、B面は違った。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;">少年団が終わった後、近所のみんなでやるサッカー。<br><br>休日に、お父さんや大人の人と混ざってやるサッカー。<br><br><strong>こっちは、最高だった。</strong></div><p>体が勝手に動いた。<br>褒められると、もっと動ける。</p><p>A面の僕と、B面の僕。<br>まるで別人だった。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">今思えば、これが僕の「本番に弱い」の始まりだったのかもしれない。<br><br>見られると、固まる。<br><br>評価されると、動けなくなる。<br><br><strong>この癖は、後々まで僕を苦しめることになる。</strong></div><p>でも、B面の楽しさを知っていたから、サッカーは続けられた。<br>あの時間があったから、ボールを蹴ることが嫌いにならなかった。</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.3em; font-weight: bold;">A面とB面。</span><br><br><span style="color: #666;">僕のサッカーライフは、こうして始まった。</span></div><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>幼少期編・第4話「A面とB面」 —— 完</em></div>`
  },
  {
    id: 48,
    title: "少年期編・第5話「ハイパーヨーヨーと浦口先生」",
    category: "Story",
    chapter: 5,
    readTime: "6 min",
    image: "/images/少年期編サムネ.png",
    excerpt: "浦口先生。僕らのサッカー少年団の監督。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜僕が調子に乗った話〜</span></div><p>浦口先生。<br>僕らのサッカー少年団の監督。<br>いつも長靴を履いている。風貌は、山下達郎のようなオーラがある。</p><p>基本、無口。<br>何を考えているか分からない。<br>でも、一言発すると、それが全部正解に聞こえる。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">具体的にサッカーを教えてくれたわけじゃない。<br><br>でも、<strong>背中で何かを物語っている人</strong>だった。</div><p>学校で、ハイパーヨーヨーが流行り始めた。<br>僕には秘密兵器があった。<br>ハワイでしか売ってない、光るヨーヨーを持っていたのだ。</p><p>そんな中、あの日が来た。<br>友達が駄菓子を配ってくれた。<br>後で知った。それは万引きしたものだった。</p><p>サッカー少年団の中で、万引きが流行り始めた。<br>気づいたら、僕もそのうちの一人だった。</p><div style="font-size: 1.2em; font-weight: bold; text-align: center; margin: 2em 0;">大型デパートへ、ヨーヨーを盗みに行く。</div><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">速攻で捕まった。</div><p>後ろを振り向くと、5人の大人が横並びになって、僕らを歩いて追いかけてくる。<br>ドラマのオープニングシーンみたいだった。</p><p>親が迎えに来てくれた。<br>お父さんが言った。</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0;">「やるなら見つかるなよ」</div><p>次の日。浦口先生に呼ばれた。<br>「万引きを今までにした奴、立て」</p><p>浦口先生は、一人一人にビンタをしていった。</p><div style="text-align: center; margin: 2em 0; color: #555;">僕の番が来た。</div><p>……何も言われない。<br>ビンタ。<br>たぶん、他の人より軽かった。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">でも、その「何も言われない感じ」と、<br><br>「少し軽いビンタ」が、<br><br><strong>僕にはとても重たく感じた。</strong></div><p>浦口先生は、僕に期待してくれていたんだと思う。<br>それなのに、僕は裏切った。</p><div style="font-size: 1.1em; text-align: center; margin: 2em 0;">調子に乗るのは、やめよう。<br><br><strong>悪いことは、もうやめよう。</strong></div><p>そう、心に決めた。<br>浦口先生、ありがとう。</p><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>少年期編・第2話「ハイパーヨーヨーと浦口先生」 —— 完</em></div>`
  },
  {
    id: 58,
    title: "少年期編・第6話「ウォークマンと、僕らの秘密基地」",
    category: "Story",
    chapter: 6,
    readTime: "5 min",
    image: "/images/少年期編サムネ.png",
    excerpt: "俺の人生を変えるアイテムが2つ、手に入った。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜少年期編・第3話〜</span></div><h1 style="text-align: center; margin-bottom: 1.5em;">ウォークマンと、僕らの秘密基地</h1><p>中学1年生になった。</p><p>でも、時代は変わりつつあった。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><p style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 0;">テレビゲーム時代の到来だ。</p></div><p>でも、この完璧なバランスに、<strong>革命</strong>が起きる。</p><p>俺の人生を変える<strong>アイテムが2つ</strong>、手に入ったのだ。</p><p>一つ目は、</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.5em; font-weight: bold;">ウォークマン。</span></div><p>しかも、<strong>録音機能</strong>までついている。</p><p>二つ目は、</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.5em; font-weight: bold;">ヘッドホン。</span></div><p>この遊び道具2つを使って、俺は毎日の遊びを充実させた。<br><strong>録音しまくるのだ。</strong></p><p>一人で部屋にいる時、<strong>その遊びを永遠にヘッドホンで聞き続ける。</strong></p><p>最高か。</p><p>そして、この遊びをしていると、気づくことがある。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><p>「あ、こいつ、こんなに面白いことつぶやいていたんだ」</p></div><p>今思えば、これが「音楽制作」の原点だったのかもしれない。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0; text-align: center;"><p style="font-size: 1.3em; font-weight: bold; margin: 0;">次回、中学校編へ続く！</p></div>`
  },
  {
    id: 62,
    title: "中学校編・第7話「1,2,3,4の魔法」",
    category: "Story",
    chapter: 7,
    readTime: "5 min",
    image: "/images/中学校　前編.png",
    excerpt: "ツネの部屋には、大きなドラムセットがあった。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜中学校編・第1話〜</span></div><h1 style="text-align: center; margin-bottom: 1.5em;">1,2,3,4の魔法</h1><p>中学1年生になった。</p><p>登校メンバーに、<strong>「ツネ」</strong>が参加することになった。</p><p>そして、流れで<strong>ツネがサッカー部に入部</strong>した。<br>部活が終わったら、5〜6人でツネの家に行ってゲームやミニ四駆をすることがルーティンとなった。</p><p>ツネの家には、子どもたちが遊べる部屋と、ツネの部屋があった。<br>ツネの部屋には、<strong>大きなドラムセット</strong>があった。</p><p>でも、その時の俺は、まだ知らなかった。<br>この<strong>ドラムのある部屋</strong>が、俺の人生を変えることを。</p><h2>運命の日</h2><p>たまたま<strong>ドラムのあるツネの部屋</strong>でみんなが集まっていた。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><p>珍しく<strong>本を読む俺</strong>。</p><p><strong>ベースを弾くやつ</strong>。</p><p><strong>ギターを弾く加藤</strong>。</p><p><strong>ドラムを叩くツネ</strong>。</p></div><p>そんな中、加藤が言葉を発する。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><p style="font-size: 1.2em; font-weight: bold; text-align: center;">「少し、合わせるか」</p></div><p>そして、<br><strong>キョトン顔のツネが表情を変え</strong>、</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.8em; font-weight: bold; color: #ff6b35;">1, 2, 3, 4</span></div><p>とカウントを始める。</p><p>その瞬間、</p><div style="background-color: #ffebee; padding: 1.5em; border-radius: 8px; margin: 2em 0; border-left: 5px solid #ff6b35;"><p style="font-size: 1.3em; font-weight: bold; margin: 0;">一気に空気が変わった。</p></div><p><strong>音の塊が、僕の全身を駆け巡った。</strong></p><p>なんだ、これ。<br><strong>ヤバい。</strong></p><p>ツネの部屋での<strong>1,2,3,4のカウント</strong>。<br>深夜番組での<strong>モト冬樹のギター</strong>。<br>この2つが、俺を変えた。</p><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>中学校編・第1話「1,2,3,4の魔法」 —— 完</em></div>`
  },
  {
    id: 73,
    title: "中学校編・第8話「地域振興券2万円の奇跡」",
    category: "Story",
    chapter: 8,
    readTime: "5 min",
    image: "/images/中学校　前編.png",
    excerpt: "国から地域振興券が2万円配られる。13歳の僕にとって、それは無限の可能性だった。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜中学校編・第8話〜</span></div><h1 style="text-align: center; margin-bottom: 1.5em;">地域振興券2万円の奇跡</h1><p>ギター雑誌を買ってみた。</p><p>でも、僕が一番見ていたのは、</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.3em; font-weight: bold;">通販のページ。</span></div><p>なぜなら、</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><p style="font-size: 1.2em; font-weight: bold; text-align: center; margin: 0;">国から地域振興券が2万円配られるとのことで。</p></div><p>2万円。<br>13歳の僕にとって、それは、<br><strong>無限の可能性。</strong></p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.3em; font-weight: bold; color: #ff6b35;">ストラトキャスターの偽物を買うことになる。</span></div><p>届いた。<br>箱を開ける。</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0; text-align: center;"><p style="font-size: 1.4em; font-weight: bold; margin: 0;">オーパーツかのような、ギター。</p></div><p><strong>すごくかっこよく感じた。</strong><br>よし、勝ち。(^ ^)</p><p>でも、問題があった。<br><strong>弾き方はわからない。</strong></p><p>そして、ギターはオブジェと化した。</p><p>歩いて3分くらいのところに住んでいる、<strong>宮崎兄弟</strong>。<br><strong>兄、こーや</strong>が、<strong>生ドラム</strong>を買ったらしい！</p><p>そして、<br><strong>弟、ユウト</strong>は、<strong>ベース</strong>を買っていた！</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.5em; font-weight: bold; color: #ff6b35;">これバンドできるじゃん！</span></div><p>運命に感じた僕は、<strong>毎日のように遊びに行くことになる</strong>。</p><p>ついに、<br><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.4em; font-weight: bold;">バンドとして合わせる日が来た。</span></div></p><p>まさかの<strong>洋楽チョイス</strong>。<br><strong>グリーンデイの「バスケットケース」</strong>だった。</p><p>僕の気分に合わせて、みんなが入ってきてくれる喜び。<br><strong>すごかった。</strong></p><p>地域振興券2万円。<br>ストラトの偽物。<br>そして、僕は、<strong>ギターを弾く人間</strong>になった。</p><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>中学校編・第8話「地域振興券2万円の奇跡」 —— 完</em></div>`
  },
  {
    id: 75,
    title: "中学校編・第9話「サザエさんとWoo」",
    category: "Story",
    chapter: 9,
    readTime: "5 min",
    image: "/images/中学校　前編.png",
    excerpt: "僕の初めてのバンド、Woo。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜僕の初ライブと、初バンド〜</span></div><p>サッカー部は少しだけ退屈だった。<br>サッカー部の練習が終わると、スイッチが切り替わる。<br>音楽の脳みそになっていた。</p><p>もう少しで2年生という頃。<br>学校のイベントで、急遽ギターを弾くことになった。<br>ボーカルは福島さん。</p><p>「サザエさんをパンクバンドバージョンにしたらいいんじゃない？」</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0;">……え、いいね (^ ^)</div><p>これが、僕にとって初のライブだった。<br>そして、初のアレンジ作業だった。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">サザエさんのあの明るいメロディを、<br><br>パンクのテンポで、パンクのノリで。<br><br><strong>めちゃくちゃ楽しかった。</strong></div><p>そのイベントの後。<br>本田兄弟の兄、ユウが、タバコを吸いながら言った。</p><div style="font-size: 1.2em; font-weight: bold; text-align: center; margin: 2em 0;">「俺もバンドやりたい」</div><p>ボーカル：ユウ<br>ギター：俺<br>ドラム：コーヤ<br>ベース：ゴーちゃん</p><p>これで、僕の初めてのバンドが誕生した。</p><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">【Woo】</div><p>バンドの由来は、ユウと俺の名前。<br>ユウの「ユウ」と、ゆうきの「ゆう」。<br>ダブルでユウ。<br>だから、Woo。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0; text-align: center;"><strong>僕のバンド人生が、ここから始まった。</strong></div><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>中学校編・第9話「サザエさんとWoo」（前編） —— 完</em></div>`
  },
  {
    id: 81,
    title: "中学校編・第10話「琴似パトスと消去法の運命」",
    category: "Story",
    chapter: 10,
    readTime: "6 min",
    image: "/images/中学校　前編.png",
    excerpt: "Wooは、何をやるバンドなのか。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜消去法で出会った、運命〜</span></div><p>Wooは、何をやるバンドなのか。<br>コピーバンドだ。<br>問題は、誰の曲をやるか。</p><p>その前に、ひとつ話しておかなければならないことがある。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">琴似パトス事件。</div><p>同級生が、ライブハウスでライブをやるという。<br>琴似パトス。<br>その同級生というのが、何を隠そう、<strong>一緒に万引きをしたリョータだった。</strong></p><p>本格的なライブは、初体験だった。<br>そして。</p><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">1、2、3、4！</div><p>照明がビカーッ！<br>爆音がドカーン！<br>なんだこれ。</p><p>客席が、一瞬でカオスになった。<br>みんながサークルを作っている。</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.1em;">これが、ライブか。</span><br><br><span style="color: #666;">これが、バンドか。</span></div><p>そんな衝撃を胸に、僕らは会議を開いた。<br>Woo、何やる会議。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">まず、<strong>GLAYとL'Arc〜en〜Ciel</strong>は除外。<br><br>流行りすぎていた。<br><br><span style="font-size: 0.9em; color: #888;">（みんなやってるのは、なんか嫌だった）</span></div><p>じゃあ何やるんだ、俺たち (ﾟoﾟ;;</p><p>そこで、名前だけ聞いたことがあるバンドが浮上した。</p><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">THE YELLOW MONKEY。</div><p>曲は、一曲も知らなかった。<br>でも、名前は聞いたことがある。<br>なんかカッコよさそう。</p><p>消去法で残った、このバンド。<br>とりあえず、バンドスコアを見てみることにした。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;">……いけそうな感じがした。<br><br><strong>直感だ。</strong></div><p>僕らと同じ編成だ。<br>アルバム【8】のバンドスコアを手に取った。</p><div style="text-align: center; margin: 2em 0; color: #555;">そんな不純な動機で、<br><br><strong>THE YELLOW MONKEYのコピーバンドが生まれた。</strong></div><p>消去法だった。<br>でも、これが運命の出会いだった。</p><p>この頃、僕はすごい機材を手に入れた。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">MTR。</div><div style="background-color: #e3f2fd; padding: 1.5em; border-radius: 8px; margin: 2em 0;">簡単に言うと、<strong>「音を重ねて録音できる機械」</strong>だ。</div><p>そして僕は、もうひとつすごいマシーンをゲットする。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">YAMAHA QY100。</div><p>これは、ゲーム感覚でリズムやシーケンスを作れる機械だった。</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0;"><strong>僕の作曲人生が、本格的に始まった。</strong></div><p>MTRとQY100があれば。<br>いつでも一人でバンドができる。<br>これは、あの三角屋根の秘密基地と同じだった。</p><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>「琴似パトスと消去法の運命」 —— 完</em></div>`
  },
  {
    id: 84,
    title: "中学校編・第11話「メカラウロコと、僕らの東京ドーム」",
    category: "Story",
    chapter: 11,
    readTime: "7 min",
    image: "/images/中学校　後編.png",
    excerpt: "2001年1月8日。東京ドーム。",
    date: "2025-12-15",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666;">〜中学校編・最終話〜</span></div><h2>1. 二重生活</h2><p>僕は、二重生活を送っていた。<br>A面：サッカー部の佐藤。<br>B面：バンドマンの勇輝。</p><h2>3. 2001年1月8日</h2><p>2001年1月8日。<br>この日付を、僕は一生忘れない。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">THE YELLOW MONKEY<br>「メカラ ウロコ・8」<br>東京ドーム</div><p>事実上の、ラストライブだった。<br>ビデオを見ていたら、ある曲が流れた。<br>イントロが始まった瞬間、体が固まった。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">「外国で飛行機が落ちました」</div><p>あの曲だ。<br>あの先輩が歌っていたのは、<strong>JAM</strong>という曲だった。</p><div style="background-color: #fffde7; padding: 1.5em; border-radius: 8px; margin: 2em 0;"><strong>THE YELLOW MONKEYだったのか。</strong></div><p>消去法で選んだはずのバンド。<br>でも、僕は知らないうちに、もうこのバンドに出会っていた。</p><div style="text-align: center; margin: 2em 0; color: #555;">運命って、こういうことなのかもしれない。</div><h2>5. 俺らも、やろう</h2><p>このビデオに感化されて、僕らは決めた。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">「ライブ、やろう」</div><p>場所は公民館。<br>近くの、同じ地域にある公民館。<br>数千円で借りれる。</p><h2>6. 進路という壁</h2><p>もう中学3年生だった。<br>そんな時、母がパンフレットを持ってきた。<br>留寿都高校。</p><div style="background-color: #e3f2fd; padding: 1.5em; border-radius: 8px; margin: 2em 0;">Jリーガーが使うような、<strong>天然芝のサッカーグラウンド</strong>。<br><br><strong>農業</strong>と<strong>介護</strong>が学べる、特殊な学校。</div><p>ライブのために時間を使いたかった。<br>受験に時間を使いたくなかった。<br><strong>留寿都高校に行くことを、直感で決めた。</strong></p><p>この話を、ユウにした。<br>「俺も、そこ行く」<br>……え？</p><div style="background-color: #fff3e0; padding: 1.5em; border-radius: 8px; margin: 2em 0;">ユウも、留寿都高校に行くことになった。<br><br><strong>バンドのボーカルと、ギターが、同じ高校。</strong></div><h2>13. 公民館の東京ドーム</h2><p>ライブ当日。<br>公民館に、お客さんが集まってきた。</p><p>セットリストは、メカラウロコ・8の丸パクリ。<br>でも、関係なかった。<br>僕らは、僕らの東京ドームをやっていた。</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0;"><strong>公民館ライブ、成功。</strong></div><h2>14. それぞれの道へ</h2><p>中学校生活が、終わろうとしていた。<br>コーヤは、違う高校に行く。<br>ゴーちゃんも、違う高校に行く。<br>Wooは、ここで一度解散だ。</p><div style="background-color: #f5f5f5; padding: 1.5em; border-radius: 8px; margin: 2em 0;">でも、僕とユウは一緒だ。<br><br><strong>留寿都村で、また何か始めればいい。</strong></div><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.1em; color: #666;">消去法で出会った運命が、</span><br><br><span style="font-size: 1.1em; color: #666;">僕の人生を動かし始めていた。</span></div><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0;">さあ、留寿都へ。</div><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.3em; font-weight: bold;">中学校編、完。</span><br><br><span style="color: #666;">高校編へ続く——</span></div><div style="text-align: right; color: #888; font-size: 0.9em; margin-top: 3em;"><em>中学校編・第11話「メカラウロコと、僕らの東京ドーム」 —— 完</em></div>`
  },

  // --- AI活用術 (Tech) ---
  {
    id: 88,
    title: "第1話 セガサターンを選んだ男が、AIツール選びで「王道」を行くことにした話",
    category: "AI",
    date: "2025-12-15",
    image: "/images/01.png",
    content: `<div style="text-align: center; margin-bottom: 2em;"><span style="font-size: 0.9em; color: #666; background-color: #fff; padding: 0.5em 1em; border-radius: 4px;">〜AI活用術シリーズ・第1話〜</span></div><h2 style="color: #333; border-bottom: 3px solid #333; padding-bottom: 0.5em;">セガサターンを選んだ男が、AIツール選びで「王道」を行くことにした話</h2><p>僕の人生、逆張りの歴史だった。</p><div style="background-color: #ffebee; padding: 1.5em; border-radius: 8px; margin: 1.5em 0; color: #333;"><strong style="color: #c62828;">【1994年、運命の選択】</strong><br><br>セガサターン vs プレイステーション。<br><br>僕は親に頼んで、セガサターンを買ってもらった。<br><br>「サターン、天下取るっしょ」<br><br>……世間はプレステに行った。</div><p>もっと昔のVHS vs ベータ戦争。</p><p>あの時代に生きてたら、たぶんベータを選んでた自信がある。</p><p><strong>そう、僕は「負ける方」を選ぶ才能があるのだ。</strong></p><p>(ﾟoﾟ;;</p><p>だから今回、AIツール選びでは決めていた。</p><div style="text-align: center; margin: 2em 0;"><span style="font-size: 1.4em; font-weight: bold; color: #333; background-color: #fff3e0; padding: 0.5em 1em; border-radius: 8px;">「王道を行く」</span></div><p>最初はSiri、次にGemini……と触ってきたけど、ここは逆張り封印。</p><p><strong>ChatGPT、いきます。</strong></p>`
  },
  {
    id: 90,
    title: "第2話 ChatGPTに音楽ミックスを相談したら、プラグインのつまみまで教えてくれた話",
    category: "AI",
    date: "2025-12-15",
    image: "/images/02.png",
    content: `<p>かつてChatGPTには音楽データを投げられた。<br>「キックのアタックを出したい」と言うと、「そのプラグインならつまみを2時の方向に」と教えてくれた。</p><p>英語のYouTube動画も要約してくれた。<br>神ツールだった。</p><p>しかし、規制の壁が立ちはだかる。<br>音楽データを読み込んでくれなくなった。<br>そこで出会ったのが、Gemini 3.0だった。</p>`
  },
  {
    id: 92,
    title: "第3話 HTMLコード知識ゼロの僕が、Gemini 3.0で「200万円レベル」のホームページを作った話",
    category: "AI",
    date: "2025-12-15",
    image: "/images/03.png",
    content: `<p>「ホームページ、自分で作ってみよう」<br>コード知識ゼロ。でもGemini 3.0に自分を全部覚えてもらい、YouTubeで見つけたデザインを見せた。</p><p>壁打ちの中で「第3の場所」というコンセプトが生まれた。<br>「NOT JUST A STUDIO.」</p><p>30時間の格闘の末、プロに「200万レベル」と言われるサイトが完成した。</p>`
  },
  {
    id: 94,
    title: "第4話 Geminiと喧嘩した30時間 〜音声入力アプリ「Aqua」と完璧主義者の逆襲〜",
    category: "AI",
    date: "2025-12-15",
    image: "/images/04.png",
    content: `<p>Geminiとの戦いは地獄だった。<br>600行のコードが突然200行になる。<br>「それはもうクリアしたんだよ！」とAIにキレる僕。</p><p>音声入力アプリ「Aqua」を使っていたため、感情がそのまま文字になった。<br>細かい指示が通じないもどかしさ。<br>それでも、自分のこだわりを形にできた。</p>`
  },
  {
    id: 96,
    title: "第5話 Gensparkで気づいた「無敵の使い方」〜2025年12月、AI四天王体制〜",
    category: "AI",
    date: "2025-12-15",
    image: "/images/05.png",
    content: `<p>Geminiのバグが悪化したため、Gensparkへ乗り換えた。<br>エージェントモードは優秀だがクレジットが減る。<br>そこで気づいた「AIチャットモード」の無敵さ。</p><p>Gemini, ChatGPT, Claudeが使い放題。<br>特にClaudeの文章力はずば抜けていた。<br>今では用途に合わせてAI四天王を使い分けている。</p>`
  },

  // --- DTM機材 (Gear) ---
  {
    id: 131,
    title: "【2025年版】DTMの始め方｜PC＋ヘッドホンだけで曲を作る方法",
    category: "Gear",
    date: "2025-12-16",
    image: "/images/PCとヘッドホン.png",
    content: `<p>DTMを始めたいけど、機材が高すぎる？<br>結論から言うと、最初は「PC」と「ヘッドホン」だけでいい。</p><p>インターフェースもマイクも、最初は文鎮だ。<br>まずは無料DAWと、最強のサブスク「Splice」を使え。</p><p>Spliceの素材をドラッグ＆ドロップするだけで、パズルゲームのようにプロ級の曲が作れる。<br>違和感を感じるようになったら、その時初めて高い機材を買えばいい。</p>`
  }
];
