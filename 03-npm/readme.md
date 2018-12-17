### Node Package Manager

__Why Node?__

* Share code with other developers
* Re-use own code in other projects
* Use code written by others

- Code sharing
- Composability
- Team work
- Versions

__NPM revolutionized the way JavaScript developers works__

_node package_ is basically a folder that contains scripts that can be run in node. So any folder that contains javascripts code in it, is a node package. (AKA Module)

NPM
- npmjs.org the site that mantein the node packages
- npm cli, the command line interface tool.
- npm inc, the compain that mantein both

__NPM Command__

``` bash
    npm install -g npm
    # You can update npm with npm!
``` 

``` bash
    npm install moduleX
    # Check if node_modules folder exist, if not, create the folder
    # Check if package.json file exists, if not, create the file
    # Put the moduleX files inside the node_modules folder, along with his dependencies
```

_package.json_

``` json
{
    "name": "my-proyect", // It´s the unique identifier. Must be unique if you want to publish it
    "version": "1.0.0", // It´s a semantic versioning string
    "dependencies": {
        "express": "^4.16.3"
    }
}
``` 

``` bash
    npm i
``` 
The node_modules folder is not published in git, or transfered, package.json has the information of the modules needed foe the project.

_package-lock.json_

contains the information of all the tree dependencies of you proyect, including the dependencies of your dependencies, with the versions included.

``` bash
    npm i -D nodemon
``` 
You can install here, test frameworks or other modules that you dont need in productions enviroments

_package.json_

``` json
{
    "name": "my-proyect", // It´s the unique identifier. Must be unique if you want to publish it
    "version": "1.0.0", // It´s a semantic versioning string
    "dependencies": {
        "express": "^4.16.3"
    },
    "devDependencies": {
        "nodemon": "^1.17.5"
        /*
        * Dependencies not needed in production enviroments
        */
    }
}
``` 

``` bash
    npm i --production
    # It will ignore dependencies in devDependencies
``` 

``` bash
    npm init
    # it will create a package.json from scratch, asking you a few questions
``` 

``` bash
    npm init --yes
    # it will create a package.json from scratch, all values with default values
``` 

__Semantic Versioning (SemVer)__

1.2.3

1 => Major : Breacking Changes
2 => Minor : Backward Compatible
3 => Patch : Bug Fixes

_special characters_

~1.2.3 = 1.2.x __where x >= 3__ yes (1.2.4, 1.2.5, 1.2.9) not (1.2.2, 1.3.0)
^1.2.3 = 1.x   __where x >= 2__ yes (1.2.3, 1.2.4, 1.3.0) not (1.1.9, 2.0.0)

_semver calculator_  https://semver.npmjs.com

``` bash
    npm i -g create-ract-app
    # Install globally for all projects, the node package, node make available all it´s commands for anywhere
```
It´s not recommended use a parent node_moudles for all your projects. You want to sahre your project, and the other developers have the same experience as you

__Publishing your package__

``` bash
    npm init
    # it will create a package.json from scratch, all values with default values
``` 

``` bash
    npm login
    # Login to your account in npmjs.org
``` 

``` bash
    npm publish
    # it will publish your package in npmjs.org
``` 

index.js has a special meaning for node and npm

__npm scripts__

You can set scripts in package.json 

``` json
{
    "name": "my-proyect", // It´s the unique identifier. Must be unique if you want to publish it
    "version": "1.0.0", // It´s a semantic versioning string
    "scripts": {
        "start": "node server.js",
        "test": "jest",
        "check": "eslint server.js"
    },
    "dependencies": {
        "express": "^4.16.3"
    },    
    "devDependencies": {
        "nodemon": "^1.17.5"
        /*
        * Dependencies not needed in production enviroments
        */
    }
}
```

when running 

``` bash
    npm run start
    # or
    npm start
    # it will execute "node server.js"
``` 
when running

``` bash
    npm run test
    # or
    npm test
    # it will execute "jest"
    # If we would try running npm jest, it would file, becouse, for jest, is nedded a node mudle #dependencie, only in the node_modules folder for that specific project. 
``` 

``` bash
    npx jest
    # this will work, beocuse it search the local node_modules folder for availables modules, for run that command
``` 

``` bash
    npx run check
    # check is not a special command in node, so run must be typed.
    # eslint.js must be configured previusly npx eslint --init
``` 

``` bash
npm help npm-scripts
```

__Updating modules__

when running 

``` bash
    npm update
```

It will check for wanted versions, that are, the versions allowed following the __SemVer__, not the latest. For checking the allowed versions, use the command

``` bash
    npm show request versions
    #list all available versions following SemVEr
```

Also we can use outdated

``` bash
    npm outdated
    #list all available packages with Current Version/Wanted Version/Latest Version/Location
```

