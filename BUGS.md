# Frontend app for the DRF API

## SignUpForm
* BUG:  Module Parse Error
* Message: You may need an appropriate loader to handle this file
* Solution: 
  - Overwrite contents of package.json with same from source code
  - Delete node_modules folder
  - Delete package-lock.json
  - run npm install


-- None yet

![Error Screenshot](./errors_encountered/ModuleParseFailed.png, "Error")
![Error Screenshot Message](./errors_encountered/ModuleParseFailed_error.png, "Error Message")
![Error Screenshot Code](./errors_encountered/ModuleParseFailed_error_code.png, "Error Code")


## SignInForm - Contexts

* BUG: username is not defined - Sign In not working after contexts refactor
* Solution: make sure to call context object with () brackets useSetCurrentuser();