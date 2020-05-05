<template>
    <div class="user-item">
        <h2>Respondents</h2>

        <condition :condition="condition"
                   :filtered-conditions-revert="filteredConditionsRevert"
                   @add-range="addRange"
                   v-for="(condition, index) in filteredConditions" :key="index" />

        <section class="add-condition-popup" v-show="popupShow">
            <div    v-for="(condition, index) in filteredConditionsRevert"
                    @click="addCondition(condition.id)"
                    :key="index">
                {{ condition.description }}
            </div>
        </section>

        <button @click="popupShow = !popupShow" v-show="filteredConditionsRevert.length">Add condition</button>
    </div>
</template>

<script>
    import Condition from "../../components/Condition";

    export default {
        components: {
            Condition
        },
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
                        ranges: [{ from: 0, to: 0 }]
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
                        'Blocked'
                    ]}
                ]
            }
        },
        methods: {
            addCondition (index) {
                this.conditions[index].show = true;
                this.popupShow = false
            },
            addRange () {
                this.conditions[1].ranges.push({ from: 0, to: 0 })
            }
        },
        computed: {
            filteredConditions () {
                return this.conditions.filter(c => c.show)
            },
            filteredConditionsRevert () {
                return this.conditions.filter(c => !c.show)
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