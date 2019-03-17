import { render } from "inferno";
import { Provider } from "inferno-mobx";
import { observable } from "mobx";
import MyComponent from "./MyComponent";

const account = observable({
    users: new Array(100000).fill({
        name: "Jack",
    }),
});
console.log("initial render");

render(
    <Provider account={account}>
        <MyComponent />
    </Provider>,
    document.getElementById("app")
);

setTimeout(() => {
    console.log("add one");
    account.users.push({
        name: "Me",
    });
}, 10000);

setTimeout(() => {
    console.log("update one");
    account.users[1].name = "Joe";
}, 15000);

setTimeout(() => {
    console.log("unmount all");
    account.users.clear();
}, 20000);
