import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './CustomRegister.module.css'
import { USER_REGEX, PWD_REGEX } from './utils/regexPatterns'

const CustomRegister = () => {
   const userRef = useRef();

   const [user, setUser] = useState('');
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const [pwd, setPwd] = useState('');
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState('');
   const [validMatch, setValidMatch] = useState(false);
   const [matchFocus, setMatchFocus] = useState(false);

   const [success, setSuccess] = useState(false);

   useEffect(() => {
      userRef.current.focus();
   }, [])

   useEffect(() => {
      setValidName(USER_REGEX.test(user));
   }, [user])

   useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
   }, [pwd, matchPwd])

   const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if (!v1 || !v2) return;
      console.log(pwd)
      setSuccess(true);
   }

   return (
      <>
         {success ? (
            <section>
               <h1>Успешно!</h1>
               <p>
                  Регистрация {user} прошла успешно.
               </p>
            </section>
         ) : (
            <section className={classes.customSection}>
               <h1 className={classes.customTitle}>Регистрация</h1>
               <form onSubmit={handleSubmit} className={classes.customForm}>
                  <label className={classes.customLabel} htmlFor="username">
                     Ваше имя:
                     <FontAwesomeIcon icon={faCheck} className={validName ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={validName || !user ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="text"
                     id="username"
                     className={classes.customInput}
                     ref={userRef}
                     autoComplete="off"
                     onChange={(e) => setUser(e.target.value)}
                     value={user}
                     required
                     aria-invalid={validName ? "false" : "true"}
                     aria-describedby="uidnote"
                     onFocus={() => setUserFocus(true)}
                     onBlur={() => setUserFocus(false)}
                  />
                  <p id="uidnote" className={userFocus && user && !validName ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Имя должно начинаться с буквы.
                     В имени допускаются буквы, цифры, тире и нижнее подчеркивание.<br />
                     От 4х до 24х символов.
                  </p>


                  <label htmlFor="password" className={classes.customLabel}>
                     Пароль:
                     <FontAwesomeIcon icon={faCheck} className={validPwd ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="password"
                     id="password"
                     className={classes.customInput}
                     onChange={(e) => setPwd(e.target.value)}
                     value={pwd}
                     required
                     aria-invalid={validPwd ? "false" : "true"}
                     aria-describedby="pwdnote"
                     onFocus={() => setPwdFocus(true)}
                     onBlur={() => setPwdFocus(false)}
                  />
                  <p id="pwdnote" className={pwdFocus && !validPwd ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Пароль должен содержать покрайней мере одну строчную букву,
                     одну заглавную букву, одну цифру и один из символов: !@#$%.<br />
                     От 8ми до 24х символов.
                  </p>
                  <label htmlFor="confirm_pwd" className={classes.customLabel}>
                     Подтвердите пароль:
                     <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? classes.valid : classes.hide} />
                     <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? classes.hide : classes.invalid} />
                  </label>
                  <input
                     type="password"
                     id="confirm_pwd"
                     className={classes.customInput}
                     onChange={(e) => setMatchPwd(e.target.value)}
                     value={matchPwd}
                     required
                     aria-invalid={validMatch ? "false" : "true"}
                     aria-describedby="confirmnote"
                     onFocus={() => setMatchFocus(true)}
                     onBlur={() => setMatchFocus(false)}
                  />
                  <p id="confirmnote" className={matchFocus && !validMatch ? classes.instructions : classes.offscreen}>
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Пароли не совпадают!
                  </p>
                  <button className={classes.customButton} disabled={!validName || !validPwd || !validMatch ? true : false}>Зарегистрироваться</button>
               </form>
            </section>
         )}
      </>
   )
}

export default CustomRegister