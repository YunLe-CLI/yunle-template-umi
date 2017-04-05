var path = require('path');
var fs = require('fs');
var exists = fs.existsSync;
var program = require('commander');
var fse = require('fs-extra');
var inquirer = require('inquirer');

var argv = process.argv.slice(2);
var pageName = argv[0];
var inPlace = !pageName || pageName === '.'
var name = pageName ? path.relative('../', process.cwd()) : pageName;
var template = path.join('./libs/createPage/__template__');
var toPath = path.join('./src/containers', pageName);

if (exists(toPath)) {
	inquirer.prompt([{
		type: 'confirm',
		message: inPlace
			? '在当前目录中生成项目？'
			: '目标目录存在。继续吗？',
		name: 'ok'
	}])
	.then(function (answers) {
		if (answers.ok) {
			throw new Error('不能在在当前目录中或者目标目录存在下创建页面！');
		}
	})
} else {
	main();
}

function main() {
	try {
		fse.copySync(template, toPath)
		eConstants(toPath, pageName);
		console.log('创建页面成功：' + toPath);
	} catch (err) {
		console.error(err);
		console.error('创建页面失败：' + toPath)
	}
}

function mkdir(path, fn) {
	mkdirp(path, 0755, function(err){
		if (err) throw err;
		console.log('   \033[36mcreate\033[0m : ' + path);
		fn && fn();
	});
}

function eConstants(toPath, name) {
	var toPath = path.join('./', toPath, 'constants.js');
	var tmp = function(name) {
		return `import yunleKey from 'yunle-key';
const pageName = '${name}';

export default yunleKey({
	TEST_TEMPLSTE: null,
	TEST_REQUESTED_TEMPLSTE: null,
	TEST_SUCCEEDED_TEMPLSTE: null,
	TEST_FAILED_TEMPLSTE: null,
}, pageName);
`;
	}
	var data = tmp(name);
	fs.open(toPath, 'w+', function(err, fd) {
		if(err!==null){
			console.error(err);
			return;
		}
		fs.write(fd, data, 0, function(err, bytes) {
			if(err!==null){
				console.error(err);
				return;
			}
		});
	})
}