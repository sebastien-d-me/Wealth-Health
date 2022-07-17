# Modal P14 - Sebastien D
## Description
This plugin is for the project 14 from OpenClassrooms formation "Front-End".

## How to install ?
`npm i p14--plugin--modal--sebastien-d-me`

## How to use ?
1. Import the plugin in your project like this : `import Modal from "p14--plugin--modal--sebastien-d-me";`
2. In the return : `<Modal id="custom-id" parameter={modalParameter} message="Your message" />`

## Personalize
1. Put this into your component :
`const modalParameter = {
	"backgroundColor": "#EEEEEE",   
	"borderRadius": 10,
	"boxShadow": "0 0 5px #1B1919",
	"color": "#1B1919",
	"fontSize": 18,
	"height": "fit-content",
	"padding": "20px 50px",
	"width": "fit-content"
}`