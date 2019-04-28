import apiFunctions from "../../services/apiFunctions";

const state = {
  topics: [],
  loading: false
};

const getters = {};

const actions = {
  getTopics({ commit }) {
    apiFunctions.fetchTopics().then(topics => {
      commit("setTopics", topics);
    });
  },
  addTopics({ commit }, topic) {
    apiFunctions.postTopic(topic).then(() => {
      commit("addTopic", topic);
    });
  },
  deleteTopics({ commit }, topicId) {
    apiFunctions.deleteTopic(topicId);
    commit("deleteTopic", topicId);
  }
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setTopics(state, topics) {
    state.topics = topics;
  },
  addTopic(state, topic) {
    state.topics.push(topic);
  },
  deleteTopic(state, topicId) {
    state.topics = state.topics.filter(obj => obj.pk !== topicId);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
