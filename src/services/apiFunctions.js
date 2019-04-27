import api from "@/services/api";

export default {
  fetchTopics() {
    return api.get(`topics/`).then(response => response.data);
  },
  postTopic(payload) {
    return api.post(`topics/`, payload).then(response => response.data);
  },
  deleteTopic(topicId) {
    return api.delete(`topics/${topicId}`).then(response => response.data);
  }
};
