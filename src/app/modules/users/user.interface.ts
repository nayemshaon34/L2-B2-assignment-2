// created interface

export type Name = {
    firstName:String;
    lastName:String;
};

export type Address = {
    street:String;
    city:String;
    country:String;
};

export type Orders = {
    productName:String;
    price:Number;
    quantity:Number;
};[]

export type UserName = {
    userId:Number;
    username:String;
    password:String,
    fullName:Name;
    age:Number;
    email:String;
    isActive:Boolean;
    hobbies:String[];
    address:Address;
    orders:Orders; 
}