import cameras from "./camera";
import androids from "./android";
import laptops from "./laptop";

const fakeData = [...androids, ...cameras, ...laptops];

// const shuffle = (a) => {
//   for (let i = a.length; i; i--) {
//     let j = Math.floor(Math.random() * i);
//     [a[a - 1], a[j]] = [a[j], a[i - 1]];
//   }
// };

// shuffle(fakeData);

export default fakeData;
