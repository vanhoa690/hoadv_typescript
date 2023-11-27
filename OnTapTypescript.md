## run 
ts-node tenfile.ts

tsc - build ta ca file ts sang js
tsc tenfile.ts - build file ts sang js

## https://www.tutorialsteacher.com/typescript/typescript-number


type Student = {
  id: number;
};

const student = {};
Javascript
Number String ||  &&   . ts | & 

## kieu du lieu: number string boolean null undefined any void never unknown

let fruits: (string | number)[] = ['Apple', 'Orange', 'Banana'];

let fruits2: Array<string | number> = ['Apple', 'Orange', 'Banana', 1];

## Tuples
let person: [number, string, boolean, number] = [1, 'Steve', true, 1];

## Enum (const)
### enum number
enum PrintMedia {
  Newspaper = 2,
  Newsletter = 1,
  Magazine,
  Book,
}

### enum string
enum PrintMedia2 {
  Newspaper = 'Newspaper',
  Newsletter = 'Newsletter',
  Magazine = 'Magazine',
  Book = 'Book',
}
const status = 1 || 2;
status === PrintMedia.Newsletter;

const status2 = 'Newsletter';
status2 === PrintMedia2.Newsletter;

## Union | TS
let code: string | number;

## Intersection type &
type Student2 = Student & { age: number };

### Any
let something: any = 'Hello World!';
something = true;

### void
function sayHi(): void {
  console.log('Hi!');
  // no return
}

onChange: () => void

## Generics <>
Array<number>
useState<number>

## Literal types
type Gt = 'nam' | 'nu'
const gioiTinh: Gt = 'nam'

### never 
let a: string & number = 1

### unknown

## Utility Types

## Partial  (?) chuyen ve optional
type Student3 = {
  id: number
}

type Student4 = Partial<Student3>
{
  id?: number
}

## Required chuyen ve required
type Student5 = {
  id?: number
  age: number
  gioiTinh: 'nam' | 'nu'
}

type Student6 = Required<Student5>
 {
   id: number
 }

## Pick lay type
type Student7 = Pick<Student5, 'age' | 'gioiTinh'>

## Omit bo qua type
type Student8 = Omit<Student6, 'gioiTinh'>

## Casting: as 
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;
let person2: Person =  {
  name: 'Bruce Willis',
  age: 64,
  role: 'World saver',
  occupation: 'string'

}

 const isAdminRole =  (person2 as Admin).role
 const isUserRole = (person2 as User).occupation


 useState: [data, setData]
 useEffect: () => {
  cal api
  setState setData
 }


 return UI (data)