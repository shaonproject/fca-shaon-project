'use strict';

const logger = require("../logger");
module.exports = function() {
    var Logger = global.Fca.Require.logger;
    switch (process.platform) {
        case 'win32': {
            if (global.Fca.Require.FastConfig.Uptime) {
                logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
            }
            break;
        }
        case 'darwin': {
            if (global.Fca.Require.FastConfig.Uptime) {
                logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
            }
            break;
        }
        case 'linux':
            if (process.env.REPL_SLUG) {
                var Value = global.Fca.Require.FastConfig;
                var Fetch = global.Fca.Require.Fetch;
                    if (Value.Uptime) {
                        logger.Normal(global.Fca.Require.Language.ExtraUpTime.Uptime);//
                        return setInterval(function() {
                            Fetch.get(`https://ed31b95b-5e61-41f9-acd4-572c5b459874-00-3v3vnijhdlm8h.teams.replit.dev`);
                        },10*1000);
                    }
                else return;
            }
            else { 
                Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
            }  
            break;
        default:
        Logger.Warning(global.Fca.Require.Language.ExtraUpTime.NotSupport);
    }
};
