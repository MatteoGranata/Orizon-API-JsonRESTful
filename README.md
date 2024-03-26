# ORIZON API JSON RESTful whit NODEJS


<table>
<tr>
<td>
Questo progetto è un'applicazione API JSON RESTful in Node.js  per la gestione di utenti, prodotti e ordini. 
L'applicazione utilizza un database MongoDB per lo storage e il recupero dei dati.
</td>
</tr>
</table>


<br>
![](https://komarev.com/ghpvc/?username=MatteoGranata&color=e2b6ff&style=flat-square)

### Structure

**Cartelle**

- [controllers]: Contiene i controller per le diverse funzionalità dell'API.

- [models]: Contiene i modelli Mongoose per le entità del dominio.

- [routes]: Contiene le rotte per le API.


**File**
 
- [index.js]: File principale che avvia l'applicazione e configura le dipendenze.

- [package.json]: Contiene le informazioni sul progetto e le dipendenze.




### Funzionalità:
- Inserimento, modifica e cancellazione di un utente.
Caratteristiche: nome, cognome, email.
- Inserimento, modifica e cancellazione di un prodotto venduto.
Caratteristica: nome.
- Inserimento, modifica, cancellazione e di filtrare e visualizzare un ordine per data di inserimento degli ordini e per i prodotti in esso contenuti.
Caratteristiche: prodotti dell'ordine e gli utenti che fanno parte dell'ordine.






### Instructions for download

`Git bash` and `Node.js` are required for correct installation.

- Clona il repository:
```sh
git clone https://github.com/MatteoGranata/Orizon-API-JsonRESTful.git

```
- Installa le dipendenze:
```sh
npm install
```
- Apri il file `.env` e inserisci l'URL di connessione al database MongoDB

## Avvio

- Esegui nel terminale per avviare il server locale in ascolto sulla porta 3000
```sh
 npm start 
 ```

 ## ISTRUZIONI API:

 ### Users API
 
- **GET all Users**

 - Endpoint: `/users/`
 - Method `GET` 
 - Invia la lista di tutti gli utenti registrati.

- **GET User by ID**

- Endpoint: `/users/` + ID utente
- Method: `GET`
- invia (se trovato) solo l'utente con i dettagli dell'ID corrispondente.

- **Create new User**

- Endpoint: `/users/`
- Method: `POST`
Crea un nuovo utente.
   - Request Body:
   - **name**: Nome dell'utente,
   - **surname**: Cognome dell'utente,
   - **email**: Indirizzo email dell'utente.

- **Udate User by ID**

- Endpoint: `/users/` + ID utente
- Method: `PATCH`
Aggiorna le informazioni dell'utente con quel ID
   - Request Body:
   - **name**: Nome dell'utente,
   - **surname**: Cognome dell'utente,
   - **email**: Indirizzo email dell'utente.
   per mantenere invariate una o piu informazioni dell'utente basta non inserire la request body corrispondente .

   - **Delete User by ID**

  - Endpoint: `/users/` + ID utente
  - Method: `DELETE`
  Elimina l'utente con quell'ID.
  


  ### Products API
 
- **GET all Product**

 - Endpoint: `/products/`
 - Method `GET` 
 - Invia la lista di tutti i prodotti registrati.

- **GET Product by ID**

- Endpoint: `/products/` + ID prodotto
- Method: `GET`
- invia (se trovato) solo il prodotto con i dettagli dell'ID corrispondente.

- **Create new Product**

- Endpoint: `/products/`
- Method: `POST`
Crea un nuovo prodotto.
   - Request Body:
   - **name**: Nome del prodotto.
  
- **Udate Product by ID**

- Endpoint: `/products/` + ID prodotto
- Method: `PATCH`
Aggiorna le informazioni del prodotto con quel ID.
   - Request Body:
   - **name**: Nome del prodotto.
   per mantenere invariate una o piu informazioni del prodotto basta non inserire la request body corrispondente.

   - **Delete Product by ID**

  - Endpoint: `/products/` + ID prodotto
  - Method: `DELETE`
  Elimina il Prodotto con quell'ID.



   ### Orders API
 
- **GET all Orders**

 - Endpoint: `/orders/`
 - Method `GET` 
 - Invia la lista di tutti gli ordini registrati.

- **GET Order by ID**

- Endpoint: `/orders/` + ID ordine
- Method: `GET`
- invia (se trovato) solo l'ordine con i dettagli dell'ID corrispondente.

- **GET Order by Data**

- Endpoint: `/orders/date/` + YYYY-MM-DD
- Method: `GET`
- invia (se trovati) solo gli ordini della data corrispondente.

- **GET Order by ProductID**

- Endpoint: `/orders/product/` + ID prodotto
- Method: `GET`
- invia (se trovati) solo gli ordini con all'interno l'ID del prodotto corrispondente.

- **Create new Order**

- Endpoint: `/orders/`
- Method: `POST`
Crea un nuovo ordine.
   - Request Body:
   - **users**: ID dell'utente.
   - **products**: ID di uno o più prodotti.
  
- **Udate Order by ID**

- Endpoint: `/orders/` + ID ordine
- Method: `PATCH`
Aggiorna le informazioni dell'ordine con quel ID.
   - Request Body:
   - **users**: ID dell'utente.
   - **products**: ID di uno o più prodotti.
   per mantenere invariate una o piu informazioni dell'ordine basta non inserire la request body corrispondente.

   - **Delete Order by ID**

  - Endpoint: `/orders/` + ID ordine
  - Method: `DELETE`
  Elimina l'ordine con quell'ID.



## Build with: 

- Node.js
- express
- cors
- dotenv
- express-mongo-sanitize
- mongoose
- nodemon

