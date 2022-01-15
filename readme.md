
#NFT Event Bot
A Discord bot that sends a message when a new event occurs on a specific NFT collection.


#Installation
1. Clone this repository
2. Install dependencies: npm install


#Usage
1. Create a new Discord bot: https://discord.com/developers/applications
2. Copy the bot token.
3. Replace the YOUR_BOT_TOKEN placeholder in index.js with your bot token.
4. Replace the nftAddress and nftAbi constants in index.js with the address and ABI of your NFT collection contract.
5. Replace the Infura websocket provider URL with your own Infura project ID.
6. Start the bot: npm start
7. In a Discord server, send the command !listen in the channel where you want to receive NFT event notifications.
8. The bot will now listen for new transfer events on the specified NFT collection and send a message to the channel whenever a new transfer event is detected.


#License
This project is licensed under the MIT License - see the LICENSE file for details.