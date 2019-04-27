import api from "@/services/api";

export default {
  fetchTopics() {
    return api.get(`messages/`).then(response => response.data);
  },
  postTopic(payload) {
    return api.post(`messages/`, payload).then(response => response.data);
  },
  deleteTopic(topicId) {
    return api.delete(`messages/${topicId}`).then(response => response.data);
  }
};
