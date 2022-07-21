
# ATMOSPHERE GROUP 5 - HIRING CODERS - SEMIFINAL CHALLENGE
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-purple.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## The Challenge 💪💪

The challenge consisted of developing a back-end application to compute  *reward points* for every eligible purchase on a 1:1 ratio. The ammount of points for a given logged user should be visible at the vtex my-account application.


## Introduction 📑📑
This repository houses all the apps, themes and services that make the delivery of the final project possible. 

The project offers a customized Store Experience using the [vtex store theme boilerplate](https://github.com/vtex-apps/store-theme) for VTEX IO Platform, extending the [my account app](https://github.com/vtex-apps/my-account) as it renders a link in one of the extension points available and presents it's corresponding page within the My Account application.

**For further information about the implementation of the My Account Extension App [visit here](#).**

**For further information about the implementation of the Back-end Service App [visit here](#).**

## Tutorial

Reproduce our results using the further developed VTEX - MASTER DATA SOLUTION:

#### * Step 1 - Clone the repository
```

git clone https://github.com/tallessouza/G5-Atmosphere.git {folder-name}

```

#### * Step 2 - Make sure you have the VTEX CLI Installed and run the following command
```
cd {folder-name} && vtex unlink --all && vtex link

```
#### * Step 3 - Now you're running our store-theme but should also link the my-account app extension and the backend service, so *from the same directory* procede to your console and type

```
cd backend && vtex link
```

#### * Step 4 - Now from the /backend folder type
```
cd ..
cd show-userpoints-extension && vtex link
```

#### * Step 5 - ⚠️ The backend relies on vtex-broadcaster which should be configured to target your workspace from the admin panel ⚠️ 
!<img width="500" src="https://user-images.githubusercontent.com/64051560/180149458-9385cd03-423a-41d8-84df-30564c1f3966.png"/>


#### * Step 6 - Visit the Store, Login, and check you points on the "Meus Pontos" tab. 
```
vtex browse
```
#### * Step 7 - Shop and handle the order from the admin panel to trigger the points event. Points should be added to your account. 



## REST API 🔀 🔀

To ensure data persistence, we use MasterData with the CL table. The dPoints field was created to save the value of points and to make the request logic and change the points, the API with two endpoints was used:<br/>

POST method https://{workspace}--{account}.myvtex.com/_v/app/pontos/:email/:pontos <br/>
GET https://{workspace}--{account}.myvtex.com/_v/app/pontos/:email/

When the purchase ends and the payment is approved, the vtex.orders-broadcast sends an event that triggers the method to increase the users points on MasterData.

🔴 There's Also a AWS API Gateway set, but business logic is yet to be coded.

The Endpoint: `https://dsfkppl2j7.execute-api.sa-east-1.amazonaws.com/Prod` expects a POST Request with the following schema
```
{
	"id": "email@domain.com",
	"points_earned": 1500,
	"points_spent": 0,
	"poits_available": 1500
}
```

And it's capable of retrieving the logged user's data from the Dynamo table using pathParams `https://dsfkppl2j7.execute-api.sa-east-1.amazonaws.com/Prod/{email@domain.com}`. In order to reproduce this behavior you should link `show-userpoints-extension` version that is presented at branch front.

Automatic increment and decrement of points is yet to be coded.

🔴

## Contributors 👩‍💻👨‍💻

NAME | GITHUB ? GITHUB : EMAIL 😅 | ROLE
| --- | --- | --- 
|Elias Seabra | https://github.com/EliasDoug | Store Customization
|Fabiola Tomaz |https://github.com/fabiunik| Store Customization
|Mônica Mendes | contato | Store Customization
|Talles Souza | https://github.com/tallessouza| Back-end Service App
|Tuana Sampaio | https://github.com/Tuanassf/| Store Customization
|Thyago Carvalho | https://github.com/OThyagoCarvalho | My Account Extension App



## The Team Effort 🧑‍🤝‍🧑🧑‍🤝‍🧑 
In this section we intend to talk about the general process of ideation and the approach that made the goals we set for ourselves attainable.

The day after the challenge started we joined a group call to make sure we all underestood all of the demands. It resulted in a rough Kanban-ish Trello Board as follows:
![image](https://user-images.githubusercontent.com/64051560/179425558-f03bb9fa-9340-41a0-916f-033b7475910c.png)

We then agreed on theming the store with the colors of our house and even agreed on using a logo designed by Elias.

<p float="left">
<img src="https://user-images.githubusercontent.com/64051560/180140661-ca7c16a7-4b58-4eea-940b-f5fe50e0497e.png" />

## Data Persistency

For data persistency we chose to use AWS and VTEX's Master Data for both API Endpoints and Storage. Here's a sketch of the interactions for the AWS Lambda + DynamoDB:


<img src="https://user-images.githubusercontent.com/64051560/180141316-9a5e698f-4f6e-4fd4-bbef-2bb0f2015b24.png"/>










