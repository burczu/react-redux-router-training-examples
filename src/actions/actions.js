// dostępne w aplikacji typy trzemaj w stałych
const SET_DATA = 'SET_DATA';

// kreator akcji: funkcja zwracająca akcję
export function setData(data) {
  // akcja: obiekt posiadający typ
  return {
    type: SET_DATA,
    payload: {
      data // dane przekazuj w obiekcie 'payload'
    }
  }
}
