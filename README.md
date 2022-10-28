# coinLIST

CoinList is a startup that helps people discover new coins

## Installation

* Clone the repository
```bash
    git clone https://github.com/NedyUdombat/coinlist.git
```

* Install dependencies 
```bash
    yarn
```

* Install pod dependencies 
```bash
    cd ios && pod install
```

  * If pod install doesnt work try
```bash
    pod install --repo-update
```

## Setup
```bash
    cp .env.sample .env
```

Locate the .env file and set the value for the environment variables

## Running

* Start the metro server
```bash
    yarn start
```

* Run the application on IOS simulator
```bash
    yarn ios
```

* Run the application on Android emulator
```bash
    yarn android
```