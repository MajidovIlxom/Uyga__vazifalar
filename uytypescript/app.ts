// 1-masala---------------------------------------

// class Rectangle {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }

//     area(): number {
//         return this.width * this.height;
//     }
// }

// const myRectangle = new Rectangle(2, 3);

// const yuzasi: number = myRectangle.area();
// console.log("Rectanglening yuzasi:", yuzasi);


// 2-masala--------------------------------


// class Person {
//     private name: string;
//     private age: number;
//     private gender: string;

//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     about(): string {
//         return `Ism: ${this.name}, Yosh: ${this.age}, Jins: ${this.gender}`;
//     }
// }
// const person = new Person("Salom", 25, "erkak");

// const malumot = person.about();
// console.log(malumot);


// 3-masala--------------------------


// class Person {
//     private name: string;
//     private age: number;
//     private gender: string;

//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     about(): string {
//         return `Ism: ${this.name}, Yosh: ${this.age}, Jins: ${this.gender}`;
//     }
// }

// class Student extends Person {
//     private grade: string;

//     constructor(name: string, age: number, gender: string, grade: string) {
//         super(name, age, gender);
//         this.grade = grade;
//     }

//     about(): string {
//         return `${super.about()}, Bahosi: ${this.grade}`;
//     }
// }

// // Student klassidan instans yaratamiz
// const student = new Student("Salom", 25, "erkak", "A");

// // about() metodini ishlatamiz
// const malumot = student.about();
// console.log(malumot);



// 4-masala-----------------------------------------


// class Book {
//     private author: string;
//     private title: string;
//     private publicYear: number;

//     constructor(author: string, title: string, publicYear: number) {
//         this.author = author;
//         this.title = title;
//         this.publicYear = publicYear;
//     }

//     year(): string {
//         const currentYear = new Date().getFullYear();
//         const yearsAgo = currentYear - this.publicYear;

//         if (yearsAgo === 0) {
//             return `${this.title} kitobi ${this.author} tomonidan hozirda yozilmoqda.`;
//         } else {
//             return `${this.title} kitobi ${this.author} tomonidan ${yearsAgo} yil avval yozilgan.`;
//         }
//     }
// }

// // Book klassidan instans yaratamiz
// const book = new Book("John Doe", "Misol Kitobi", 2020);

// // year() metodini ishlatamiz
// const kitobHaqida = book.year();
// console.log(kitobHaqida);



// 5-masala------------------------------------------


// function countUpperCaseLowerCase(str: string): { uppercase: number; lowercase: number } {
//     let uppercaseCount = 0;
//     let lowercaseCount = 0;

//     for (const char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             uppercaseCount++;
//         } else if (char >= 'a' && char <= 'z') {
//             lowercaseCount++;
//         }
//     }

//     return { uppercase: uppercaseCount, lowercase: lowercaseCount };
// }

// // Funktsiyani ishlatamiz
// const text = "Hello World Ilxom Yozgan";
// const harfSoni = countUpperCaseLowerCase(text);
// console.log("Katta harflar soni:", harfSoni.uppercase);
// console.log("Kichik harflar soni:", harfSoni.lowercase);



// 6-masala----------------------------------------------------------------


// function findSquares(a: number, b: number): number[] {
//     const squares: number[] = [];
//     for (let i = a; i <= b; i++) {
//         const sqrt = Math.sqrt(i);
//         if (Number.isInteger(sqrt)) {
//             squares.push(i);
//         }
//     }
//     return squares;
// }

// // Funktsiyani ishlatamiz
// const a = 10;
// const b = 30;
// const kvadratlar = findSquares(a, b);

// console.log(`[${kvadratlar.join(', ')}]`);



// 7-masala---------------------------------------------

// function calculateRatios(arr: number[]): number[] {
//     const sum = arr.reduce((acc, val) => acc + val, 0);
//     const average = sum / arr.length;

//     const ratios: number[] = [];

//     for (const num of arr) {
//         ratios.push(num / average);
//     }

//     return ratios;
// }

// // Funktsiyani ishlatamiz
// const numbers = [1, 2, 3, -1, -2, 0];
// const natijalar = calculateRatios(numbers);

// console.log(natijalar);
