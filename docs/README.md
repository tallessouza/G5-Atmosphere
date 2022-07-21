
# ATMOSPHERE GROUP 5 - HIRING CODERS - SEMIFINAL CHALLENGE
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## The Challenge

The challenge consisted of developing a back-end application to compute  *reward points* for every eligible purchase on a 1:1 ratio. The ammount of points for a given logged user should be visible at the vtex my-account application.

## Preview

## Introduction
This repository houses all the apps, themes and services that make the delivery of the final project possible. 

The project offers a customized Store Experience using the [vtex store theme boilerplate](https://github.com/vtex-apps/store-theme) for VTEX IO Platform, extending the [my account app](https://github.com/vtex-apps/my-account) as it renders a link in one of the extension points available and presents it's corresponding page within the My Account application.

**For further information about the implementation of the My Account Extension App [visit here](#).**

**For further information about the implementation of the Back-end Service App [visit here](#).**

## Tutorial

## REST API

To ensure data persistence, we use MasterData with the CL table. The dPoints field was created to save the value of points and to make the request logic and change the points, the API with two endpoints was used:<br/>

POST method https://{workspace}--{account}.myvtex.com/_v/app/pontos/:email/:pontos <br/>
GET https://{workspace}--{account}.myvtex.com/_v/app/pontos/:email/

When the purchase ends and the payment is approved, the vtex.orders-broadcast sends an event that triggers the method to increase the users points on MasterData.

## Contributors 👩‍💻👨‍💻

NAME | GITHUB ? GITHUB : EMAIL 😅 | ROLE
| --- | --- | --- 
|Elias Seabra | https://github.com/EliasDoug | Store Customization
|Fabiola Tomaz |https://github.com/fabiunik| Store Customization
|Mônica Mendes | contato | Store Customization
|Talles Souza | https://github.com/tallessouza| Back-end Service App
|Tuana Sampaio | https://github.com/Tuanassf/| Store Customization
|Thyago Carvalho | https://github.com/OThyagoCarvalho | My Account Extension App

## The Team Effort 
In this section we intend to talk about the general process of ideation and the approach that made the goals we set for ourselves attainable.

The day after the challenge started we joined a group call to make sure we all underestood all of the demands. It resulted in a rough Kanban-ish Trello Board as follows:
![image](https://user-images.githubusercontent.com/64051560/179425558-f03bb9fa-9340-41a0-916f-033b7475910c.png)

We then agreed on theming the store with the colors of our house and even agreed on using a logo designed by Elias.

<p float="left">
<img width="380" src="https://user-images.githubusercontent.com/64051560/179427314-df9d9f78-567e-4ed7-ab59-3bfda34ca20e.png"/>
<img width="300" src="https://user-images.githubusercontent.com/64051560/179427319-dd70f84d-2637-4fda-8cc8-76e28bbc3f02.png"/>
</p>







