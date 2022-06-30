export const formReducer = (state, action) => {
   switch (action.type) {
      case 'SET_USER': return { ...state, user: action.user }
      case 'USER_VALIDATION': return { ...state, validName: action.nameIsValid }
      case 'USER_FOCUS': return { ...state, userFocus: action.userIsFocused }
      case 'SET_PWD': return { ...state, pwd: action.pwd }
      case 'PWD_VALIDATION': return { ...state, validPwd: action.pwdIsValid }
      case 'PWD_FOCUS': return { ...state, pwdFocus: action.pwdIsFocused }
      case 'SET_MATCH_PWD': return { ...state, matchPwd: action.matchPwd }
      case 'MATCH_PWD_VALIDATION': return { ...state, validMatch: action.matchIsValid }
      case 'MATCH_PWD_FOCUS': return { ...state, matchFocus: action.matchIsFocused }
      case 'IS_SUCCESS': return { ...state, success: action.isSuccess }
      default: return state
   }
}