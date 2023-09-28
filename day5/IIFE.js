//IIFE function
//First question
(function(array1){
    for(var i = 0 ; i< array1.length ; i++){
               if(array1[i]%2!=0){
                  console.log((array1[i]))
               } 
          }})([11,32,15,37,89,23,22,32,7])

//Second question
let string_array1=["guvi","geek","title","caps"]
         console.log(
         (function(string_array){
            let titlecapped_array=[];
             for(let str of string_array){
                 titlecapped_array.push(str.charAt(0).toUpperCase()+str.slice(1));
         }
         return titlecapped_array
         })(string_array1))

//Third question
let num22=[64,21,34,87,32]
        console.log(
        (function(num2){
        let sum=0;
        for (let index in num2){
             sum+=num2[index];                                       
            }
            return sum;
        })(num22))

//Fourth Question
let num123=[1,2,3,4,5,6,7,8,9,10]
        console.log(                             
         (function(num1){
          let primenumber=[];
          for (let v of num1){
                if(v>1){
                      let flag=true;
                      for(let i=2;i<v;i++){                            
                            v%i===0?flag=false:true;                    
                      }flag?primenumber.push(v):true;
                }
          }
          return primenumber;
         }(num123)))

//Fith Question
let arr13=["dad","mom","wow","noon","moon"];
            console.log(
            (function(arr){
                 result=[];
                 for(let num of arr){                            
                 let a=String(num).split("")
                 let rev=[];
                 let l=a.length;
                 for(let i=l-1;i>=0;i--){
                     rev.push(a[i]);
                 }
                 rev=rev.join("");
                 a=a.join("")
                 rev===a? result.push(rev):false;
            }   return result;
            })(arr13));

//Sixth question
let arr111=[2, 3, 5, 8];
let arr222=[10, 12, 14, 16, 18, 20];
            console.log(
            (function(arr1,arr2){
                 let arr_com=[...arr1,...arr2];
                 arr_com.sort((a,b)=>a-b);
                 let len=arr_com.length;                                    
                 let arr_l=len/2;
                 let result=arr_com[arr_l]+arr_com[arr_l-1];
                 return result/2;
            })(arr111,arr222)
            );            
    
//Seventh question
var duplicate = ["121","324","123","121","324"];
(function(arr){
let a=[];
console.log([...new Set(arr)])
}(duplicate));                                                   

//Eight question
let arr101=[2,4,6,8,5,1];
            let k=5;
            (function(arr1,k){
                 let arr=[...arr1];                                         
                 for(let i=1;i<=k;i++){
                 arr.push(arr.shift());
                 }
                 console.log(arr);
            }(arr101,k));