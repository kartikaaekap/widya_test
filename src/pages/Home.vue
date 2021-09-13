<template>
    <div>
        <v-card class="mt-3 mx-3 pa-7 rounded-lg" elevation="2">
            <h3 class="mb-7">Stress Level Report</h3>
                <line-chart :data="[{name: 'Male', data: computedMale}, {name: 'Female', data: computedFemale}]" 
                    :colors="['#7A54FF', '#FF9F78']">
                </line-chart>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'Home',
    async mounted() {
        await this.$store.dispatch("getDataStressLevel");
        // await this.$store.dispatch("getDataEmployee")
    },
    // components: {Sidebar},
    data() {
        return {
            dataChart: [
                {name: 'Male', data: {'01:00': 30, '03:00': 40}},
                {name: 'Female', data: {'02:00': 50, '05:00': 30}}
            ]
        }
    },

    computed: {
        stressLevel() {
            return this.$store.state.stressLevel
        },
        employeeData() {
            return this.$store.state.employeeData
        },
        computedMale() {
            let level_stress = {}
            for (const itm in this.stressLevel) {
                if (this.stressLevel[itm].gender == 'male') {
                    const levelStress = this.stressLevel[itm].stress;
                    levelStress.forEach((item) => {
                        const key = item.time
                        level_stress[key] = parseInt(item.stresslevel.replace('bpm', ''))
                    })
                }
            }
            return level_stress
        },
        computedFemale() {
            let level_stress_female = {}
            for (const itm in this.stressLevel) {
                if (this.stressLevel[itm].gender == 'female') {
                    const levelStressFemale = this.stressLevel[itm].stress;
                    levelStressFemale.forEach((item) => { 
                        const key = item.time
                        level_stress_female[key] = parseInt(item.stresslevel.replace('bpm', ''))
                    })
                }
            }
            return level_stress_female
        }
    }
}
</script>