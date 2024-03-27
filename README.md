
#  ORIZON NODEJS API

This project is a JSON RESTful API application in Node.js for managing users, products, and orders.
The application uses a MongoDB database for data storage and retrieval.




## Structure

#### Folders:
- **controllers**: Contains controllers for the different features of the API.

- **models**: Contains Mongoose models for domain entities.

- **routes**: Contains routes to APIs.

#### File:
- **index.js**: Main file that launches the application and configures dependencies.

- **package.json**: Contains information about the project and dependencies.


## Functionality:
- Insertion, modification and deletion of a user. Characteristics: name, surname, email.

- Insertion, modification and deletion of a sold product. Feature: name.

- Insertion, modification, cancellation and to filter and view an order by date of entry of the orders and by the products contained in it. Characteristics: products of the order and the users who are part of the order.

## Installation

`Git bash` and `Node.js` are required for correct installation.

- Clone the repository:
```bash
   git clone https://github.com/MatteoGranata/Orizon-API-JsonRESTful.git

   cd Orizon-API-JsonRESTful

```
- install dependencies:
```bash
npm install

```
- Start:
```bash
npm start

```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CONNECTION_URL = add your database URL here`

`port = 3000`




# API Reference
## User API

#### Get all Users

```http
  GET/users/
```
Send the list of all registered users.

#### Get User by ID

```http
  GET/users/:id
```
sends (if found) only the user with matching ID details.

#### Create new User

```http
  POST /users/
```
Create a new user.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. User name |
| `surname`      | `string` | **Required**. User's last name |
| `email`      | `string` | **Required**. User email |

#### Update User by ID

```http
  PATCH /users/:id
```
Update the user's information with that ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. User name |
| `surname`      | `string` | **Required**. User's last name |
| `email`      | `string` | **Required**. User email |

To keep one or more user information unchanged, simply do not insert the corresponding request body.

#### Delete User by ID

```http
  DELETE /users/:id
```
 Delete the user with that ID.


## Product API

#### Get all Products

```http
  GET /products/
```
Send the list of all registered products.

#### Get Product by ID

```http
  GET /products/:id
```
send (if found) only the product with the corresponding ID details.

#### Create new Product

```http
  POST /products/
```
Create a new product.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Product name |

#### Update Product by ID

```http
  PATCH /products/:id
```
Update the product information with that ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**. Product name |


#### Delete Product by ID

```http
  DELETE /products/:id
```
Delete the product with that ID.

## Orders API

 #### Get all Orders

```http
  GET /orders/
```
Send the list of all registered orders.
#### Get Order by ID

```http
  GET /orders/:id
```
send (if found) only the product with the corresponding ID details.

#### Get Order by Date

```http
  GET /orders/date/YYYY-MM-DD
```
send (if found) only the orders of the corresponding date.

#### Get Order by ID

```http
  GET /orders/product/:id
```
send (if found) only orders with the corresponding product ID inside.

#### Create new Order

```http
  POST /orders/
```
Create a new order.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `users`      | `Id` | **Required**. User ID |
| `products`      | `Id` | **Required**. Id of one or more orders |

#### Update Order by ID

```http
  PATCH /orders/:id
```
Update your order information with that ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `users`      | `Id` | **Required**. User ID |
| `products`      | `Id` | **Required**. Id of one or more orders |

To keep one or more order information unchanged, simply do not enter the corresponding description.



#### Delete Order by ID

```http
  DELETE /orders/:id
```
Delete the order with that ID.

## Tech Stack



**Server:** Node, Express, MongoDB


## Authors

- [@MatteoGranata](https://github.com/MatteoGranata)

