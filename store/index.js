// storeについての参考：https://qiita.com/y-miine/items/028c73aa3f87e983ed4c

export const state = () => ({
  state: 'room01',
  canvasArray: [
    {
      id: 0,
      buyLink: 'https://www.google.com/?hl=ja',
      detail: {
        title: 'Room01',
        size: '33.3cm × 33.3cm',
        edition: '1'
      }
    },
    {
      id: 1,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room02',
        size: '44.4cm × 44.4cm',
        edition: '2'
      }
    },
    {
      id: 2,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room03',
        size: '44.4cm × 44.4cm',
        edition: '3'
      }
    },
    {
      id: 3,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room04',
        size: '44.4cm × 44.4cm',
        edition: '4'
      }
    },
    {
      id: 4,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room05',
        size: '44.4cm × 44.4cm',
        edition: '5'
      }
    },
    {
      id: 5,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room06',
        size: '44.4cm × 44.4cm',
        edition: '6'
      }
    },
    {
      id: 6,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room07',
        size: '44.4cm × 44.4cm',
        edition: '7'
      }
    },
    {
      id: 7,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room08',
        size: '44.4cm × 44.4cm',
        edition: '8'
      }
    },
    {
      id: 8,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room09',
        size: '44.4cm × 44.4cm',
        edition: '9'
      }
    },
    {
      id: 9,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room10',
        size: '44.4cm × 44.4cm',
        edition: '10'
      }
    },
    {
      id: 10,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Room11',
        size: '44.4cm × 44.4cm',
        edition: '11'
      }
    }
  ]
});

export const mutations = {
  updateStateData(state, value) {
    state.state = value
  },
};

export const actions = {
  setStateData({commit, state}, value) {
    commit('updateStateData', value);
  }
};

