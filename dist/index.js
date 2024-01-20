"use strict";
// const a = 5654;
// alert(a);
// -----------------------------------------------
// let a = 25;
// let namee ="Arnav";
// console.log(a);
// console.log(namee);
// ------------------------------------------------------------------
// let a:string = "562";
// let num:number = 56235;
// let check:boolean;
// check=true;
// ----------------------------------------------------
// let a;
// let num;                    this is the any type Try to avoid that in TS
// let check;
// --------------------------------------------------
// let num=<string>566;
//  and this
// let num:string='477848';           this are the normal var
// let surname:string|number;
// surname= '5622';                              this is called union type
// ----------------------------------------------------------------
// const func = (n:number, m:number)=>{
//     console.log(n,m);
//     return n*m;
// };
// const fun = (n1:number, m1:number): number=>{
//     console.log(n1,m1);
//     return n1*m1;
// };
// --------------------------------------------------------------------------
// type UserName= (n:string, m:string)=> string;
// const func: UserName = (n,m)=>{
//     console.log(n,m);
//     return n+m;
// }
// ----------------------------------------------------------------- Array  
// const arr:number[] = [45,56,78,32];
// const arr2:string[] = ["happy", "sad", "arnav"];
// const arr3:Array<string> =["home", "about us"]
// arr2.forEach(i=>{
//     console.log(`${i}`)
// })
// -------------------------------------------------------------------- object
// type Obj = {
//     height: number;
//     weight: number;  
//     gender?: boolean; // optional property
// }
// const obj: Obj ={
//     height: 5642,
//     weight: 45,
//     // gender: true,
// }
// const obj2: Obj ={
//     height: 762,
//     weight: 45,
//     gender: true,
// }
// interface Obj {
//     height: number;
//     weight: number;  
//     gender?: boolean; // optional property
// }
// type FuncType = (n: number, m: number)=> void;
// interface NewObj extends Obj {
//     scolar: boolean;
//     func: FuncType;
// }
// const gigi: NewObj ={
//     height: 708,
//     weight: 90,
//     gender: false,
//     scolar: true,
//     func: (n,m) => {
//         console.log(n*m);
//     }
// }
// const gigi2: NewObj ={
//     height: 708,
//     weight: 90,
//     gender: false,
//     scolar: true,
//     func: (n,m) => {
//         console.log(n*m);
//     }
// }
// gigi.func(10,80);
// ---------------------------------------------------------------------------------Function
// optional paramiter
// type FuncType = (n: number, m: number, l?: number)=> number | string;
// const addFunc : FuncType = (n ,m ,l)=> {
//     if(typeof l=== "undefined") return n*m;
//     else return n*m*l;
// };
