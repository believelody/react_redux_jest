export const SUCCESS = 'SUCCESS'

export default (state, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
