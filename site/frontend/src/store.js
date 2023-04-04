import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        corps: 'Accueil1'
    },
    mutations: {
        setCorps(state, nouvelleValeur) {
            state.corps = nouvelleValeur
        }
    },
    actions: {
        setCorps(context, nouvelleValeur) {
            context.commit('setCorps', nouvelleValeur)
        }
    },
    getters: {
        corps: state => state.corps
    }
})
