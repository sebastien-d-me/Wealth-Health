# Modal P14 - Sebastien D
## Description
This plugin is for the project 14 from OpenClassrooms formation "Front-End".


## How to install ?
```cmd
npm i react-modal-p14-sebastien-d
```


## How to use ?
1. Import the plugin in your project like this : 
```javascript
import Modal from "react-modal-p14-sebastien-d";
```

2. The state :
```javascript
const [displayModal, setDisplayModal] = useState(false);
```

3. In the return : 
```javascript
<Modal key={modalReset} id="modal-created" showModal={displayModal} closeModal={() => setDisplayModal(false)} parameter={modalParameter} message="Employee Created !" />
```


## Personalize
1. Put this into your component :
```javascript
const modalParameter = {
	"backgroundColor": "#EEEEEE",   
	"borderRadius": 10,
	"boxShadow": "0 0 5px #1B1919",
	"color": "#1B1919",
	"fontSize": 18,
	"height": "fit-content",
	"padding": "20px 50px",
	"width": "fit-content"
}
```