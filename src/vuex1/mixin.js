import {mapGetters,mapMutations} from 'vuex';

export const content = {
    computed: {
        ...mapGetters(['content'])
    },
    methods:{
        ...mapMutations(['content_add'])
    }
}

export const subActiveName = {
    computed: {
        ...mapGetters(['subActiveName'])
    },
    methods: {
        ...mapMutations(['subActiveName_first','subActiveName_second'])
    }
}

export const navActiveName = {
    computed: {
        ...mapGetters(['navActiveName'])
    },
    methods:{
        ...mapMutations(['navActiveName_set'])
    }
}