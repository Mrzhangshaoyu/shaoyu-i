#!/usr/bin/env sh

 set -e

 npm run docs:build

 cd docs/.vitepress/dist

 git init

 git add -A

 git commit -m '自动提交gitee脚本'

 git push -f https://gitee.com/shaoyu-i/test-demo.git master:gh-pages

 cd -
 rm-rf docs/.vitepress/dist
