import { reactive, computed } from 'vue'

const state = reactive({
    count: 1,
    mobileNavDisplay: false
})

const times2 = computed(() => state.count*2)

const inc = amount => (state.count += amount)

const triggerMobileNav = () => (state.mobileNavDisplay = !state.mobileNavDisplay)

export default { state: state, inc, times2, triggerMobileNav }