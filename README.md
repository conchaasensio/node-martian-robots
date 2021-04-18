# 🤖 NODE - Martian Robots

The challenge is to create a martian robots simulator.

Sample input:

5 3

1 1 E

RFRFRFRF

## ⚒️ Process
```
/
|– src
|   |– martian_robots.js
|   |– martian_robots.test.js
```
***

### 🔶 Requirements

✅ Robot turns left from any orientation when receives "L" instruction .

✅ Robot turns right from any orientation when receives "R" instruction .

✅ Robot moves forward when receives "F" instruction.

✅ The output indicates the final grid position and orientation of the robot.

✅ If the robot falls off the edge of the grid, the word "LOST" is printed after the position and orientation.

❌ More than one robot.

❌ An instruction to move "off" the world from a grid point from which a robot has been previously lost is ignored by the current robot.
***

### 🔶 Following TDD methodology

Since it was the first time that I faced this kind of exercise, I took that as an opportunity to keep learning and improving.

This is why I performed the exercise trying to follow TDD methodology:
1. Write the test.
2. Write the production code.
3. Refactor.

That allows me to take "baby steps" and detect errors easier and faster, so that I could fix them before the next step.
***


## 🚀 How to run the Apps.

### Pre-requeriments

You need to have either [```Node```](https://nodejs.org/es/) or [```Docker```](https://www.docker.com/) previously installed in your computer.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/node-martian-robots.git
> ```

### ➡️ Node
***

You have to go to run npm install in order to install the necesary dependencies.
> ```console
> $ npm install
> ```

Finally, to run the tests, you need to introduce the following command on your terminal:
>```console
>$ npm test
>```

### 🐳 Docker
***

> ⚠️ Should you are a MacOS user, please note that this process might be a bit slow. Take it into account if you are using Docker on a MAC computer.  

In case you are using Docker, first of all you need to write the following command on your terminal:
> ```console
> $ docker-compose run martian-robots npm install
> ```

Finally, to run the tests, you need to introduce the following command on your terminal:
>```console
>$ docker-compose run martian-robots npm test
>```
## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://github.com/conchaasensiomr).
