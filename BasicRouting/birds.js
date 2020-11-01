// express.Router 사용
// express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있음
const express = require('express');
const router = express.Router();

router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function(req, res){
    res.send('Birds home page');
});
router.get('/about', function(req, res){
    res.send('About birds');
});

module.exports = router;
