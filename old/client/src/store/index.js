import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aboutTransition: true,
        cancelTransition: true,
        choosePolicyTransition: true,
        contactTransition: true,
        howItWorkTransition: true,
        joiningTransition: true,
        underHeaderTransition: true,
    },
    getters: {
        get_aboutTransition(state) {
            return state.aboutTransition;
        },
        get_cancelTransition(state) {
            return state.cancelTransition;
        },
        get_contactTransition(state) {
            return state.contactTransition;
        },
        get_choosePolicyTransition(state) {
            return state.choosePolicyTransition;
        },
        get_howItWorkTransition(state) {
            return state.howItWorkTransition;
        },
        get_joiningTransition(state) {
            return state.joiningTransition;
        },
        get_underHeaderTransition(state) {
            return state.underHeaderTransition;
        },
    },
    mutations: {
        set_aboutTransition(state, payload) {
            state.aboutTransition = false;
            setTimeout(() => {
                state.aboutTransition = payload;
            }, 0)
        },
        set_cancelTransition(state, payload) {
            state.cancelTransition = false;
            setTimeout(() => {
                state.cancelTransition = payload;
            }, 200)
        },
        set_contactTransition(state, payload) {
            state.contactTransition = false;
            setTimeout(() => {
                state.contactTransition = payload;
            }, 200)
        },
        set_choosePolicyTransition(state, payload) {
            state.choosePolicyTransition = false;
            setTimeout(() => {
                state.choosePolicyTransition = payload;
            }, 200)
        },
        set_howItWorkTransition(state, payload) {
            state.howItWorkTransition = false;
            setTimeout(() => {
                state.howItWorkTransition = payload;
            }, 200)
        },
        set_joiningTransition(state, payload) {
            state.joiningTransition = false;
            setTimeout(() => {
                state.joiningTransition = payload;
            }, 200)
        },
        set_underHeaderTransition(state, payload) {
            state.underHeaderTransition = false;
            setTimeout(() => {
                state.underHeaderTransition = payload;
            }, 200)

        },
    },
    actions: {},
    modules: {}
})