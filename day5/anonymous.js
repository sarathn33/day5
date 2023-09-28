//////Anonymous function//////

//First question

let arr1=[11,32,15,37,89,23,32,7]
         let oddnumber=function(arr){
             let odd_arr=[];
             for(let num of arr){
                (num%2!==0)? odd_arr.push(num) : num;                    
                }
             return odd_arr
            }
         console.log(oddnumber(arr1))
//output=>['11','15','37','89','23','07']

//Second question

let string_array=["guvi","geek","title","caps"]
         let titlecap=function(arr){
         titlecapped_array=[];
             for (let index in arr){
                 titlecapped_array.push(arr[index].charAt(0).toUpperCase()+arr[index].slice(1));     
                                                                                                
         }
         console.log(titlecapped_array)
         }
         titlecap(string_array)
//output=>[ 'Guvi', 'Geek', 'Title', 'Caps' ]

//Third question

let num=[64,21,34,87,32]
         let sum=function(...array){                                      
             for (let index in array){
                 console.log((array[index].reduce((previousvalue, currentvalue) => previousvalue + currentvalue,0)))
                 }
         }
         sum(num)  
output=>238

//Fourth question

let num4=[1,2,3,4,5,6,7,8,9,10]
let primenumbers=[];
let prime=function(arr){
      for(let aa of arr){
      if(aa>1){
            let flag=true;                                      
            for(let i=2;i<aa;i++){
                  aa%i===0? flag=false:true;                    
            }flag?primenumbers.push(aa):true;
      }
}}
prime(num4)
console.log(primenumbers);
output=>[ 2, 3, 5, 7 ]

//fifth question

let arr12=["dad","mom","wow","noon","moon"];
        let palindrome=function(num){
             let a=String(num).split("")
             let rev=[];
             let l=a.length;
             for(let i=l-1;i>=0;i--){                          
                 rev.push(a[i]);
                 }
             rev=rev.join("");                                        
             return rev;
             }
             result_array=[];
             for(let v of arr12){
                 v=String(v);                                         
                 v==palindrome(v)? result_array.push(v):false;
             }
        console.log(result_array);
output=>[ 'dad', 'mom', 'wow', 'noon' ]

//Sixth question

let arr111=[2,3,5,8]
let arr222=[10,12,14,16,18,20]
let mode=function(arr1,arr2){
     let arr_com=[...arr1,...arr2];                            
     arr_com.sort((a,b)=>a-b)                                  
     let len=arr_com.length;
     let arr_l=len/2;
     let result=arr_com[arr_l]+arr_com[arr_l-1];
     return result/2;
}
console.log(mode(arr111,arr222));
output=>11

//Seventh question

var duplicate = ["121","324","123","121","324"];
        let remove_duplicates=function(arr){
                 let a=[];
                 console.log([...new Set(arr)])             
            }
            remove_duplicates(duplicate);
output=>[ '121', '324', '123' ]

//Eight question

let arr101=[2,4,6,8,5,1];
            let k1=5;
            let rotate_array=function(arr1,k){
                 let arr=[...arr1];
                 arr.push(arr.shift());
                 for(let i=1;i<=k;i++){
                 }
                 return arr;
            };
            console.log(rotate_array(arr101,k1));       
output=>[ 4, 6, 8, 5, 1, 2 ]