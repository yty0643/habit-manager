# Habit-manager

---

# 문제 해결 과정

처음 다루는 툴이 많다 보니 프로젝트 개발 중에 여러 문제가 발생하고 있다. 그 중 중요하다고 생각되는 문제는 해결 과정을 기록하고자 한다.

## [typescript] 타입이 너무 많아서 가독성에 방해가 된다.

하위 컴포넌트에서 [props] 로 많은 것을 넘겨받다 보니, 작성할 타입이 너무 많아지는 문제가 발생했다.
개발 초기에 신경쓰일 정도이면 나중에는 더욱 심각해질 문제라고 판단되어 해결책을 찾으려고 한다.

```javascript
const HabitList = ({ habits, addHabit, delHabit } : {
  habits: IHabits,
  addHabit: IADHabit,
  delHabit: IADHabit,
}) => { ... };
```

> 3개의 [props] 에 2개의 [interface]를 적용하고 있는 모습이다.

### 해결방안

결국 [props] 의 [interface] 를 정의해서 사용하기로 했다.
사용한 [interface] 가 1개 늘어났고, 시원한 해결책은 아니라서 아쉽지만 찾아본 결과 최선이라 생각된다...
추후 더 좋은 방법을 찾게되면 수정하겠다.

```javascript
export interface IProps {
  habits: IHabits;
  addHabit: IADHabit;
  delHabit: IADHabit;
}

const HabitList = ({ habits, addHabit, delHabit } : IProps) => { ... };
```

> 필자는 [IProps] 를 상위 컴포넌트에서 선언하고 하위 컴포넌트에서 참조하여 사용했다.
