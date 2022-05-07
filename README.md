# Habit-manager

---

# 프로젝트 개획 이유

FE개발 역량 강화

어플리케이션의 원활한 유지보수와 디자이너, FE개발자 간의 원활한 협업(코드 충돌 방지)을 위해 여러 디자인 패턴 중 `VAC`를 참고하여 설계하고자 한다.
type관리를 위해 `typescript`를 활용하여 개발하고자 한다.

> 개발 문서 <https://github.com/yty0643/development-documents>

---

# 문제 해결 과정

처음 다루는 툴이 많다 보니 프로젝트 개발 중에 여러 문제가 발생하고 있다. 그 중 중요하다고 생각되는 문제는 해결 과정을 기록하고자 한다.

## `typescript` 타입이 너무 많아서 가독성에 방해가 된다.

하위 컴포넌트에서 `props`로 많은 것을 넘겨받다 보니, 작성할 타입이 너무 많아지는 문제가 발생했다.
개발 초기에 신경쓰일 정도이면 나중에는 더욱 심각해질 문제라고 판단되어 해결책을 찾으려고 한다.

```javascript
const HabitList = ({ habits, addHabit, delHabit } : {
  habits: IHabits,
  addHabit: IADHabit,
  delHabit: IADHabit,
}) => { ... };
```

> 3개의 `props`에 2개의 `interface`를 적용하고 있는 모습이다.

### 해결방안

결국 `props`의 `interface`를 정의해서 사용하기로 했다.
사용한 `interface`가 1개 늘어났고, 시원한 해결책은 아니라서 아쉽지만 찾아본 결과 최선이라 생각된다...
추후 더 좋은 방법을 찾게되면 수정하겠다.

```javascript
export interface IProps {
  habits: IHabits;
  addHabit: IADHabit;
  delHabit: IADHabit;
}

const HabitList = ({ habits, addHabit, delHabit } : IProps) => { ... };
```

## 컴포넌트 세분화

프로젝트 개발중에 딱히 기록할만한게 없어서 작성을 미루다
login관련 컴포넌트가 너무 복잡하게 작성되었다고 판단되어서 컴포넌트를 세분화 하고 이 과정을 기록하고자 한다.

우선 개선 전 컴포넌트 코드이다.

```javascript
import React, { useState } from "react";
import { ISignIn, ISignUp } from "../../VC/sign_in/sign_in";
import styles from "./VAC_login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const VACLogin = ({ signIn, signUp }: { signIn: ISignIn, signUp: ISignUp }) => {
  const [active, setActive] = useState < Boolean > false;
  const [active2, setActive2] = useState < boolean > false;

  return (
    <div className={styles.login}>
      <div className={styles.box}>
        <div
          className={styles.l}
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
        >
          <p className={styles.LTitle}>Sign In</p>
          <form className={styles.form} action="">
            <input className={styles.input} type="text" placeholder="email" />
            <input
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button className={`${styles.btn} ${styles.signIn}`}>
              <div className={`${styles.btnTitle} ${active && styles.active}`}>
                Sign in
              </div>
              <div
                className={`${styles.btnIcon} ${active && styles.active} ${
                  styles.signInIcon
                }`}
              >
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </div>
            </button>
          </form>
          <button className={styles.signUp} onClick={signUp}>
            {active ? "Sign up and get started!" : "Don't have an account?"}
          </button>
          <div className={styles.horizontal}>
            <p className={styles.description}>with</p>
          </div>
          <button
            className={`${styles.btn} ${styles.github}`}
            onClick={() => {
              signIn("GitHub");
            }}
          >
            <div className={`${styles.btnTitle} ${active && styles.active}`}>
              GitHub
            </div>
            <div
              className={`${styles.btnIcon} ${active && styles.active} ${
                styles.githubIcon
              }`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </button>
          <button
            className={`${styles.btn} ${styles.google}`}
            onClick={() => {
              signIn("Google");
            }}
          >
            <div className={`${styles.btnTitle} ${active && styles.active}`}>
              Google
            </div>
            <div
              className={`${styles.btnIcon} ${active && styles.active} ${
                styles.googleIcon
              }`}
            >
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </button>
        </div>
        <div className={styles.vertical}></div>
        <div
          className={styles.r}
          onMouseEnter={() => {
            setActive2(true);
          }}
          onMouseLeave={() => {
            setActive2(false);
          }}
        >
          <p className={styles.RTitle}>Habit manager</p>
          <a href="https://github.com/yty0643" target="_blank">
            <p className={styles.visit}>Visit GitHub</p>
          </a>
          <p className={`${styles.contact} ${active2 && styles.active}`}>
            {active2 ? `yty0643@naver.com` : `Contact me`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VACLogin;
```

> 필자는 `IProps`를 상위 컴포넌트에서 선언하고 하위 컴포넌트에서 참조하여 사용했다.
