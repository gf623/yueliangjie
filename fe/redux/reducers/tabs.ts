
interface Action {
  tab: 'GO' | 'English' | 'Math' | 'Life';
  type: string
}
const tabs = (state = '', action: Action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return action.tab
    default:
      return state
  }
}

export default tabs
