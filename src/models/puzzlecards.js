import request from '../util/request';

const delay = (millisecond) => {
  return new Promise((resolve,reject) => {
    setTimeout(resolve, millisecond);
  });
};


export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
  },
  effects:{
    *queryInitCards(_,sagaEffects){
      var {call,put}=sagaEffects;
      const endPointURI = '/test/cardList';
      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers:{
    addNewCard(state,{payload:newcard}){
      const nextcounter=state.counter+1;
      const newcardWithoutId={...newcard,id:nextcounter};
      const nextdata=[newcardWithoutId,...state.data];
      return {
        data:nextdata,
        counter:nextcounter
      }
    }
  }
};