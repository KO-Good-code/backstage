export const url = process.env.NODE_ENV == 'production' ? '/console/' : 'http://127.0.0.1:3000/console/'
export const baseUrl = process.env.NODE_ENV == 'production' ? '/api/' : 'http://127.0.0.1:3000/api/'
export const deployUrl = process.env.NODE_ENV == 'production' ? '/deploy/' : 'http://127.0.0.1:3000/deploy/'
export const fundUrl = process.env.NODE_ENV == 'production' ? '/fund/' : 'http://127.0.0.1:3000/fund/'