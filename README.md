# bullet-serve

# phase one

## screens

register page
login page
Customer page

admin
kitchen
cashier
delivery

## states for order:

create order
approval
kitchen
cashier
delivery

## model

Order

orderID : string
state : State
items[] : string[]
price : number
clientNotes : string
resolution : Resolution
orderDate : Date()

EmployeeUser

userName : string
password : string
role : Role

CustomerUser

userName : string
password : string
phone : string
orders[] : Order[]

# phase two

SASS

## model

recipes and ingridients
time log
logo
