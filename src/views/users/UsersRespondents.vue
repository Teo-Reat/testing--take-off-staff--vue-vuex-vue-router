<template>
    <div class="user-item">
        <h2>Respondents</h2>

        <div v-for="(condition, index) in filteredConditions" :key="index">
            <h3>{{ condition.description }}</h3>
            <select v-show="filteredConditionsRevert.length">
                <option v-for="(conditionOption, indexOption) in conditions"
                        :value="conditionOption.description"
                        :key="indexOption">
                    {{ conditionOption.description }}/{{ conditionOption.id }}
                </option>
            </select>
            <button @click.prevent="condition.show = false">Delete</button>
        </div>

        <section class="add-condition-popup" v-show="popupShow">
            <div    v-for="(condition, index) in filteredConditionsRevert"
                    @click="addCondition(condition.id)"
                    :key="index">
                {{ condition.description }}
            </div>
        </section>

        <button @click="popupShow = !popupShow">Add condition</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                popupShow: false,
                conditions: [
                    {
                        id: 0,
                        show: false,
                        description: 'Name block',
                        name: 'John',
                        lastName: 'Wick'
                    },
                    {
                        id: 1,
                        show: false,
                        description: 'Age block',
                        iterator: 1,
                        ranges: {
                            0: { from: 0, to: 0 }
                        }
                    },
                    {
                        id: 2,
                        show: false,
                        description: 'Type block',
                        types: [
                        'American Express',
                        'Diners Club',
                        'Discover Card',
                        'Master Card',
                        'Visa'
                    ]},
                    {
                        id: 3,
                        show: false,
                        description: 'Status block',
                        status: [
                        'Active',
                        'Disabled'
                    ]}
                ]
            }
        },
        methods: {
            addCondition (index) {
                this.conditions[index].show = true;
                this.popupShow = false
            },
        },
        computed: {
            filteredConditions () {
                return this.conditions.filter(c => c.show)
            },
            filteredConditionsRevert () {
                return this.conditions.filter(c => !c.show)
            },
            changeCondition () {
                // this.
            }
        }
    }
</script>

<style>
    .user-item {
        position: relative;
    }
    .add-condition-popup {
        position: absolute;
        z-index: 5;
        right: 0;
        bottom: 0;
        padding: 10px 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        background: white;
        cursor: pointer;
    }
</style>