// storeについての参考：https://qiita.com/y-miine/items/028c73aa3f87e983ed4c

export const state = () => ({
  state: 'room01',
  canvasArray: [
    {
      id: 0,
      buyLink: 'https://www.google.com/?hl=ja',
      detail: {
        title: 'Room',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 1,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'hope',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 2,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'self',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 3,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'some more',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 4,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'NEW HOPE',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 5,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'trivial',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 6,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'MMS',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 7,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'BOY',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 8,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'GIRL',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 9,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: '1/365',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 10,
      buyLink: 'https://www.yahoo.co.jp/',
      detail: {
        title: 'Home',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    }
  ],
  deviceType : null
});

export const mutations = {
  updateStateData(state, value) {
    state.state = value
  },
  updateDeviceType(state, value) {
    state.deviceType = value
  }
};

export const actions = {
  setStateData({commit, state}, value) {
    commit('updateStateData', value);
  },
  setDeviceType({commit, state}, value) {
    commit('updateDeviceType', value);
  }
};

