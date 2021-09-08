declare namespace Store {

  type Helper<S, R> = (this: import('vuex').Store<R>, injectee: import('vuex').ActionContext<S, R>, payload?: any) => any;

  interface RootState {
  }

}
