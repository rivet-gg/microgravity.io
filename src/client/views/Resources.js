const Vue = require('vue/dist/vue.js');
const resources = require('../../config/resources');

module.exports = Vue.component('resources', {
	props: {
		values: Array,
		hideEmpty: { type: Boolean, default: false }
	},
	methods: {
		resourceData(index) {
			return resources.resources[index];
		}
	},
	computed: {
		adjustedValues() {
			return this.values.map(r => (typeof r === 'number' ? Math.floor(r) : r));
		}
	},
	template: `
        <span class="resources">
            <template v-for="(value, index) in adjustedValues" v-if="!hideEmpty || !!value">
                <div class="resourceIcon" :class="[resourceData(index).icon]"></div><span>{{ value }}</span>
            </template>
        </span>
    `
});
