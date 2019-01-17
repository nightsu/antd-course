import request from '../util/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state     : {
    cardsList: [ ]
  },
  effects: {
    * queryList(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const data1={
        name : 'umi',
        desc : '极快的类 Next.js 的 React 应用框架',
        url  : 'https://umijs.org'
      };
      yield call(delay, 1000);
      yield put({ type: 'initList', payload: data1 });
      const data2={
        name : 'antd',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      };
      yield call(delay, 1000);
      yield put({ type: 'initList', payload: data2 });

      const data3={
        name : 'antd-pro',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      }
      yield call(delay, 1000);
      yield put({ type: 'initList', payload: data3 });
    }
    
  },
  reducers: {
    initList(state, {payload:newdata}) {
      const cardsList = [newdata,...state.cardsList];
      return {
        cardsList
      };
    }
  }
};
