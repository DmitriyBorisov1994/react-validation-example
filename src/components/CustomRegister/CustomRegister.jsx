import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './CustomRegister.module.css'

const CustomRegister = ({ state, dispatch, handleSubmit }) => {

   return (
      <>
         {state.success ? (
            <section>
               <h1>Успешно!</h1>
               <p>
                  Регистрация {state.user} прошла успешно.
               </p>
            </section>
         ) : (
            <section className={classes.customSection}>
               <h1 className={classes.customTitle}>Регистрация</h1>
               <form onSubmit={handleSubmit} className={classes.customForm}>
                  <label className={classes.customLabel} htmlFor="username">
                     Ваше имя:
                     <FontAwesomeIcon icon={faCheck} className={state.validName ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={state.validName || !state.user ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="text"
                     id="username"
                     className={classes.customInput}
                     autoComplete="off"
                     onChange={(e) => dispatch({ type: 'SET_USER', user: e.target.value })}
                     value={state.user}
                     required
                     aria-invalid={state.validName ? "false" : "true"}
                     aria-describedby="uidnote"
                     onFocus={() => dispatch({ type: 'USER_FOCUS', userIsFocused: true })}
                     onBlur={() => dispatch({ type: 'USER_FOCUS', userIsFocused: false })}
                  />
                  <p id="uidnote" className={state.userFocus && state.user && !state.validName ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Имя должно начинаться с буквы.
                     В имени допускаются буквы, цифры, тире и нижнее подчеркивание.<br />
                     От 4х до 24х символов.
                  </p>


                  <label htmlFor="password" className={classes.customLabel}>
                     Пароль:
                     <FontAwesomeIcon icon={faCheck} className={state.validPwd ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={state.validPwd || !state.pwd ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="password"
                     id="password"
                     className={classes.customInput}
                     onChange={(e) => dispatch({ type: 'SET_PWD', pwd: e.target.value })}
                     value={state.pwd}
                     required
                     aria-invalid={state.validPwd ? "false" : "true"}
                     aria-describedby="pwdnote"
                     onFocus={() => dispatch({ type: 'PWD_FOCUS', pwdIsFocused: true })}
                     onBlur={() => dispatch({ type: 'PWD_FOCUS', pwdIsFocused: false })}
                  />
                  <p id="pwdnote" className={state.pwdFocus && !state.validPwd ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Пароль должен содержать покрайней мере одну строчную букву,
                     одну заглавную букву, одну цифру и один из символов: !@#$%.<br />
                     От 8ми до 24х символов.
                  </p>
                  <label htmlFor="confirm_pwd" className={classes.customLabel}>
                     Подтвердите пароль:
                     <FontAwesomeIcon icon={faCheck} className={state.validMatch && state.matchPwd ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={state.validMatch || !state.matchPwd ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="password"
                     id="confirm_pwd"
                     className={classes.customInput}
                     onChange={(e) => dispatch({ type: 'SET_MATCH_PWD', matchPwd: e.target.value })}
                     value={state.matchPwd}
                     required
                     aria-invalid={state.validMatch ? "false" : "true"}
                     aria-describedby="confirmnote"
                     onFocus={() => dispatch({ type: 'MATCH_PWD_FOCUS', matchIsFocused: true })}
                     onBlur={() => dispatch({ type: 'MATCH_PWD_FOCUS', matchIsFocused: false })}
                  />
                  <p id="confirmnote" className={state.matchFocus && !state.validMatch ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Пароли не совпадают!
                  </p>
                  <button className={classes.customButton} disabled={!state.validName || !state.validPwd || !state.validMatch ? true : false}>Зарегистрироваться</button>
               </form>
            </section>
         )}
      </>
   )
}

export default CustomRegister