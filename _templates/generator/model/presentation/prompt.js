const fs = require('fs');
const path = require('path');
const targetDirectory = './src/components/model';
function getDomains(basePath) {
  return fs.readdirSync(basePath).filter((file) => {
    const filePath = path.join(basePath, file);
    return fs.statSync(filePath).isDirectory();
  });
}

const domains = getDomains(targetDirectory);
if (domains.length === 0) {
  console.log('No domains found in the model directory');
  process.exit(1);
}
module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'component name',
        },
        {
          type: 'select',
          name: 'domains',
          message: 'domains',
          choices: domains,
        },
        {
          type: 'confirm',
          name: 'need_loading',
          message: 'need loading',
          choices: ['Yes', 'No'],
          initial: 'Yes',
        },
      ])
      .then(({ name, domains, need_loading }) => {
        const contentToAdd = `\nexport * from './${name}';\n`;
        const path = `./src/components/model/${domains}/components/index.ts`;
        fs.appendFile(path, contentToAdd, 'utf8', (err) => {
          if (err) {
            console.error('ファイルの書き込みに失敗しました:', err);
          } else {
            console.log('ファイルにテキストを追加しました。');
          }
        });
        return { name, domains, need_loading };
      });
  },
};
