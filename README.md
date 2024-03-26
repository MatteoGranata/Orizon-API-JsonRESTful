
#  ORIZON NODEJS API

Questo progetto è un'applicazione API JSON RESTful in Node.js  per la gestione di utenti, prodotti e ordini. 
L'applicazione utilizza un database MongoDB per lo storage e il recupero dei dati.




## Structure

#### Cartelle:
- **controllers**: Contiene i controller per le diverse funzionalità dell'API.

- **models**: Contiene i modelli Mongoose per le entità del dominio.

- **routes**: Contiene le rotte per le API.

#### File:

- **index.js**: File principale che avvia l'applicazione e configura le dipendenze.

- **package.json**: Contiene le informazioni sul progetto e le dipendenze.


## Funzionalità:
- Inserimento, modifica e cancellazione di un utente. Caratteristiche: nome, cognome, email.

- Inserimento, modifica e cancellazione di un prodotto venduto. Caratteristica: nome.

- Inserimento, modifica, cancellazione e di filtrare e visualizzare un ordine per data di inserimento degli ordini e per i prodotti in esso contenuti. Caratteristiche: prodotti dell'ordine e gli utenti che fanno parte dell'ordine.
## Installation

`Git bash` and `Node.js` are required for correct installation.

- Clona il repository:
```bash
  git clone https://github.com/MatteoGranata/Orizon-API-JsonRESTful.git

  cd Orizon-API-JsonRESTful

```
- installa le dipendenze
```bash
npm install

```
- Avvio
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
  GET /users/
```
Invia la lista di tutti gli utenti registrati.

#### Get User by ID

```http
  GET /users/:id
```
invia (se trovato) solo l'utente con i dettagli dell'ID corrispondente.

#### Create new User

```http
  POST /users/
```
Crea un nuovo utente.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nome dell'utente |
| `surname`      | `string` | **Required**. Cognome dell'utente |
| `email`      | `string` | **Required**. Email dell'utente |

#### Update User by ID

```http
  PATCH /users/:id
```
Aggiorna le informazioni dell'utente con quel ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nome dell'utente |
| `surname`      | `string` | **Required**. Cognome dell'utente |
| `email`      | `string` | **Required**. Email dell'utente |

Per mantenere invariate una o piu informazioni dell'utente basta non inserire la request body corrispondente .

#### Delete User by ID

```http
  DELETE /users/:id
```
  Elimina l'utente con quell'ID.


## Product API

#### Get all Products

```http
  GET /products/
```
Invia la lista di tutti i prodotti registrati.

#### Get Product by ID

```http
  GET /products/:id
```
invia (se trovato) solo il prodotto con i dettagli dell'ID corrispondente.

#### Create new Product

```http
  POST /products/
```
Crea un nuovo prodotto.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nome del prodotto |

#### Update Product by ID

```http
  PATCH /products/:id
```
Aggiorna le informazioni del prodotto con quel ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**. Nome del prodotto |


#### Delete Product by ID

```http
  DELETE /products/:id
```
  Elimina il prodotto con quell'ID.


## Orders API

 #### Get all Orders

```http
  GET /orders/
```
Invia la lista di tutti gli ordini registrati.

#### Get Order by ID

```http
  GET /orders/:id
```
invia (se trovato) solo il prodotto con i dettagli dell'ID corrispondente.

#### Get Order by Date

```http
  GET /orders/date/YYYY-MM-DD
```
invia (se trovati) solo gli ordini della data corrispondente.

#### Get Order by ID

```http
  GET /orders/product/:id
```
invia (se trovati) solo gli ordini con all'interno l'ID del prodotto corrispondente.

#### Create new Order

```http
  POST /orders/
```
Crea un nuovo ordine.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `users`      | `Id` | **Required**. Id dell'utente |
| `products`      | `Id` | **Required**. Id di uno o più ordini |

#### Update Order by ID

```http
  PATCH /orders/:id
```
Aggiorna le informazioni dell'ordine con quel ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `users`      | `Id` | **Required**. Id dell'utente |
| `products`      | `Id` | **Required**. Id di uno o più ordini |

Per mantenere invariate una o piu informazioni dell'ordine basta non inserire la description corrispondente.



#### Delete Order by ID

```http
  DELETE /orders/:id
```
  Elimina l'ordine con quell'ID.

## Tech Stack



**Server:** Node, Express, MongoDB


## Authors

- [@MatteoGranata](https://github.com/MatteoGranata)

