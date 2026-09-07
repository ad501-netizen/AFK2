// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1482561184644337794",
        serverId: "1294079344401977394",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 100000, // ساعه
            maxRetries: 5000,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: true,
    },

    {
        channelId: "1078359015123329075",
        serverId: "946105715506958346",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: false,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: false,
    },
            
    {
        channelId: "1078359015123329075",
        serverId: "946105715506958346",
        token: process.env.token3,
        selfDeaf: false,
        autoReconnect: {
            enabled: false,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: false,
   }, 
       {
        channelId: "1078359015123329075",
        serverId: "946105715506958346",
        token: process.env.token4,
        selfDeaf: false,
        autoReconnect: {
            enabled: false,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: false,
    },
        {
        channelId: "1078359015123329075",
        serverId: "946105715506958346",
        token: process.env.token5,
        selfDeaf: false,
        autoReconnect: {
            enabled: false,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: false,
    },
        {
        channelId: "1482561184644337794",
        serverId: "1294079344401977394",
        token: process.env.token6,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 10000, // ساعه
            maxRetries: 5000,
        },
        presence: {
            status: "Invisible",
        },
        selfMute: true,
    },
    

];
