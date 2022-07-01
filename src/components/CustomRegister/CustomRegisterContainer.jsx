import { useEffect, useReducer } from "react";
import { USER_REGEX, PWD_REGEX } from '../../utils/regexPatterns'
import CustomRegister from "./CustomRegister";
import { formReducer } from "./formReducer";

const CustomRegisterContainer = () => {

   const [state, dispatch] = useReducer(formReducer,
      {
         user: '',
         validName: false,
         userFocus: false,
         pwd: '',
         validPwd: false,
         pwdFocus: false,
         matchPwd: '',
         validMatch: false,
         matchFocus: false,
         success: false
      }
   )

   useEffect(() => {
      dispatch({ type: 'USER_FOCUS', userIsFocused: true })
   }, [])

   useEffect(() => {
      dispatch({ type: 'USER_VALIDATION', nameIsValid: USER_REGEX.test(state.user) })
   }, [state.user])

   useEffect(() => {
      dispatch({ type: 'PWD_VALIDATION', pwdIsValid: PWD_REGEX.test(state.pwd) })
      dispatch({ type: 'MATCH_PWD_VALIDATION', matchIsValid: state.pwd === state.matchPwd })
   }, [state.pwd, state.matchPwd])

   const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(state.user);
      const v2 = PWD_REGEX.test(state.pwd);
      if (!v1 || !v2) return;
      dispatch({ type: 'IS_SUCCESS', isSuccess: true })
   }

   return (
      <CustomRegister state={state} dispatch={dispatch} handleSubmit={handleSubmit} />
   )
}

export default CustomRegisterContainer