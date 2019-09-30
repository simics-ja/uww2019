<template>
  <div>
    <div id="contact" class="text-center py-3 shadow-sm gray-highlighter">
      <fa :icon="faEnvelope" /><span class="ml-2">uww2019_org"at"ubi.eedept.kobe-u.ac.jp</span>
    </div>
    <div class="pt-3">
      <b-container id="uww-links">
        <h1 class="uww-title-font">
          Link
        </h1>
        <b-row>
          <b-col lg="6">
            <b-link href="http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop2007/" class="uww-link-style">
              UWW2007 @シーサイドホテル舞子ビラ神戸
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop2008/" class="uww-link-style">
              UWW2008 @天然ラジウム温泉 太山寺 なでしこの湯
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2009" class="uww-link-style">
              UWW2009 @グリーンピア三木
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2010/" class="uww-link-style">
              UWW2010 @兵庫県立美術館 アトリエ2
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2011/" class="uww-link-style">
              UWW2011 @シーサイドホテル舞子ビラ神戸
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2012/" class="uww-link-style">
              UWW2012 @シーサイドホテル舞子ビラ神戸
            </b-link>
          </b-col>
          <b-col lg="6">
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2013/" class="uww-link-style">
              UWW2013 @兵庫県立淡路夢舞台国際会議場
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2014/" class="uww-link-style">
              UWW2014 @兵庫県立淡路夢舞台国際会議場
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2015/" class="uww-link-style">
              UWW2015 @兵庫県立淡路夢舞台国際会議場
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2016/" class="uww-link-style">
              UWW2016 @神戸大学百年記念館
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2017/" class="uww-link-style">
              UWW2017 @兵庫県立淡路夢舞台国際会議場
            </b-link>
            <b-link href="http://cse.eedept.kobe-u.ac.jp/uww2018/" class="uww-link-style">
              UWW2018 @兵庫県立淡路夢舞台国際会議場
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="copyright" class="text-center py-5">
      <span>(c) Tsukamoto Terada lab.</span>
    </div>
  </div>
</template>

<script>
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faEnvelope () {
      return faEnvelope
    }
  }
}
</script>

<style lang="scss" scoped>
.gray-highlighter {
  background-color: $gray-200;
}
.uww-link-style {
  display: block;
  font-size: 0.9rem;
  color: $gray-600;
  text-decoration: underline;
}
.uww-link-style:hover {
  color: $gray-500;
}
</style>
