const state = () => ({
    articles: {
        allArticle: [],
        total: '',
    },
    binArticles:{
        articlesList:[],
        total:'',
    },
    draftsArticles:{
        articlesList:[],
        total:'',
    }
});

const mutations = {
    setAllArticles(state, val) {
        state.articles.allArticle = val;
    },
    setTotal(state, val) {
        state.articles.total = val;
    },
    subArticle(state, val) {
        state.articles.allArticle = state.articles.allArticle.filter(t => t.id != val);
        state.articles.total--;
    },
    setAllBins(state, val) {
        state.binArticles.articlesList = val;
    },
    setBinTotal(state, val) {
        state.binArticles.total = val;
    },
    subBin(state, val) {
        state.binArticles.articlesList = state.binArticles.articlesList.filter(t => t.id != val);
        state.binArticles.total--;
    },
    setAllDrafts(state, val) {
        state.draftsArticles.articlesList=val;
    },
    setDraftTotal(state, val) {
        state.draftsArticles.total = val;
    },
    subDraft(state, val) {
        state.draftsArticles.articlesList = state.draftsArticles.articlesList.filter(t => t.id != val);
        state.draftsArticles.total--;
    },

};

// const actions = {
//     setToken: ({commit}, position) => {
//         commit('setToken', position)
//     }
// };

export default {namespaced: true, state, mutations}