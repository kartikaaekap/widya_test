<template>
    <div>
        <h1 class="mx-5 mt-5" style="color: grey">Variable Parameters</h1>
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
                <template #cell(id)="{ item: { id } }">
                    <span>{{ id }}</span>
                </template>
                <template #cell(desc)="{ item: { desc } }">
                    <span>{{ desc }}</span>
                </template>
                <template #cell(param)="{ item: { param } }">
                    <span>{{ param }}</span>
                </template>
                <template #[`item.aksi`]="row">
                    <v-btn outlined color="primary" @click="showEdit(row)">
                        <v-icon @click="showEdit(row)"> mdi-square-edit-outline </v-icon>
                    </v-btn>
                </template>
                <template #[`item.aksi2`]="row">
                    <v-btn outlined color="error" @click="showSetting(row)">
                        <v-icon @click="showDelete(row)"> mdi-trash-can-outline </v-icon>
                    </v-btn>
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
            employee: [
                {
                    no: 1,
                    id: 'ABCDEFG123456',
                    desc: 'Hita Primastuti',
                    tab: 'hitaprim',
                    param: 'hitaprim@gmail.com'
                },
                {
                    no: 2,
                    id: 'ABCDEFG123456',
                    desc: 'Moh. Iwan',
                    tab: 'iwanganteng999',
                    param: 'iwanganteng@gmail.com',
                },
                {
                    no: 3,
                    id: 'ABCDEFG123456',
                    desc: 'Gisela Ratih',
                    tab: 'ratihoyeh',
                    param: 'ratihoyeh@gmail.com',
                },
                {
                    no: 4,
                    id: 'ABCDEFG123456',
                    desc: 'Dave Zain',
                    tab: 'davezain',
                    param: 'davezain@gmail.com',
                },
                {
                    no: 5,
                    id: 'ABCDEFG123456',
                    desc: 'Hita Primastuti',
                    tab: 'hitaprim',
                    param: 'hitaprim@gmail.com',
                },
                {
                    no: 6,
                    id: 'ABCDEFG123456',
                    desc: 'Hita Primastuti',
                    tab: 'hitaprim',
                    param: 'hitaprim@gmail.com',
                },
                {
                    no: 7,
                    id: 'ABCDEFG123456',
                    desc: 'Hita Primastuti',
                    tab: 'hitaprim',
                    param: 'hitaprim@gmail.com',
                }
            ],
            headers: [
                { text: 'NO', value: 'no', class: 'primary--text custom-header' },
                { text: 'PARAMETER ID', value: 'id', class: 'primary--text custom-header' },
                { text: 'DESCRIPTION', value: 'desc', class: 'primary--text custom-header' },
                { text: 'TABS', value: 'tab', class: 'primary--text custom-header' },
                { text: 'PARAMETERS', value: 'param', class: 'primary--text custom-header' },
                { text: 'ACTIONS', value: 'aksi', width: "40px", class: 'primary--text custom-header' },
                { text: '', value: 'aksi2', width: "40px", class: 'primary--text custom-header' },
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