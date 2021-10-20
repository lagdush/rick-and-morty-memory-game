# Rick and Morty Memory Game

## Project Overwiev

I did not use Create React App while creating this project. Instead, I relied on Vite.js.

------------

## Technologies

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

------------

## Automations

To automate the creation of components I used the plop package. Sample code that automates the creation of components:

```javascript
module.exports = (plop) => {
 plop.setGenerator('FCA', {
  description: 'Create a functional component',
  prompts: [
   {
    type: 'input',
    name: 'name',
    message: 'What is your component name',
   },
  ],
  actions: [
   {
    type: 'add',
    path:'src/Components/{{pascalCase name}}/{{pascalCase name}}.tsx',
    templateFile: 'plop-template-generator/functionalComponent.tsx.hbs',
   },
   {
    type: 'add',
    path:
                   'src/Components/{{pascalCase name}}/{{pascalCase name}}.styled.tsx',
    templateFile: 'plop-template-generator/Component-styled.tsx.hbs',
   },
  ],
 });
};
```

To run plop, enter the command `npm run plop`
