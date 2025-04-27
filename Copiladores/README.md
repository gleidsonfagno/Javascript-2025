# Copiladores 

intalar o babel 

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
e esecutar o comando
.\node_modules\.bin\babel nome do aquivo que vai ser compilado main.js e --out-dir dist

```

adicionar essa linha no pacjage.json

```javascript
"build": "babel ./Copiladores/app.js --out-dir ./Copiladores/dist"
//E execultar o npm run build
```
