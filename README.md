# COVID-19 and World Trade

This repository contains the implementation of [COVID-19 and World Trade](https://covid-trade.github.io/), a web storymap project in [Cartography Lab](http://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2021S&ansicht=ALLE&lerneinheitId=149343&lang=en) FS 2021 at ETH Zurich.

Group member: Jingyan Li, Yuanwen Yue

Supervisor: Dr. Christian Häberling

Professor: Prof. Dr. Lorenz Hurni

## Introduction

<p align="center">
  <img src="teaser.PNG" alt="Photo" style="width: 600px;"/> 
</p>

The project aims to give users an overview of the global economy and trade trends under the COVID-19 pandemic by web-based visualization methods. Through the interactive visualization of economic and trading-related data, users may understand how the global trade and economy is affected from the pre-COVID period to now.

The realization of the project is a web-based story map, with multimedia, interactive charts and maps. We set the project at global scale, but the trade trend and trading-related policies in China is the case study in the story map.

In the story map, we firstly introduced the development of COVID-19 and its impact on the world. Then we elaborated the global economy during COVID-19, especially comparing it with the Global Financial Crisis in 2008. In the next section, the global trade trend was explained. We also showed the divergent trade trend across countries - some countries (e.g., China) performed better in the trading recovery. Later, China was as a case study to show the details of its trade structure during COVID-19. Setting the origin country as China, we visualized the trade flow and the composite of its imports and exports of goods in 2020. The visualization of such data could be a tool to help users explore the reason why China became an exception under the downturns of trade markets. We further introduced the trading-related policies and measurements taken by China to deal with the pandemic. Finally, we gave an outlook to the post-pandemic period.

We assume the target groups as citizens who can get knowledge of how the world trade was impacted by COVID-19. The product could tell a simple but clear story about the world economy and trading during the pandemic. Please refer more details in the [technical report](https://github.com/ywyue/CartoLab/blob/main/CartoLab_Report.pdf).

## How to use

### Install the dependencies
```bash
npm install
```

### Start the app in development mode
```bash
npm run serve
```
Your browser should be opened automatically at [http://localhost:8080](http://localhost:8080)

### Build the app for production
```bash
npm run build
```

## Copyright

[Jingyan Li](mailto:jingyli@ethz.ch) & [Yuanwen Yue](mailto:yuayue@ethz.ch). All rights reserved.

