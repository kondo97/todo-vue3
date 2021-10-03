import { getAccessorType } from 'typed-vuex'

// 例えば、store/age.ts のようなサブモジュールが存在する場合、
// ここで import しておきます。
import * as todo from '~/store/todos'

export const state = () => {
  return {}
}

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  // 
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // import したサブモジュールはここに記述します。
    todo,
  },
})
