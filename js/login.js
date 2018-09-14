var DB;
function initDatabase() {
	if (!window.openDatabase) {
		alert ('your browser maybe don\'t support Web SQL.');
	}else {
		var dbName = 'mydb';
		var dbVersion = '1.0';
		var dbDec ='my fans login info';
		var dbSize = 100000;
		DB = openDatabase(dbName, dbVersion, dbDec, dbSize);
	}
}

function createTable() {
	DB.transaction(function(tx){
		tx.executeSql ('create table if not exists USERINFO(USERNAME,PASSWORD,EMIL)');
	});
}
function register() {
	initDatabase();
	createTable();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from USERINFO where USERNAME=?',[username],
			function(tx,rs) {
				if (rs.rows.length>0)
				{
					alert("the username has been used,Please choose another one.");
				}else {
					DB.transaction(function(tx){
						tx.executeSql(
							'inset info USERINFO(USERNAME,PASSWORD,EMALL) values (?,?,?)',
							[username,password,email],
							function(tx,rs) {
								alert('register success');
							},
							function(tx,error) {
								alert("register fail");
							}
						);
					});
				}
			}
		);
	});
}

function login() {
	initDatabase ();
	var username = document.getElementById("login_username").value;
	var password = document.getElementById("login_password").value;
	DB.transaction (function(tx) {
		tx.executeSql (
			'select * from USERINFO where USERNAME	=?	and PASSWORD=?', [username,password],
			function(tx,rs) {
				if (rs.rows.length==0)
				{
					alert("the username hasn't been registered OR the password is wrong.");
				}else {
					var msg = ' ';
					for (var i=0; i<rs.rows.length; i++)
					{
						msg += 'Hello,' +rs.rows.item(i).USERNAME + 'if  you have any suggestion of our web or out GAME, Please leave your message on the BOARD,thx!';
					}
					alert(msg);
				}
			}
		);
	});
}