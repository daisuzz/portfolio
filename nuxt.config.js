export default {
    buildModules: [
        ['@nuxtjs/vuetify']
    ],
    vuetify: {
        defaultAssets: {
            font: false,
        }
    },
    target: 'static',
    generate: {
        dir: 'docs'
    },
    head: {
        title: 'daisuzz.dev',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'This page is the daisuzz\'s portfolio.'
            }
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },
}
