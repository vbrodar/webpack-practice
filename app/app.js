import isEmail from "validator/lib/isEmail";
import tripleMe from "./tripleMe";

console.log(isEmail("veki.zeki@hotmail.com"));
console.log(tripleMe(25));

if (module.hot) {
  module.hot.accept();
}
