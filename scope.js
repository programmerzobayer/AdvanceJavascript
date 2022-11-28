
 /*it is global variable. you can be accessed from anywhere in the program
 */
/**ইটা প্রোগ্রাম এর যেকোনো জায়গা থেকে এক্সেস করতে পারি */
 const num = 20 ; 


function scope(x,y){
    const sum = x + y  ; //sum is global variable 
     

    /**I can access it from inside and outside both the function. ফাঙ্কশন এর বাইরে ও ভিতরে উভয় জায়গা থেকে এক্সেস করতে পারবো কারণ ইটা গ্লোবাল ভ্যারিয়েবল*/ console.log(num);
    
    /**যদি sumTwo ভ্যারিয়েবল কে ফাঙ্কশন এর ভিতর থেকে রিটার্ন করে দেয় তাহলে বাইরে থেকে এক্সেস করতে পারি */ 
    const sumTwo = x + y ;
    return sumTwo ;

    
}


const result = scope(4,6); /**scope function er পেরামিটার এর ভ্যালুগুলো পাঠিয়ে দিয়েছি */



/* We cannot access Sum variable from outside the scope function because Sum variable is inside the scope function.Its scope is inside the function */
/**আমরা স্কোপ ফাংশনের বাইরে থেকে Sum ভেরিয়েবল অ্যাক্সেস করতে পারি না কারণ Sum ভ্যারিয়েবলটি স্কোপ ফাংশনের ভিতরে থাকে। sum ভ্যারিয়েবল এর পরিধি ফাঙ্কশন এর ভিতরে */   //console.log(sum);



/*এখন sumTwo ভেরিয়েবল এক্সেস করতে পারব কারণ ফাংশনের ভিতরে থেকে  এটা রিটার্ন করে দেয়া হয়েছে.
*/ console.log(result);

 /**I can access it from inside and outside both the function. ফাঙ্কশন এর বাইরে ও ভিতরে উভয় জায়গা থেকে এক্সেস করতে পারবো কারণ ইটা গ্লোবাল ভ্যারিয়েবল*/ console.log(num);


