import express, { Request, Response } from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(cors())

const dbc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'ik1786329',
	database: 'hololivedb'
})


app.listen('3030', () => {
	dbc.connect();
	console.log('Server Started')
})

app.get('/hololive_list', (req: Request, res: Response) => {
	const query: string = 'select * from hololive_list';
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.get('/hololive_company', (req: Request, res: Response) => {
	const query: string = 'select * from hololive_company';
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.get('/hololive_member', (req: Request, res: Response) => {
	const query: string = 'select * from hololive_member';
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.get('/hololive_member_image', (req: Request, res: Response) => {
	const query: string = 'select * from hololive_member_image';
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.get('/select', (req: Request, res: Response) => {
	// NOTE: template literal 사용시 backticks ` (grave accents) 사용. (따옴표 아님 주의)
	//       키보드 esc 아래, ~ (Shift 안 누르고 입력), 1 왼쪽
	// 예제 https://express-gunpladb-wwjww.run.goorm.io/select?id=1
	const query: string = `select * from hololive_list where id = ${req.query.id}`;
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.get('/select_id', (req: Request, res: Response) => {
	const query: string = "select * from hololive_list where id = ?";
	dbc.query(query, [ req.query.id ], (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});
