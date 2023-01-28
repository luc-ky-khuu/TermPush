module.exports = {
	'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	'parser': '@typescript-eslint/parser',
	'plugins': ['@typescript-eslint'],
	'root': true,
	'env': {
		'node': true
	},
	'rules': {
		'indent': ['error', 'tab'],
		'semi': 'off',
		'@typescript-eslint/semi': 'warn',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
	}
};