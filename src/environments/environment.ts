const api = {
    protocol: 'http',
    ip: '127.0.0.1',
    port: '8000'
};
export const environment = {
    production: true,
    isMockEnabled: true,
    baseUrl: api.protocol + '://' + api.ip + ':' + api.port
};

