<template>
  <div class="pb-3">
    <div>
      <b-jumbotron class="jb-wrapper uww-title-font tex-center">
        <div class="w-100">
          <h1 class="ml-auto mr-auto text-center">
            Program
          </h1>
        </div>
      </b-jumbotron>
    </div>
    <div class="container mb-3">
      <b-container class="py-3 px-3">
        <b-col>
          <b-row class="mb-3 mt-3">
            <fa :icon="faSearch" size="lg" fixed-width class="mr-3 mt-auto mb-auto" />
            <b-form-input v-model="query" type="text" placeholder="incremental search (title / authors)" class="w-75" />
          </b-row>
          <b-row>
            <fa :icon="faUser" class="d-inline-block mr-2 mt-auto mb-auto" />: 発表者
          </b-row>
          <b-row v-for="session in queryFilter" :key="session.sessionId">
            <div v-if="session.sessionId==='1'" class="uww-content w-100">
              <h1 id="uww-firstday" class="uww-header uww-title-font ml-auto mr-auto mt-5 mb-3 marking-scroll-primary">
                {{ session.date }}
              </h1>
            </div>
            <div v-if="session.sessionId==='19'" class="uww-content w-100">
              <h1 id="uww-secondday" class="text-center uww-header uww-title-font mt-5 mb-3 marking-scroll-secondary">
                {{ session.date }}
              </h1>
            </div>
            <div v-if="!query || (session.hasPresentation && session.presentations.length > 0)" class="container shadow-sm rounded-lg mt-2 mb-2 p-5 uww-body">
              <div class="w-100">
                <h5 class="ml-auto mr-auto text-center">
                  {{ session.duration }}
                </h5>
                <h2 class="ml-auto mr-auto text-center">
                  {{ session.sessionName }}
                </h2>
              </div>
              <div v-if="session.hasPresentation">
                <div class="mb-3">
                  座長: {{ session.chairperson }}
                </div>
                <div>
                  <ul>
                    <li v-for="presentation in session.presentations" :key="presentation.presentationId">
                      <h3>
                        {{ presentation.title }}
                      </h3>
                      <p><fa :icon="faUser" class="mr-2" />{{ presentation.speaker }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-row>
          <b-row>
            <div class="uww-content w-100">
              <h1 id="uww-bus-info" class="uww-header uww-title-font ml-auto mr-auto mt-5 marking-scroll-success">
                バス情報（帰り）
              </h1>
              <div class="container shadow-sm rounded-lg mt-2 mb-2 p-5 uww-body text-center ">
                <h2 class="ml-auto mr-auto">
                  淡路夢舞台前
                </h2>
                <div class="text-center ml-auto mr-auto">
                  <p class="mb-0">
                    17:46発 (新神戸 18:42着)
                  </p>
                  <p class="mb-0">
                    18:16発 (新神戸 19:12着)
                  </p>
                  <p class="mb-0">
                    19:16発 (新神戸 20:12着)
                  </p>
                </div>
              </div>
            </div>
          </b-row>
        </b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  data () {
    return {
      query: ''
    }
  },
  computed: {
    absolutePath () {
      return `${process.env.baseUrl}${this.$router.history.base}${this.$route.path}`
    },
    queryFilter () {
      const programList = this.programList
      const query = this.query
      const filteredList = JSON.parse(JSON.stringify(programList))
      if (!query) {
        return filteredList
      } else {
        for (const index in filteredList) {
          if (filteredList[index].hasPresentation) {
            const queryResults = filteredList[index].presentations.filter((presentation) => {
              return presentation.title.includes(query) || presentation.speaker.includes(query)
            })
            filteredList[index].presentations = queryResults
          }
        }
        return filteredList
      }
    },
    faSearch () {
      return faSearch
    },
    faUser () {
      return faUser
    }
  },
  asyncData ({ store }) {
    const programList = store.getters['program/getProgramList']
    return {
      programList
    }
  },
  mounted () {
    this.$scrollmagic.addScene(
      this.$scrollmagic
        .scene({
          triggerElement: '#uww-firstday',
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle('.marking-scroll-primary', 'active')
    )
    this.$scrollmagic.addScene(
      this.$scrollmagic
        .scene({
          triggerElement: '#uww-secondday',
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle('.marking-scroll-secondary', 'active')
    )
    this.$scrollmagic.addScene(
      this.$scrollmagic
        .scene({
          triggerElement: '#uww-bus-info',
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle('.marking-scroll-success', 'active')
    )
  }
}
</script>

<style lang="scss" scoped>
.jb-wrapper {
  background: url('../../assets/images/jumbotron-program.jpg') center no-repeat;
  background-size: cover;
  color: rgba(250, 250, 250, 1);
  text-shadow: 1px 1px 3px #202020;
  border-radius: 0;
}

.jb-subinfo {
  p {
    margin: 0;
    padding: 0;
    text-align: right;
  }
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
</style>
