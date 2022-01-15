const Discord = require('discord.js');
const Web3 = require('web3');
const nftAddress = '0x...'; // Replace with the address of the NFT collection contract
const nftAbi = []; // Replace with the ABI of the NFT collection contract
const botToken = 'YOUR_BOT_TOKEN'; // Replace with your Discord bot token

const client = new Discord.Client();
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID')); // Replace with your Infura project ID

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!listen') {
    const contract = new web3.eth.Contract(nftAbi, nftAddress);
    contract.events.Transfer()
      .on('data', event => {
        const embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('New NFT Transfer')
          .setDescription(`An NFT has been transferred from ${event.returnValues.from} to ${event.returnValues.to}.`)
          .setThumbnail('https://i.imgur.com/wSTFkRM.png')
          .setTimestamp();
        msg.channel.send(embed);
      })
      .on('error', console.error);
  }
});

client.login(botToken);
