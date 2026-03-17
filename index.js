const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

const comandos = require('./comandos');

const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const comandos = require('./comandos');

const CLIENT_ID = 'CLI1483337697526419527';
const GUILD_ID = 'GUILD_ID1381967839094636624';

const rest = new REST({ version: '9' }).setToken('SEU_TOKEN');

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(CLI1483337697526419527, GUILD_ID1381967839094636624), {
            body: [comandos.data.toJSON()],
        });
        console.log('Comandos registrados com sucesso!');
    } catch (error) {
        console.error(error);
    }
})();

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = interaction.commandName;

    if (command === 'teste') {
        await comandos.execute(interaction);
    }
});

client.login('MTQ4MzMzNzY5NzUyNjQxOTUyNw.GKfHH4.dYtNm9GXyy5DAMCb6ENf92MaeD0Ufsq6QKbDaU');

client.login(process.env.TOKEN);
