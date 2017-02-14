# Git - fatal: Unable to create 'D:/_jobs/_projects/github/learn-react/.git/index.lock': File exists.
今天我在用git提交项目的时候，在git add . 命令还未执行完毕，我就退出了，导致git init 或 git add . 或 git commit -m "提交信息" 都无法使用，都会提示：Git - fatal: Unable to create 'D:/_jobs/_projects/github/learn-react/.git/index.lock': File exists.

### 一、解决办法：
```js
rm -f ./.git/index.lock
```
