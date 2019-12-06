import jsonData from '~/assets/jsons/program.json'

// 状態管理
export const state = () => ({
  data: jsonData
})

// getters
export const getters = {
  getProgramList (state) {
    return state.data.program
  }
}
