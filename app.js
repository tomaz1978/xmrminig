const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '4AGbxpJrAzLQkE9ieAWpNAQwqi37eQeFPXBbjhA1Q9P6hpH3GLe67mMjWhanHH8QPwVB9UEFBhv6nfUfJVoDMYzGTDNiRqY',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner
