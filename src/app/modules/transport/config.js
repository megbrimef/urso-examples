class ModulesTransportConfig {

    getConfig() {
        return {
                autoReconnect: true,
                reconnectTimeout: 5000,
                type: 'xhr',
                host: false
            }
        }
}

module.exports = ModulesTransportConfig;
