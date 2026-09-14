# 🧱 Dev-Stack-assignment

Dev-Stack-assignment is web Application where a user can explore the technogies and build their tach stack can choose tech stack separe as they want and they can see their market demand and they can remove each element individually as they want !

## 🚀 Technologies I Used Here is

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Important some features Features i implemented here is

### 1. Explore Technologies

Here a user can explore various technologies with their nadge, rattings, name, demand, defficulty, and according their criterias !

### 2. Build Your Stack

A user can technolgies with their desired stack card and they can add according to their wish but here is the interesting thing is that they can't choose a card or techlogies twice they can only add once not twice and also after added they can see that the add to card button will disabled after a click instantly. when they will click the button they will see a react toastify popups instaly after they clicked !

### 3. Manage Your Stack

In this right stack card he can delete a card when he needed , he can delete these card technolies indivisually or separely and also they can click to the remove all button to clear all technogies card that he selected and instantly for both delete operation he can see a react toastify pop ups this interesing i think that use can can perform with !

## 📚 React Questions & Answers according me that what i understood after watching the react modules

### 1. What is JSX, and why is it used in React?

JSX is a synstax that lets us to write html like code inside react and javaScript that help react to read and describes us that how UI should look withou JSX it would more complicated to read and describes !

### 2. What is the difference between props and state?

Props are mainly a data which is used to pass from a parent component to a child component and later from data component we can use it and can modify the data or function as we want.

and state is a data managing component of react which used inside a component to set or change our data repeatedly so react can update the changed data into the UI and through which user can see the update UI as he want !

### 3. What does the useState hook do, and where did you use it in this project?

The useState is hook that main set the data into that state and it keeps and modify the state data and state conditioned data when needed and a user can store his desired data though using this hook to the state and change and modify later using this usestate hook. today in my assignment i used this usestate inside my cardgrid component to store the selected user stack card data into state of stack card section and then i manged this data like deleting removing changing through this useState component !

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

Generally, react calculate and read the data to render but the useEffect used to collect data from the react data it is not related to the UI component of react react that's why it is called side effects which used to load data means bring data like json, set times related data and etc.

Generally, it is used to fetch data from outside of the react UI components and to loads this into react UI when needed !

### 5. Why does every item in a .map() list need a unique key prop?

Generally, a unique key props needed to help react understand that which data have been deleted, added etc and also to identify each element of that list . So it is crucial !

### 6. What is conditional rendering? Show one place you used it

Usually, Conditional rendering means to show different UI rendering based the specific condition !

Today i used it to the right stack card of selected cards to show empty when no tech data are available then show all tech card which is selected by a user :

```tsx
    {stack.length === 0 ? (<div className="border border-dashed p-5 text-center mt-5 rounded-lg">
        <p className="text-[#94A3B8] text-sm">
            Your stack is empty.
        </p>
    </div>) : (<StackCardContent stack={stack} handleRemove={handleRemove} />)}
```
