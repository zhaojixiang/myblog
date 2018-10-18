const mutations = {
    content_add: (state)=>{
        state.content++
    },
    subActiveName_first: (state)=>{
        state.subActiveName = 'first'
    },
    subActiveName_second: (state)=>{
        state.subActiveName = 'second'
    },
    navActiveName_set: (state,data)=>{
        state.navActiveName = data
    }
}
export default mutations;