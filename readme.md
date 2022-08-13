
<h1 align="center">Welcome to The Decentralised Petition System👋</h1>

Modern e-Petition Systems build on centralised projects have the power to exploit the Petition in different ways like, using fake signatures by bots, deletion of petitions by other higher entities, etc. 
Keeping in mind these problems we have build a decentralised e-petition system with the help of Tezos ecosystem.

The front end is be built using React.js and Material UI.
React is linked with to the Tezos blockchain using Taquito, Becan Wallet.

The smart contract would consist of two functions:

**Creation** -- Big Map is used to store data of petition on Blockchain with key as petition Number and Value as a Record containing Title, Content, No of signatures and a list containing map with key as address and value as a Nat.
**Signing system** -- As an input, smart-contract requires the Petition Number in order to update the list of signature.No of signatures are incremented upon calling this function. Assertions are provided to check whether no two Signatures are same. 

Taquito is used to interact with the blockchain and smart contracts on the backend using React. Using APIs on Jakarta Network with tzstats. 
```https://api.jakarta.tzstats.com/explorer/bigmap/79670/values```
where 79760 acts as the id of the bigmap and displayed on the front-end.



## 🚀 Running Instructions

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since npm `5.2.0`)

##  Install

```sh
npm install
```
>to download all the dependencies

##  Usage

```sh
npm run start
```


## Deployment of Smart Contract

Smart Contract is deployed on ***Jakarta Network.***
Smart Contract hash value is `KT1D7hiJZbMvVbQ5mB8SCHb2hR6f2Bv6vrpE`