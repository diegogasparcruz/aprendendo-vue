import stocks from '../../data/stocks'

export default{

  // STATE
  state: {
    stocks: []
  },

  // MUTATIONS
  mutations: {
    setStocks(state, stocks){
      state.stocks = stocks
    },
    randomizeStocks(state){
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
      })
    }
  },

  // ACTIONS
  actions: {
    buyStock({ commit }, order){
      commit('buyStock', order)
    },
    initStocks({ commit }){
      // eslint-disable-next-line 
      console.log('initStocks...')
      commit('setStocks', stocks)
    },
    randomizeStocks({ commit }){
      commit('randomizeStocks')
    }
  },

  // GETTERS
  getters: {
    stocks(state){
      return state.stocks
    }
  }

}