<template>
    <div>
        <h1 class="mx-5 mt-5" style="color: grey">Session Management</h1>
        <v-card class="mt-5 mx-5 pa-7" elevation="0">
            <!-- data tabel -->
            <v-data-table
                :headers="headers"
                :items="employee"
                :hide-default-footer="true"
            >
                <template #cell(no)="{ item: { no } }">
                    <span>{{ no }}</span>
                </template>
                <template #cell(nik)="{ item: { nik } }">
                    <span>{{ nik }}</span>
                </template>
                <template #cell(full_name)="{ item: { full_name } }">
                    <span>{{ full_name }}</span>
                </template>
                <template #cell(username)="{ item: { username } }">
                    <span>{{ username }}</span>
                </template>
                <!-- <template #cell(login)="{ item: { login } }">
                    <v-switch
                        :v-model="login === true ? switchon : !switchon"
                        inset
                        color="primary"
                    ></v-switch>
                </template> -->
                <template #[`item.login`]>
                    <v-switch
                        v-model="switchon"
                        inset
                        color="primary"
                    ></v-switch>
                </template>
                <template v-slot:top="{ pagination, options, updateOptions }">
                    <v-data-footer 
                    :pagination="pagination" 
                    :options="options"
                    @update:options="updateOptions"
                    items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            switchon: true,
            employee: [
                {
                    no: 1,
                    nik: '3409875647383',
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    login: true,
                },
                {
                    no: 2,
                    nik: '3409875647383',
                    full_name: 'Moh. Iwan',
                    username: 'iwanganteng999',
                    login: true,
                },
                {
                    no: 3,
                    nik: '3409875647383',
                    full_name: 'Gisela Ratih',
                    username: 'ratihoyeh',
                    login: false,
                },
                {
                    no: 4,
                    nik: '3409875647383',
                    full_name: 'Dave Zain',
                    username: 'davezain',
                    login: true,
                },
                {
                    no: 5,
                    nik: '3409875647383',
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    login: false,
                },
                {
                    no: 6,
                    nik: '3409875647383',
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    login: false,
                },
                {
                    no: 7,
                    nik: '3409875647383',
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    login: false,
                }
            ],
            headers: [
                { text: 'NO', value: 'no', class: 'primary--text custom-header' },
                { text: 'NIK', value: 'nik', class: 'primary--text custom-header' },
                { text: 'FULL NAME', value: 'full_name', class: 'primary--text custom-header' },
                { text: 'USERNAME', value: 'username', class: 'primary--text custom-header' },
                { text: 'LOGIN', value: 'login', class: 'primary--text custom-header' }
            ],
        }
    },
}
</script>

<style lang="css">
.custom-header {
    background-color: #F4F7FF;
}
</style>