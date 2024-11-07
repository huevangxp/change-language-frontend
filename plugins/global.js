import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
    Vue.__my_mixin__ = true
    Vue.mixin({
        computed: {
            translationObj() {
                return this.$store.state.translationObj;
            }
        },
        methods: {
            t(code) {
                if (this.translationObj.length === 0) return code;
                const findMatchCode = this.translationObj.find(el => el.code === code)
                return findMatchCode.string
            }
        }
    }) // Set up your mixin then
}