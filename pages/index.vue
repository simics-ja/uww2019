<template>
  <div class="pb-3">
    <div>
      <Jumbotron />
    </div>
    <div class="container shadow-sm rounded-lg mb-3">
      <b-container class="py-3 px-3">
        <b-row>
          <b-col class="mb-4 uww-content">
            <h1 id="uww-overview" class="px-5 mb-3 text-center marking-scroll-success uww-header uww-title-font">
              Welcome to UWW 2019
            </h1>
            <div class="uww-body">
              <b-container>
                <b-row>
                  <b-col lg="3" class="uww-top-image-wrapper">
                    <b-img thumbnail rounded="circle" src="~/assets/images/uww-top.jpg" class="uww-top-image mb-4" />
                  </b-col>
                  <b-col lg="9">
                    <div>
                      <p>ユビキタス・ウェアラブル技術の発展はめざましく、これらの技術に関する研究開発が活発に行われています。神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、今年は13回目となります。例年、ユビキタス・ウェアラブル技術に関する50件程度の密度の濃い発表と議論を行っています。本年度も本ワークショップを下記の通り企画しておりますので、是非ご参加いただけますようお願い致します。</p>
                    </div>
                    <div class="px-3 py-3 gray-highlighter rounded-lg">
                      <p>本ワークショップの特色は以下の通りです。</p>
                      <ul>
                        <li>A4原稿1枚記述</li>
                        <li>一人15分程度のショートプレゼンテーション</li>
                        <li>参加者間の交流を目指した1泊2日の合宿型ワークショップ</li>
                        <li>
                          実践的な情報処理技術に関する特別企画などを含んだ
                          <span class="marking-hover-secondary">「夜のディスカッション」</span>
                        </li>
                      </ul>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <div class="mb-4 uww-content">
              <h1 id="uww-update" class="mb-3 text-center marking-scroll-secondary uww-header uww-title-font">
                Updates
              </h1>
              <div class="uww-body">
                <div
                  class="border border-secondary px-4 py-2 rounded-lg"
                  style="overflow-y:scroll;height:10em"
                >
                  <ul class="list-unstyled">
                    <li>
                      <b-badge variant="secondary">
                        2019-10-01
                      </b-badge>
                      <span class="ml-2">
                        <b-link :href="absolutePath + 'reg'">参加登録ページ</b-link>をオープンしました。
                      </span>
                    </li>
                    <li>
                      <b-badge variant="secondary">
                        2019-09-30
                      </b-badge>
                      <span class="ml-2">原稿テンプレートは上部のナビゲーションバーからダウンロードできます。</span>
                    </li>
                    <li>
                      <b-badge variant="secondary">
                        2019-09-20
                      </b-badge>
                      <span class="ml-2">WEBサイトをオープンしました。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mb-4 uww-content">
              <h1 id="uww-price" class="mb-3 text-center marking-scroll-warning uww-header uww-title-font">
                Registration fee
              </h1>
              <div class="uww-body">
                <table class="fine2col-warning mb-4">
                  <tr>
                    <th>一般</th>
                    <td>20,000円</td>
                  </tr>
                  <tr>
                    <th>学生</th>
                    <td>16,000円</td>
                  </tr>
                </table>
                <div class="px-3 py-3 gray-highlighter rounded-lg">
                  <ul>
                    <li>お支払いは当日現金にてお願いします。</li>
                    <li>社会人学生については一般と同じ参加費になります。</li>
                    <li>内訳が必要な場合は宿泊費12,000円（食費込）、参加費（一般）8,000円、（学生）4,000円としております。</li>
                    <li>宿泊せずに参加される場合は、参加費（一般）8,000円、（学生）4,000円のみを頂戴いたします。</li>
                    <li>宿泊せずに懇親会に参加される方は、懇親会費5,000円を頂戴致します。</li>
                    <li>参加費は1日のみの参加の場合でも減額は致しませんので、ご了承下さい。</li>
                  </ul>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="mb-4 uww-content">
              <h1 id="uww-deadline" class="mb-3 text-center marking-scroll-danger uww-header uww-title-font">
                Deadline
              </h1>
              <div class="uww-body">
                <table class="fine2col-danger">
                  <tr>
                    <th>参加申込締切</th>
                    <td>2019年11月 3日（日） 23:59（JST）</td>
                  </tr>
                  <tr>
                    <th>原稿提出締切</th>
                    <td>
                      2019年12月 1日（日） 23:59（JST）
                      <span class="text-danger">【厳守】</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="mb-4 uww-content">
              <h1 id="uww-schedule" class="mb-3 text-center marking-scroll-info uww-header uww-title-font">
                Schedule
              </h1>
              <div class="uww-body">
                <div id="uww-schedule-list">
                  <h3 class="text-center">
                    12月20日（金）
                  </h3>
                  <div class="uww-body">
                    <table class="fine2col-info mb-4">
                      <tr>
                        <th>9:00</th>
                        <td>受付開始</td>
                      </tr>
                      <tr>
                        <th>10:00-10:15</th>
                        <td>オープニング</td>
                      </tr>
                      <tr>
                        <th>10:15-17:00</th>
                        <td>口頭発表セッション（途中休憩あり）</td>
                      </tr>
                      <tr>
                        <th>18:00-19:30</th>
                        <td>懇親会</td>
                      </tr>
                      <tr>
                        <th>20:00-23:00</th>
                        <td>ナイトセッション</td>
                      </tr>
                    </table>
                    <h3 class="text-center">
                      12月21日（土）
                    </h3>
                    <table class="fine2col-info mb-4">
                      <tr>
                        <th>9:00-17:00</th>
                        <td>口頭発表セッション（途中休憩あり）</td>
                      </tr>
                      <tr>
                        <th>17:00-17:15</th>
                        <td>表彰・クロージング</td>
                      </tr>
                    </table>
                    <div class="px-3 py-3 gray-highlighter rounded-lg">
                      <span>上記は暫定のタイムテーブルであり、参加者数等により変更が生じる場合がございます。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="7" class="mb-4 uww-content">
            <h1 id="uww-member" class="mb-3 text-center marking-scroll-primary uww-header uww-title-font">
              Organizers
            </h1>
            <div class="uww-body no-margin-paragraph">
              <table class="fine2col-primary">
                <tr>
                  <th>ワークショップ委員長</th>
                  <td>塚本昌彦（神戸大）</td>
                </tr>
                <tr>
                  <th>ワークショップ副委員長</th>
                  <td>寺田 努（神戸大）</td>
                </tr>
                <tr>
                  <th>実行委員長</th>
                  <td>村尾和哉（立命館大）</td>
                </tr>
                <tr>
                  <th>実行副委員長</th>
                  <td>磯山直也（奈良先端大）</td>
                </tr>
                <tr>
                  <th>会計</th>
                  <td>上田健太郎（神戸大）</td>
                </tr>
                <tr>
                  <th>ウェブシステム</th>
                  <td>土田修平（産業技術総合研究所）</td>
                </tr>
                <tr>
                  <th>プログラム</th>
                  <td>渡邉拓貴（北海道大）</td>
                </tr>
                <tr>
                  <th>出版</th>
                  <td>後藤佑介（岡山大）、双見京介（立命館大）</td>
                </tr>
                <tr>
                  <th>広報（ウェブページ・デザイン）</th>
                  <td>清水友順（神戸大）</td>
                </tr>
                <tr>
                  <th>ローカル・ナイトセッション</th>
                  <td>大西鮎美（神戸大）</td>
                </tr>
              </table>
            </div>
          </b-col>
          <b-col lg="5" class="mb-4 uww-content">
            <h1 id="uww-sponsor" class="mb-3 text-center marking-scroll-success uww-header uww-title-font">
              Sponsors
            </h1>
            <div class="uww-body">
              <div class="text-center mb-3">
                <div class="mb-3">
                  <p class="mb-1">
                    神戸大学大学院工学研究科 塚本・寺田研究室
                  </p>
                  <b-img src="~/assets/images/tsukamototerada_logo.png" class="sponsor-brand" />
                </div>
                <div class="mb-3">
                  <p class="mb-1">
                    NPO法人ウェアラブルコンピュータ研究開発機構
                  </p>
                  <b-img src="~/assets/images/teamtsukamoto_logo.png" class="sponsor-brand" />
                </div>
              </div>
              <div class="px-3 py-3 gray-highlighter rounded-lg">
                本ワークショップは、科学技術振興機構戦略的創造研究推進事業(CREST)、情報通信研究機構日欧共同公募委託研究(NICT)、国立研究開発法人新エネルギー・産業技術総合開発機構次世代人工知能・ロボット中核技術開発の成果報告会を兼ねています。
              </div>
            </div>
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
  },
  computed: {
    absolutePath () {
      return `${process.env.baseUrl}${this.$router.history.base}${this.$route.path}`
    }
  },
  mounted () {
    const headers = [
      'uww-overview',
      'uww-update',
      'uww-deadline',
      'uww-price',
      'uww-schedule',
      'uww-member',
      'uww-sponsor'
    ]
    for (const i in headers) {
      const scene = this.$scrollmagic
        .scene({
          triggerElement: '#' + headers[i],
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle('#' + headers[i], 'active')
      this.$scrollmagic.addScene(scene)
    }
  }
}
</script>

<style lang="scss">
.uww-top-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.uww-top-image {
  width: 100%;
  max-height: 40vh;
  max-width: 40vh;
}
.gray-highlighter {
  background-color: $gray-200;
}
.uww-content {
  text-align: center;
  .uww-header {
    display: inline-block;
  }
  .uww-body {
    text-align: left;
  }
}
.sponsor-brand {
  max-width: 80%;
}
</style>
