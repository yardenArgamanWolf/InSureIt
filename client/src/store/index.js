import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
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
        capacity: null,
        structure: null,
        c_and_s: null,
        results: null,
        isLoggedIn: false,
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
        get_capacity(state) {
            return state.capacity
        },
        get_structure(state) {
            return state.structure
        },
        get_c_and_s(state) {
            return state.c_and_s
        },
        get_results(state) {
            return state.results
        },
        get_isLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    mutations: {
        set_results(state, payload) {
            state.results = payload;
        },
        set_isLoggedIn(state, payload) {
            state.isLoggedIn = payload;
            console.log('state.login:', state.isLoggedIn)
        },
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
    actions: {
        getCapacity: async (contex) => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/capacity',
            }).then(result => {
                contex.state.capacity = result.data.data;
            })
        },
        getStructure: (contex) => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/structure',
            }).then(result => {
                contex.state.structure = result.data.data;
            })
        },
        getCapacityAndStructure: (contex) => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/structure_and_capacity',
            }).then(result => {
                contex.state.c_and_s = result.data.data;

            }).catch(err => {
                console.log(err);
            })

        },

    },
    modules: {}
})