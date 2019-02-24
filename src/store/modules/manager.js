const state = () => ({
    articles: {
        allArticle: [],
        total: '',
    },
});

const mutations = {
    setAllArticles(state, val) {
        state.articles.allArticle = val;
    },
    setTotal(state, val) {
        state.articles.total = val;
    },
    subArticle(state, val) {
        state.articles.allArticle = state.articles.allArticle.filter(t => t.id != val)
        state.articles.total--;
    }
};

// const actions = {
//     setToken: ({commit}, position) => {
//         commit('setToken', position)
//     }
// };

export default {namespaced: true, state, mutations}