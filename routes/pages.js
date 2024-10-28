const express = require("express");
const NewsAPI = require("newsapi");
const MatchDetails = require("../model/match_details");
const Game = require("../model/game");
const Contact = require("../model/contact");
const Result = require("../model/result");
const User = require("../model/user");
const Player = require("../model/player");
const fetchUser = require("../fetchUser");
const ls = require("local-storage");

const router = express.Router();

router.get("/", async (req, res) => {
	const newsapi = new NewsAPI("a2f5c227edef4ba1867c63b12930dc08");
	const news = await newsapi.v2.topHeadlines({
		q: "football",
	});

	const token = ls.get("token");

	if (!token) {
		return res.render("index", {
			login: false,
			isAdmin: false,
			news: news.articles,
		});
	}
	const email = fetchUser(token);
	const user = await User.findOne({ email });

	res.render("index", {
		login: true,
		isAdmin: user.isAdmin,
		news: news.articles,
	});
});

let matches = [];
let userMatches = [];
let result = [];

router.get("/fixture", async (req, res) => {
	matches = await MatchDetails.find({}).sort({ No: 1 });

	result = await Result.find({}).sort({ No: 1 });

	const token = ls.get("token");

	if (token === null) {
		return res.render("fixture", {
			login: false,
			isAdmin: false,
			matches,
			result,
			userM: false,
			userMatches: [],
		});
	}
	const email = fetchUser(token);
	const user = await User.findOne({ email });

	const userTeam = user.team;

	userMatches = await MatchDetails.find({
		$or: [{ team1: { $in: userTeam } }, { team2: { $in: userTeam } }],
	});

	res.render("fixture", {
		login: true,
		isAdmin: user.isAdmin,
		matches,
		result,
		userM: true,
		userMatches,
	});
});

router.get("/Contact", async (req, res) => {
	const token = ls.get("token");
	if (token === null) {
		return res.render("contact", { login: false, isAdmin: false });
	}
	const email = fetchUser(token);
	const user = await User.find({ email });

	res.render("contact", { login: true, isAdmin: user.isAdmin });
});
router.get("/Teams/:id", async (req, res) => {
	const id = req.params.id;
	const token = ls.get("token");
	if (token === null) {
		if (id === "brazil")
			return res.render("brazil", { login: false, isAdmin: false });
		else if (id === "argentina")
			return res.render("argentina", { login: false, isAdmin: false });
		else if (id === "italy")
			return res.render("italy", { login: false, isAdmin: false });
		else if (id === "germany")
			return res.render("germany", { login: false, isAdmin: false });
	}
	const email = fetchUser(token);
	const user = await User.findOne({ email });

	if (id === "brazil")
		res.render("brazil", { login: true, isAdmin: user.isAdmin });
	else if (id === "argentina")
		res.render("argentina", { login: true, isAdmin: user.isAdmin });
	else if (id === "italy")
		res.render("italy", { login: true, isAdmin: user.isAdmin });
	else if (id === "germany")
		res.render("germany", { login: true, isAdmin: user.isAdmin });
});
router.get("/details/:id", async (req, res) => {
	const id = req.params.id;
	const match = await MatchDetails.findOne({
		No: id,
	});
	const token = ls.get("token");
	// / console.log('token ',token)
	if (token === null) {
		return res.render("match_details", {
			login: false,
			isAdmin: false,
			No: match.No,
			date: match.date,
			team1: match.team1,
			team2: match.team2,
			img1: match.img1,
			img2: match.img2,
			team1_prob: match.team1_prob,
			team2_prob: match.team2_prob,
			matches: match.matches,
			team1_win: match.team1_win,
			team2_win: match.team2_win,
			draw: match.draw,
			team1_top: match.team1_top,
			team2_top: match.team2_top,
			team1_history: match.team1_history,
			team2_history: match.team2_history,
			team1_recent: match.team1_recent,
			team2_recent: match.team2_recent,
			team1_player: match.team1_player,
			team2_player: match.team2_player,
		});
	}
	const email = fetchUser(token);
	const user = await User.findOne({ email });
	res.render("match_details", {
		login: true,
		isAdmin: user.isAdmin,
		No: match.No,
		date: match.date,
		team1: match.team1,
		team2: match.team2,
		img1: match.img1,
		img2: match.img2,
		team1_prob: match.team1_prob,
		team2_prob: match.team2_prob,
		matches: match.matches,
		team1_win: match.team1_win,
		team2_win: match.team2_win,
		draw: match.draw,
		team1_top: match.team1_top,
		team2_top: match.team2_top,
		team1_history: match.team1_history,
		team2_history: match.team2_history,
		team1_recent: match.team1_recent,
		team2_recent: match.team2_recent,
		team1_player: match.team1_player,
		team2_player: match.team2_player,
	});
});
router.get("/result/:id", async (req, res) => {
	const id = req.params.id;

	const match = await Result.findOne({
		No: id,
	});
	const token = ls.get("token");
	if (token === null)
		return res.render("result1", {
			login: false,
			isAdmin: false,
			No: match.No,
			date: match.date,
			team1: match.team1,
			team2: match.team2,
			team1_flag: match.team1_flag,
			team2_flag: match.team2_flag,
			team1_score: match.team1_score,
			team2_score: match.team2_score,
			team1_goal: match.team1_goal,
			team2_goal: match.team2_goal,
			team1_short: match.team1_short,
			team2_short: match.team2_short,
			team1_target: match.team1_target,
			team2_target: match.team2_target,
			team1_poss: match.team1_poss,
			team2_poss: match.team2_poss,
			team1_pass: match.team1_pass,
			team2_pass: match.team2_pass,
			team1_acc: match.team1_acc,
			team2_acc: match.team2_acc,
			team1_foul: match.team1_foul,
			team2_foul: match.team2_foul,
			team1_yellow: match.team1_yellow,
			team2_yellow: match.team2_yellow,
			team1_red: match.team1_red,
			team2_red: match.team2_red,
			team1_offside: match.team1_offside,
			team2_offside: match.team2_offside,
			team1_corner: match.team1_corner,
			team2_corner: match.team2_corner,
		});
	const email = fetchUser(token);
	const user = await User.findOne({ email });
	res.render("result1", {
		login: true,
		isAdmin: user.isAdmin,
		No: match.No,
		date: match.date,
		team1: match.team1,
		team2: match.team2,
		team1_flag: match.team1_flag,
		team2_flag: match.team2_flag,
		team1_score: match.team1_score,
		team2_score: match.team2_score,
		team1_goal: match.team1_goal,
		team2_goal: match.team2_goal,
		team1_short: match.team1_short,
		team2_short: match.team2_short,
		team1_target: match.team1_target,
		team2_target: match.team2_target,
		team1_poss: match.team1_poss,
		team2_poss: match.team2_poss,
		team1_pass: match.team1_pass,
		team2_pass: match.team2_pass,
		team1_acc: match.team1_acc,
		team2_acc: match.team2_acc,
		team1_foul: match.team1_foul,
		team2_foul: match.team2_foul,
		team1_yellow: match.team1_yellow,
		team2_yellow: match.team2_yellow,
		team1_red: match.team1_red,
		team2_red: match.team2_red,
		team1_offside: match.team1_offside,
		team2_offside: match.team2_offside,
		team1_corner: match.team1_corner,
		team2_corner: match.team2_corner,
	});
});
router.get("/player/:id", async (req, res) => {
	const id = req.params.id;

	const match = await Player.findOne({
		id: id,
	});
	const token = ls.get("token");
	if (!token) {
		return res.render("player", {
			login: false,
			isAdmin: false,
			id: match.id,
			name: match.name,
			img: match.img,
			fullName: match.fullName,
			born: match.born,
			died: match.died,
			age: match.age,
			country: match.country,
			height: match.height,
			foot: match.foot,
			pos: match.pos,
			number: match.number,
			match: match.match,
			goal: match.goal,
			club: match.goal,
			club: match.club,
			league: match.league,
			leg_match: match.leg_match,
			leg_goal: match.leg_goal,
			photo: match.photo,
			trophyText: match.trophyText,
		});
	}
	const email = fetchUser(token);
	const user = await User.findOne({ email });

	res.render("player", {
		login: true,
		isAdmin: user.isAdmin,
		id: match.id,
		name: match.name,
		img: match.img,
		fullName: match.fullName,
		born: match.born,
		died: match.died,
		age: match.age,
		country: match.country,
		height: match.height,
		foot: match.foot,
		pos: match.pos,
		number: match.number,
		match: match.match,
		goal: match.goal,
		club: match.goal,
		club: match.club,
		league: match.league,
		leg_match: match.leg_match,
		leg_goal: match.leg_goal,
		photo: match.photo,
		trophyText: match.trophyText,
	});
});

router.get("/profile", async (req, res) => {
	const token = ls.get("token");
	if (token === null) return res.json({ msg: "please log in to edit" });
	const email = fetchUser(token);
	const user = await User.findOne({ email });
	const team = user.team.toString();
	res.render("profile", {
		login: true,
		isAdmin: user.isAdmin,
		email: user.email,
		team: team,
	});
});
router.get("/createMatch", async (req, res) => {
	const token = ls.get("token");

	if (token === null) res.json({ msg: "You need to be logged in" });
	const email = fetchUser(token);
	const user = await User.findOne({ email });
	if (user.isAdmin === false) res.json({ msg: "You need to be admin " });
	const match = await MatchDetails.find().sort({ No: "-1" }).limit(1);
	res.render("match", {
		login: false,
		isAdmin: user.isAdmin,
		No: parseInt(match[0].No) + 1,
	});
});

router.get("/putResult/:id", async (req, res) => {
	const id = req.params.id;
	const match = await MatchDetails.find({ No: id });

	res.render("result", {
		isAdmin: true,
		team1: match[0].team1,
		team2: match[0].team2,
		No: id,
		date: match[0].date,
		img1: match[0].img1,
		img2: match[0].img2,
	});
});

router.get("/predict/:id", async (req, res) => {
	const id = req.params.id;
	const token = ls.get("token");

	if (token === null) res.json({ msg: "You need to be logged in" });
	const email = fetchUser(token);
	const user = await Game.findOne({ $and: [{ user: email }, { match: id }] });
	if (user !== null)
		res.json({ msg: "you have already participated in this match" });
	const match = await MatchDetails.findOne({ No: req.params.id });
	res.render("predict", {
		email,
		id,
		isAdmin: false,
		login: true,
		team1: match.team1,
		team2: match.team2,
	});
});

router.get("/userPredictionResult/:id", async (req, res) => {
	const id = req.params.id;
	const token = ls.get("token");
	if (token === null) res.json({ msg: "You need to be logged in" });
	const email = fetchUser(token);
	const game = await Game.findOne({ $and: [{ user: email }, { match: id }] });
	if (game === null)
		return res.json({ msg: "You didn't participated in this game" });
	const result = await Result.findOne({ No: id });
	let matchResult = "",
		matchPoss = "",
		matchShorts = "",
		matchCard = 0,
		matchPassAcc = "";

	if (result.team1_acc < result.team2_acc) matchPassAcc = result.team2;
	else if (result.team1_acc > result.team2_acc) matchPassAcc = result.team1;
	else matchPassAcc = "Draw";

	if (result.team1_score < result.team2_score) matchResult = result.team2;
	else if (result.team1_score > result.team2_score) matchResult = result.team1;
	else matchResult = "Draw";

	if (result.team1_poss < result.team2_poss) matchPoss = result.team2;
	else if (result.team1_poss > result.team2_poss) matchPoss = result.team1;
	else matchPoss = "Draw";

	if (result.team1_short < result.team2_short) matchShorts = result.team2;
	else if (result.team1_short > result.team2_short) matchShorts = result.team1;
	else matchShorts = "Draw";

	matchCard =
		parseInt(result.team1_yellow) +
		parseInt(result.team2_yellow) +
		parseInt(result.team1_red) +
		parseInt(result.team2_red);

	res.render("predictionResult", {
		login: true,
		team1: result.team1,
		team2: result.team2,
		isAdmin: false,
		matchPassAcc,
		team1_goal: result.team1_score,
		team2_goal: result.team2_score,
		matchResult,
		matchPoss,
		matchShorts,
		matchCard: matchCard.toString(),
		userResult: game.win,
		userTeam1Goal: game.team1_goal.toString(),
		userTeam2Goal: game.team2_goal.toString(),
		userPoss: game.position,
		userPass: game.pass_accurecy,
		userShort: game.shorts,
		userCard: game.card,
		No: id,
		userScore: game.score,
		userRank: game.rank,
	});
});

router.post("/success", async (req, res) => {
	let { email, name, topic, details } = req.body;
	await Contact.create({ email, name, topic, details });
	const token = ls.get("token");

	if (token === null)
		return res.render("success", { isAdmin: false, login: false });
	email = fetchUser(token);
	const user = await Game.findOne({ $and: [{ user: email }, { match: id }] });
	res.render("success", { isAdmin: user.isAdmin, login: true });
});

module.exports = router;
