/**আমরা যদি কোনো একটা ফাংশনের ভেতর থেকে আরেকটা ফাংশনকে কল করি বা  রিটার্ন করি তখন  সে একটা ক্লোজ এনভায়রনমেন্ট তৈরী করে ফেলে  এবং ফাংশন ভিতরে যে ফাংশন টা রিটার্ন করতেছে বা কল করতেছে সে যদি তার বাইরের একটা ভারিয়াবল কে অ্যাকসেস করে  তখন আমার সেই ফাংশন টা ব্যাবহার করবো তখন সেই ফাংশন টা তার নিজস্ব একটা ভ্যালু রাখবে  */
/**
 * If we call or return another function from inside a function, then it creates a closed environment and if the function that is returning or calling inside the function accesses a variable outside it, then I will use that function.  That function will hold a value of its own
 */

function stopWatch (){
    let num = 0 ;
    return function (){
        num++ ;
        return num ;
    }
}

const add = stopWatch();
const addTwo = stopWatch();
console.log(add());
console.log(add());
console.log(add());
console.log(add());


console.log(addTwo());
console.log(addTwo());
console.log(addTwo());
console.log(add());