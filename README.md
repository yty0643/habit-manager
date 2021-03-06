# Habit-manager [바로가기](https://yty0643.github.io/habit-manager/)

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/><img src="https://img.shields.io/badge/FontAwesome-528DD7?style=flat&logo=FontAwesome&logoColor=white"/>

---

# 느낀 점

디자인 패턴을 적용하여 개발 영역을 분리하니 유지보수는 쉬울지라도 초기 설계 비용이 크다고 느껴졌다.
VAC를 적용한 예제를 보니 현업에서 최소한의 단위, 버튼 하나하나까지 분리하여 컴포넌트화 하는 과정을 보았고,
참고하여 컴포넌트를 가능한 많이 분리하며 설계했다. 이러한 과정을 통해 React 컨셉에 대해 깊게 이해할 수 있었다.

Typescript를 통해 type을 관리하며 개발했는데, 코드 작성시 매번 type을 결정해야 하기 때문에 번거롭고 코드량이 증가한다는 단점이 있었지만,
코드 자동완성, 실행 전 피드백을 통해 발생 가능한 에러를 미연에 방지할 수 있다는 점이 개발에 도움이 되었다.
이러한 장점들은 대형 프로젝트를 개발할 때 큰 도움이 될 것으로 판단된다.

---

# 프로젝트 계획 이유

FE개발 역량 강화

어플리케이션의 원활한 유지보수와 디자이너, FE개발자 간의 원활한 협업(코드 충돌 방지)을 위해 여러 디자인 패턴 중 `VAC`를 참고하여 설계하고자 한다.
type관리를 위해 `typescript`를 활용하여 개발하고자 한다.

> 사용 툴
>
> - React
> - Typescript
> - Firebase
> - FontAwesome
> - VAC design-pattern
>
> 개발 문서 <https://github.com/yty0643/development-documents>

---

# 프로젝트 주제

웹을 통해 공부나 운동 등 자기개발과 관련된 일들을 기록하고 관리하자

---

# 구조

폴더 세개로 구분했다.

1. components (개발된 모든 컴포넌트들)
2. pagaes (라우터로 접근할 페이지 컴포넌트)
3. service (SDK또는 REST API 관련 비즈니스 로직이 작성된 TS폴더)

각각의 컴포넌트는 3개의 파일로 구성된다. (비즈니스 로직 작성 영역 컴포넌트, VAC컴포넌트, CSS Module)

예시로 `box_list` 는 다음과 같이 구성되어 있다.

1. box_list.tsx
2. VAC_box_list.tsx
3. box_list.module.css

box_list 컴포넌트의 모든 비즈니스 로직을 관리하는 파일로 VAC_box_list만을 랜더링한다.

VAC_box_list는 어떠한 비즈니스 로직도 없으며 stateless 컴포넌트로, 오직 랜더링만을 담당하고 있다.

box_list.module.css는 VAC에서만 사용하고 있다.

> VAC Pattern에 대해 자세히 알고 싶다면 [VAC-design-pattern](https://github.com/yty0643/development-documents/blob/main/VAC-pattern.md)

## box_list.tsx

```typescript
import React, { useCallback, useEffect, useState } from "react";
import { IHabit, IHabits } from "../../pages/main/main";
import VACBoxList from "./VAC_box_list";

export interface IBox {
  date: string;
  habitTime: { [key: number]: string[] };
  totalTime: number;
  color: string;
}

export interface IBoxes {
  [key: string]: IBox;
}

export interface IHandleBox {
  (id: number, today: string, boxes: IBox): void;
}

const BoxList = ({ isDark, habit }: { isDark: boolean; habit: IHabit }) => {
  const [boxes, setBoxes] = useState<IBoxes>({});

  const initBoxes: () => void = useCallback(() => {
    const temp: IBoxes = {};
    const day = new Date().getDay() + 1;
    for (let i = 363 + day; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const key = date.toISOString().split("T")[0];
      temp[key] = {
        date: key,
        habitTime: (habit.boxesJSON && habit.boxesJSON[key]?.habitTime) || {},
        totalTime: (habit.boxesJSON && habit.boxesJSON[key]?.totalTime) || 0,
        color:
          (habit.boxesJSON && habit.boxesJSON[key]?.color) ||
          "rgba(100, 100, 100, 0.3)", //추후 색상 수정(base color)
      };
    }
    setBoxes(temp);
  }, [habit.boxesJSON]);

  useEffect(() => {
    initBoxes();
  }, [habit.boxesJSON]);

  return <VACBoxList isDark={isDark} boxes={boxes} />;
};

export default React.memo(BoxList);
```

## VAC_box_list.tsx

```typescript
import React from "react";
import { IBoxes } from "./box_list";
import BoxItem from "../box_item/box_item";
import styles from "./box_list.module.css";

const VACBoxList = ({ isDark, boxes }: { isDark: boolean; boxes: IBoxes }) => {
  return (
    <div className={`${styles.section} ${isDark && styles.dark}`}>
      <ul className={`${styles.boxList} ${isDark && styles.dark}`}>
        {Object.keys(boxes).map((key) => (
          <BoxItem key={key} isDark={isDark} box={boxes[key]} />
        ))}
      </ul>
      <div className={styles.boxes}>
        <p className={styles.discription}>less</p>
        <div className={`${styles.box} ${styles.fir}`}></div>
        <div className={`${styles.box} ${styles.sec}`}></div>
        <div className={`${styles.box} ${styles.thi}`}></div>
        <div className={`${styles.box} ${styles.fou}`}></div>
        <div className={`${styles.box} ${styles.fiv}`}></div>
        <p className={styles.discription}>more</p>
      </div>
    </div>
  );
};

export default React.memo(VACBoxList);
```

---

# 화면 구성

## Login

<img src="https://user-images.githubusercontent.com/80657819/168954406-e098f5c0-3237-469e-ab49-8f280d992af7.png" width="450px"/>
<img src="https://user-images.githubusercontent.com/80657819/168954438-ba8b626c-69dc-4818-99c8-a4f5be31503a.png" width="200px"/>

## Join

<img src="https://user-images.githubusercontent.com/80657819/168955436-ceee29a4-2546-4b13-91d8-8fdea9eda235.png" width="450px"/>
<img src="https://user-images.githubusercontent.com/80657819/168955463-27b1033a-07ea-4ce4-841a-f9ff44d731b4.png" width="200px"/>

## Main

<img src="https://user-images.githubusercontent.com/80657819/168955822-e2bf005c-8610-4270-8ba1-68d23c63083e.png" width="450px"/>
<img src="https://user-images.githubusercontent.com/80657819/168958964-b8c7c66a-bfb2-42f4-af70-520f237e2197.png" width="450px"/>
<img src="https://user-images.githubusercontent.com/80657819/168955820-22bb2d1b-70ab-4c84-8261-3eaab4a039ff.png" width="200px"/>

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

> 필자는 `IProps`를 상위 컴포넌트에서 선언하고 하위 컴포넌트에서 참조하여 사용했다.

## 컴포넌트 세분화

파일명, 폴더구조를 전체적으로 변경했고 자세한 내용은 `구조`목차에서 다루고 있다.

~~프로젝트 개발중에 딱히 기록할만한게 없어서 작성을 미루다 login관련 컴포넌트가 너무 복잡하게 작성되었다고 판단되어서~~
~~컴포넌트를 세분화 하고 이 과정을 기록하고자 한다.~~

~~아직 개발단계라 VAC 이지만 useState를 사용했다. (추후 state를 따로 분리할 예정이었음)~~

개선 전

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

개선 후

```javascript
import React, { useState } from "react";
import Auth from "../../service/auth";
import SignInBtn from "../../VC/sign_in_btn/sign_in_btn";
import SignInForm from "../../VC/sign_in_form/sign_in_form";
import styles from "./login.module.css";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Info from "../../VC/info/info";
import MiniBox from "../../VAC/mini_box/mini_box";
import LinkBtn from "../../VAC/link_btn/link_btn";
import Separator from "../../VAC/separator/separator";

const Login = ({ auth }: { auth: Auth }) => {
  const [isFocus, setIsFocus] = useState < number > 0;
  return (
    <div className={styles.login}>
      <div
        className={styles.l}
        onMouseEnter={() => {
          setIsFocus(1);
        }}
        onMouseLeave={() => {
          setIsFocus(0);
        }}
      >
        <SignInForm auth={auth} active={isFocus == 1 ? true : false} />
        <Separator active={isFocus == 1 ? true : false} />
        <SignInBtn
          auth={auth}
          item={{
            provider: "Github",
            bgColor: "rgb(50, 50, 50)",
            icon: faGithub,
          }}
          active={isFocus == 1 ? true : false}
        />
        <SignInBtn
          auth={auth}
          item={{
            provider: "Google",
            bgColor: "rgb(89, 120, 255)",
            icon: faGoogle,
          }}
          active={isFocus == 1 ? true : false}
        />
      </div>
      <div className={styles.vertical}></div>
      <div
        className={styles.r}
        onMouseEnter={() => {
          setIsFocus(2);
        }}
        onMouseLeave={() => {
          setIsFocus(0);
        }}
      >
        <Info active={isFocus == 2 ? true : false} />
        <MiniBox active={isFocus == 2 ? true : false} />
        <LinkBtn
          active={isFocus == 2 ? true : false}
          item={{ href: "https://github.com/yty0643", icon: faGithub }}
        />
      </div>
    </div>
  );
};

export default Login;
```

> ~~개선 전 `VACLogin` 하나의 컴포넌트를 VAC 디자인 패턴을 적용하여 재사용 가능한 여러 컴포넌트로 분리하여 개발했다.~~
>
> ~~개선 후 `Login` Page component가 간단하고 직관적으로 설계된것을 확인할 수 있다.~~
>
> ~~VC와 VAC는 각각 아래와 같이 설계되었다.~~
>
> ~~VC: `SignInForm`, `SignInBtn`, `Info`, `LinkBtn`~~
>
> ~~VAC: `VACSignInForm`, `VACSignInBtn`, `VACInfo`, `MiniBox`, `LinkBtn`, `Separator`, `Logo`~~
