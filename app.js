var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection : {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "SwitchyBot",
		password: "PASSWORDHERE"
	},
	channels: ["switchy24"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
	client.say("switchy24", "Connected, who should I kill first?");
});

client.on('chat', function(channel, user, message, self) {
	if(message === "!twitter") {
	client.say("switchy24", "http://twitter.com/switchytm");
	}

	if(message === "!youtube") {
	client.say("switchy24", "http://youtube.com/switchytm");
	}

	if(message === "!trade") {
	client.say("switchy24", "https://steamcommunity.com/tradeoffer/new/?partner=89045261&token=T2qPBMN9");
	}

	if(message === "!steam") {
	client.say("switchy24", "http://steamcommunity.com/id/switchy24");
	}

	if(message === "!sensitivity") {
	client.say("switchy24", "Sensitivity is 2.0 @ 400DPI");
	}

	if(user["display-name"] === "switchy24") {
		if(message == "!ByeBot") {
		client.say("switchy24", "I'm sorry, master. Goodbye. FeelsBadMan");
		client.part("switchy24");
		} else {
			client.say("switchy24", "I don't obey you.");
		}
	} 
});