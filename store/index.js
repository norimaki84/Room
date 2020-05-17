// storeについての参考：https://qiita.com/y-miine/items/028c73aa3f87e983ed4c

export const state = () => ({
  state: 'room01',
  canvasArray: [
    {
      id: 0,
      buyLink: 'https://rooostore.thebase.in/items/29194401',
      detail: {
        title: 'Room',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 1,
      buyLink: 'https://rooostore.thebase.in/items/29226638',
      detail: {
        title: 'hope',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 2,
      buyLink: 'https://rooostore.thebase.in/items/29228843',
      detail: {
        title: 'self',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 3,
      buyLink: 'https://rooostore.thebase.in/items/29229098',
      detail: {
        title: 'some more',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 4,
      buyLink: 'https://rooostore.thebase.in/items/29228864',
      detail: {
        title: 'NEW HOPE',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 5,
      buyLink: 'https://rooostore.thebase.in/items/29228970',
      detail: {
        title: 'trivial',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 6,
      buyLink: 'https://rooostore.thebase.in/items/29229179',
      detail: {
        title: 'MMS',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 7,
      buyLink: 'https://rooostore.thebase.in/items/29229570',
      detail: {
        title: 'face - B',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 8,
      buyLink: 'https://rooostore.thebase.in/items/29229730',
      detail: {
        title: 'face - G',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 9,
      buyLink: 'https://rooostore.thebase.in/items/29229882',
      detail: {
        title: '1 / 365',
        size: '33.3cm × 33.3cm',
        edition: '15'
      }
    },
    {
      id: 10,
      buyLink: 'https://rooostore.thebase.in/items/29229950',
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

