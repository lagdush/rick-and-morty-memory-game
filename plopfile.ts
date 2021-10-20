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