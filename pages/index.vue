<template>
  <div>
    <div>
      <Jumbotron />
    </div>
    <div class="container">
      <b-container class="py-3 px-3">
        <b-row>
          <b-col id="uww-overview" class="mb-4">
            <h1 class="mb-3 text-center">
              UWWについて
            </h1>
            <p>
              ユビキタス・ウェアラブル技術の発展はめざましく，これらの技術に関する研究開発が活発に行われています．神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では，ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し，今年は13回目となります．例年，ユビキタス・ウェアラブル技術に関する50件程度の密度の濃い発表と議論を行っています．本年度も本ワークショップを下記の通り企画しておりますので，是非ご参加いただけますようお願い致します．
            </p>
            <p>本ワークショップの特色は以下の通りです．</p>
            <ul>
              <li>
                A4原稿1枚記述
              </li>
              <li>
                一人15分程度のショートプレゼンテーション
              </li>
              <li>
                参加者間の交流を目指した1泊2日の合宿型ワークショップ
              </li>
              <li>
                実践的な情報処理技術に関する特別企画などを含んだ<span class="marking-hover-secondary">「夜のディスカッション」</span>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div id="uww-deadline" class="mb-4">
              <h1 class="mb-3 text-center">
                各種締切
              </h1>
              <p>
                <ul>
                  <li>
                    参加申込締切：2019年11月 3日（日） 23:59（JST）
                  </li>
                  <li>
                    原稿提出締切：2019年12月 1日（日） 23:59（JST）<span class="text-danger">【厳守】</span>
                  </li>
                </ul>
              </p>
            </div>
            <div id="uww-price" class="mb-4">
              <h1 class="mb-3 text-center">
                参加費（宿泊費・懇親会費込み）
              </h1>
              <p>
                一般：XX,XXX円
              </p>
              <p>
                学生（社会人学生を除く）：XX,XXX円
              </p>
              <ul>
                <li>
                  お支払いは当日現金にてお願いします．
                </li>
                <li>
                  内訳が必要な場合は宿泊費XX,XXX円（食費込），参加費（一般）X,XXX，（学生）X,XXX円としております．
                </li>
                <li>
                  宿泊せずに参加される場合は，参加費（一般）X,XXX円，（学生）X,XXX円のみを頂戴いたします．
                </li>
                <li>
                  宿泊せずに懇親会に参加される方は，懇親会費X,XXX円を頂戴致します．
                </li>
                <li>
                  参加費は1日のみの参加の場合でも減額は致しませんので，ご了承下さい．
                </li>
              </ul>
            </div>
          </b-col>
          <b-col id="uww-program">
            <h1 class="mb-3 text-center">
              プログラム
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col id="uww-member" class="mb-4">
            <h1 class="mb-3 text-center">
              運営組織
            </h1>
            <p>ワークショップ委員長：塚本昌彦（神戸大）</p>
            <p>ワークショップ副委員長：寺田 努（神戸大）</p>
            <p>実行委員長：村尾和哉（立命館大）</p>
            <p>実行副委員長：磯山直也（奈良先端大）</p>
            <p>会計：上田健太郎（神戸大）</p>
            <p>ウェブシステム：土田修平（産業技術総合研究所）</p>
            <p>プログラム：渡邉拓貴（北海道大）</p>
            <p>出版：後藤佑介（岡山大），双見京介（立命館大）</p>
            <p>広報（ウェブページ・デザイン）：清水友順（神戸大）</p>
            <p>ローカル・ナイトセッション：大西鮎美（神戸大）</p>
          </b-col>
          <b-col class="mb-4">
            <h1 class="mb-3 text-center">
              主催
            </h1>
            <p>（仮）本ワークショップは、科学技術振興機構戦略的創造研究推進事業(さきがけ)、科学技術振興機構戦略的創造研究推進事業(CREST)、科学技術振興機構研究成果最適展開支援プログラム(A-STEP)、情報通信研究機構日欧共同公募委託研究(NICT)、国立研究開発法人新エネルギー・産業技術総合開発機構次世代人工知能・ロボット中核技術開発の成果報告会を兼ねています。</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'

export default {
  components: {
    Jumbotron
  }
}
</script>

<style lang="scss">
#uww-member > p {
  margin-bottom: 0
}
</style>
