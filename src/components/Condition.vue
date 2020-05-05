<template>
    <div>
        <h3>{{ condition.description }}</h3>
        <select v-show="filteredConditionsRevert.length">
            <option v-for="(conditionOption, indexOption) in filteredConditionsRevert"
                    :value="conditionOption.description"
                    :key="indexOption">
                {{ conditionOption.description }}/{{ conditionOption.id }}
            </option>
        </select>
        <div class="content">
            <div class="name-block" v-if="condition.description === 'Name block'">
                <label>
                    <input type="text" name="name" placeholder="Name">
                </label>
                <label>
                    <input type="text" name="last-name" placeholder="Last Name">
                </label>
            </div>
            <div class="age-block" v-if="condition.description === 'Age block'">
                <button @click.prevent="addRangeEmit">Add range</button>
                <div class="ranges" v-for="(range, index) in condition.ranges">
                    <label>
                        <input type="number" :name="'range-from-' + index" placeholder="from">
                    </label>
                    <label>
                        <input type="number" :name="'range-to-' + index" placeholder="to">
                    </label>
                </div>
            </div>
            <div class="type-block" v-if="condition.description === 'Type block'">
                <select name="card-type">
                    <option v-for="(type, index) in condition.types" :value="type">{{ type }}</option>
                </select>
            </div>
            <div class="status-block" v-if="condition.description === 'Status block'">
                <select name="card-status">
                    <option v-for="(state, index) in condition.status" value="state">{{ state }}</option>
                </select>
            </div>
        </div>
        <button @click.prevent="condition.show = false">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "Condition",
        props: {
            condition: {
                type: Object,
                required: true
            },
            filteredConditionsRevert: {
                type: Array,
                required: true
            },
        },
        data () {
            return {
                test: ''
            }
        },
        methods: {
            addRangeEmit () {
                this.$emit('add-range')
            }
        }
    }
</script>

<style scoped>

</style>