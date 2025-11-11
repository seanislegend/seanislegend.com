import {initBotId} from 'botid/client/core';

initBotId({
    protect: [{method: 'POST', path: '/green-hop-beer'}]
});
