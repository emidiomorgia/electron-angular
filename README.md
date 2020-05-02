# electron-angular

electron-angular is a project with the aim of demonstrating the use of electron with an angular front end and debugging the main process and render process. In addition, scripts are prepared to deploy with electron-builder on Windows Mac and Linux.
It uses Angular 9.x and Typescript, Electron 8.x and Electron-Builder for deploy. 

## Features
* npm scripts "build" and "build-prod" with --base-href changed in ./ according to electron main file
* npm script "start:electron" wich builds angular on dist folder and then starts electron
* npm "dist:win32","dist:win64","dist:mac","dist:linux" scripts for deploy an installer with electron-builder
* launch.json with two profiles for debugging Main Process and Renderer Process or both inside vs code

![](header.png)


## Installation

Clone master branch:

```sh
git clone https://github.com/emidiomorgia/electron-angular.git
```

Restore npm packages:

On Windows:
```sh
cd src
npm install
```

On MacOS or Linux:
```sh
cd src
sudo npm install
```
If the previous command fail with EACCESS permission try to run as described on electron wiki:
```sh
cd src
sudo npm install --unsafe-perm=true
```


## Usage example

To run ``ANGULAR ONLY`` source run the following on terminal:
```sh
cd src
npm run start 
```

To build angular source and run it ``INSIDE ELECTRON`` run the following on terminal:
```sh
cd src
npm run start:electron 
```
Then you can debug from vs code using Run icon and choosing ``Electron: Main`` for main process, ``Electron: Renderer`` for renderer process or ``Electron: All`` for both. Then put a break point on vs code and it will be hit inside the IDE.

_For more examples and usage, please refer to the [Wiki][wiki]._


## Release History

* 0.0.1
    * ADD: First version.

## Meta

Emidio Morgia – [@emidiomorgia](https://twitter.com/emidiomorgia) – emidio@morgia.info

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/emidiomorgia/github-link](https://github.com/emidiomorgia/)

## Contributing

1. Fork it (<https://github.com/emidiomorgia/electron-angular/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/emidiomorgia/electron-angular/wiki

