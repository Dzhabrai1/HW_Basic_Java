// #1
const list = [12, 4, 32, 5, 43];
let sum = 0;

for (let i = 0; i < list.length; i++) {
    sum += list[i];
}

console.log(sum);

// #2

const list1 = [12, 4, -55, 32, -12, -3, 5, 43];
let sumOfPositives = 0;

for (let i = 0; i < list1.length; i++) {
    if (list1[i] > 0) {
        sumOfPositives += list1[i];
    }
}

console.log(sumOfPositives);

// #3

const paragraphs = document.getElementsByTagName('p');
const texts = [];

for (let i = 0; i < paragraphs.length; i++) {
    const paragraphText = paragraphs[i].textContent;
    texts.push(paragraphText);
}

console.log(texts);
