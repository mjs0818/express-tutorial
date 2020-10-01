const express = require('express');
const app = express();
const port = 3000;

// 라우팅
// 라우팅은 애플리케이션 앤드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.post('/', (req, res) => {
    res.send('Got a Post request');
})

app.put('/user', (req, res) => {
    res.send('Got a Put request at /user');
})

app.delete('/user', (req, res) => {
    res.send('Got a Delete request at /user');
})

// 라우트 메소드
// Express는 HTTP 메소드에 해당하는 라우팅 메소드를 지원함. ex) get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search 및 connect

// 특수한 라우팅 메소드 all()
// all()메소드는 HTTP 메소드에서 파생된 것은 아님. 이 메소드는 모든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는데 사용
app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section...');
    next();
})

/* 
라우트 경로는 요청 메소드와의 조합을 통해 요청이 이루어질 수 있는 엔드포인트를 정의함
라우트 경로는 문자열, 문자열 패턴 또는 정규식일 수 있음
*/


// 문자열 기반
// 요청을 루트 라우트 /에 일치 시킴
app.get('/', (req, res) => {
    res.send('root');
})
// 요청을 /about 라우트 경로에 일치 시킴
app.get('/about', (req, res) => {
    res.send('about');
})
// 요청을 /random.txt 라우트 경로에 일치 시킴
app.get('/random.txt', (req, res) => {
    res.send('random.txt');
})

// 문자열 패턴 기반
// 요청을 /abcd, /abbcd, /abbbcd 등의 라우트 경로에 일치 시킴
app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});
// 요청을 /abcd, /abxcd, /abRABDOMcd, /ab123cd 등의 라우트 경로에 일치 시킴
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
})
// 요청을 /abe, /abcde의 라우트 경로에 일치 시킴
app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
})

// 정규식 기반
// 요청을 'a'가 포함된 모든 라우트 경로에 일치 시킴
// app.get(/a/, function(req, res) {
//     res.send('/a/');
// });
// 요청을 flys로 끝나는 라우트 경로에 일치 시킴
app.get(/.*flys/, (req, res) => {
    res.send('*flys');
});

// 라우트 핸들러
// 라우트 핸들러는 콜백함수를 사용하여 요청을 처리할 수 있음. 함수 또는 함수 배열 형태로 사용할 수 있음
// 하나의 콜백함수는 하나의 라우트를 처리할 수 있음
app.get('/example/a', (req, res) => {
    res.send('Hello from A!');
});
// 2개 이상의 콜백함수는 하나의 라우터를 처리할 수 있음. 이 경우 next오브젝트를 반드시 지정해야함
app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
}, (req, res) => {
    res.send('Hello from B!');
});
// 하나의 콜백함수 배열은 하나의 라우트를 처리할 수 있음
let cb0 = (req, res, next) => {
    console.log('callback0');
    next();
}
let cb1 = (req, res, next) => {
    console.log('callback1');
    next();
}
let cb2 = (req, res) => {
    res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

// 독립접인 함수와 함수 배열을 조합하여 하나의 라우트를 처리할 수 있음
app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
  }, function (req, res) {
    res.send('Hello from D!');
  });

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})