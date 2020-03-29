---

path: '/react-academy-kitze'
date: "2020-03-02"
title: 'React Academy by Kitze'
tags: ['courses', 'workshop', 'reactJS']
excerpt: 'My notes from the React Academy (Advanced ReactJS course) by Kitze'
link: 'https://www.reactacademy.io/'

---

I'm not to 🔥 on conferences and workshops (they tend to be overhyped), but today I had the pleasure of attending React Academy - a hands-on advanced ReactJS workshop by Kitze (sounds like a perfume, but he's not! 😃).

The whole reason I was able to attend was the [Outreachy/Mozilla](https://www.outreachy.org/) scholarship I received last year. Quick shoutout: if you are new to tech, are from an underrepresented group and want to work with some of the most kickass companies that do open source, you should definitely check it out 💪! They organise paid internship two times a year!

Anyhoo, below are the notes from today's workshop:

1. **Custom hooks, baby**

Just like with reusable components, you should start building a library of reusable custom hooks, like `useBoolean`, `useInput` etc. There's also a nifty collection of [custom hooks](https://nikgraf.github.io/react-hooks/).

2. **Ideally, the custom hook should return an object**

Abstract the custom hooks (like a util function) and make it return an object - they are easy to destructure and good for avoiding repetition.
```
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};
```

3. **useEffect is super 💪**

`useEffect` is used whenever you have a side-effect (like with an event listener). Make sure you get your dependencies right and to remove the side-effect (the event listener, the `setInterval` etc) in the return!

`useEffect` is more than just a lifecycle hook, for example, the hook will update whenever `componentDidMount` **and** whenever any of the other dependencies you care about changes!

```
const useDocumentTitle = title => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
};
```

4. **Checkout mobx? 🤔**

Kitze swears by mobx, in particular [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree). Similar to Redux, but with observables - therefore more performant and with less fiddling around `mapstatetoprops` etc.


5. **Use `ReactContext`, sometimes**

For sharing global states (and to avoid passing props to child, to child, to child, to grand-child...). Works great with hooks (and `GraphQL`).
For managing lots of state, `Redux` is more performant (and apparantely mobx even better - see above).


6. **React Compound Component**

Smooshing several components together using `Context AP` to allow components to somehow manage state among themselves (like `Tabs` and `Tab` or `Select` and `Option`).


7. **React Controlled Components**

Is controlling your components from their parent, but having access to their inner states (kind of like what you are doing with `input` and their `value`).



8. **Use `React.lazy` and `Suspense` for loading the heavy stuff later**

This will make a separate request only once the component is rendered (make sure to provide a fallback a.k.a. skeleton!).
```
import { Suspense, lazy } from 'react';
<!-- import Timer from './Timer'  -->
const Timer = React.lazy(() => import('./Timer'));

  <Suspense fallback={<div>Loading...</div>}>
    <Timer />
  </Suspense>
```


9. **useRef to access the previous value**

```
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```


10. **And, most importantly**

Learn all the keyboard shortcuts, master touchtyping (and keeping an eye-contact **while** coding), learn everything `React` (+optional rant on a slightly more obscure tooling - see above), so that you can do live demos like Kitze 😎.