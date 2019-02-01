import { fork } from 'redux-saga/effects';
import { loginFlow, userAuth } from './adminSaga';
import { addArticleFlow, getArticleListFlow } from './adminArticleSaga';
import { getArticleFlow } from './articleSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(userAuth);
  yield fork(addArticleFlow);
  yield fork(getArticleListFlow);
  yield fork(getArticleFlow);
}
