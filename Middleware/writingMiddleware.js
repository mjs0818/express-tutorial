const express = require('express');
const router = express.Router();

// 모든 요청에 대해 LOGGED가 콘솔에 찍히는 미들웨어함수 작성
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};
// 모든 요청에 대해 현재 url을 출력하는 미들웨어함수
const currentUrl = function (req, res, next) {
    console.log(`http request method is GET, url is ${req.path}`);
    next();
}

// 모든 요청에 대해 미들웨어 함수를 사용하기 위해서 use()메소드 사용
router.use(myLogger);
router.use(currentUrl);
router.get('/', (req, res) => {
    res.send('Middleware test')
});
router.get('/url1', (req, res) => {
    res.send('url1 페이지');
});
router.get('/url2', (req, res) => {
    res.send('url2 페이지')
});
module.exports = router;