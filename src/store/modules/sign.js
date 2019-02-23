const state = () => ({
    token: '',
});

const mutations = {
    setToken(state, val) {
        state.token = val
    }
};

// const actions = {
//     setToken: ({commit}, position) => {
//         commit('setToken', position)
//     }
// };

export default {namespaced: true, state, mutations}