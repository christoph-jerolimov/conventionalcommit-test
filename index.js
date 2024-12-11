import { CommitParser } from 'conventional-commits-parser';

const titles = [
  'fix: pr-1',
  '[release-1.0] fix: pr-2',
  '[unknown-tag] fix: pr-3',
  '[WIP] fix: pr-4',
];

/** @type {import('conventional-commits-parser').ParserOptions} */
const options = {
  headerPattern: /^(?:\[release-\d+.\d+\] )?(\w*)(?:\(([\w$.\-* ]*)\))?: (.*)$/,
}

titles.forEach((title) => {
  console.log('title:', title);
  console.log(new CommitParser(options).parse(title));
  console.log();
});
