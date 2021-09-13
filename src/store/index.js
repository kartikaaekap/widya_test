// import Vue from 'vue'
// import Vuex from 'vuex'
// import { content } from './content.store'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     content,
//   } 
// })

// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  stressLevel: [],
  employeeData: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  getDataStressLevel({ commit }) {
    axios.get('https://private-anon-61a883d8d8-widyaimersif.apiary-mock.com/dashboard', {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
    })
        .then(response => {
            commit('SET_DATA_STRESS_LEVEL', response.data)
    })
  },

  getDataEmployee({ commit }) {
    axios.get('http://dummy.restapiexample.com/api/v1/employee/', {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://www.restapiexample.com",
      },
    })
        .then(response => {
            commit('SET_DATA_EMPLOYEE', response.data)
    })
  }
}

//to handle mutations
const mutations = {
  SET_DATA_STRESS_LEVEL(state, stressLevel) {
    state.stressLevel = stressLevel
  },
  SET_DATA_EMPLOYEE(state, employeeData) {
    state.employeeData = employeeData
  }
}

//export store module
export default new Vuex.Store ({
    state,
    getters,
    actions,
    mutations
})