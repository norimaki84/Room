// storeについての参考：https://qiita.com/y-miine/items/028c73aa3f87e983ed4c

export const state = () => ({
  state: 'opening',
  canvasArray: [
    {
      id: 0,
      arLink: 'room01',
      buyLink: 'https://www.google.com/?hl=ja',
      detail: {
        title: 'Room01',
        size: '33.3cm × 33.3cm',
        edition: '1'
      }
    },
    {
      id: 1,
      arLink: 'room02',
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room02',
        size: '44.4cm × 44.4cm',
        edition: '2'
      }
    }
  ]
});

export const mutations = {
  updateStateData(state, value) {
    state.page = value
  },
};

export const actions = {
  setStateData({commit, state}, value) {
    commit('updateStateData', value);
  }
};

