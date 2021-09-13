<template>
    <div>
        <h1 class="mx-5 mt-5" style="color: grey">Role Management</h1>
        <v-card class="mt-5 mx-5 pa-7" elevation="0">
            <!-- data tabel -->
            <v-data-table
                :headers="headers"
                :items="employee"
                :hide-default-footer="true"
                sort-by="tanggal_transaksi"
            >
                <template #cell(no)="{ item: { no } }">
                    <span>{{ no }}</span>
                </template>
                <template #cell(group)="{ item: { status } }">
                    <span>{{ status }}</span>
                </template>
                <template #[`item.aksi`]="row">
                    <v-btn large outlined color="primary" @click="showEdit(row)">Edit</v-btn>
                </template>
                <template #[`item.aksi2`]="row">
                    <v-btn large outlined color="primary" @click="showSetting(row)">Access Setting</v-btn>
                </template>
                <template #[`item.aksi3`]="row">
                    <v-btn large outlined color="error" @click="showDelete(row)">Delete</v-btn>
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
                    group: 'Iwan`s Group'
                },
                {
                    no: 2,
                    group: 'Iwan`s Group'
                },
                {
                    no: 3,
                    group: 'Iwan`s Group'
                },
                {
                    no: 4,
                    group: 'Iwan`s Group'
                },
                {
                    no: 5,
                    group: 'Iwan`s Group'
                },
                {
                    no: 6,
                    group: 'Iwan`s Group'
                },
                {
                    no: 7,
                    group: 'Iwan`s Group'
                }
            ],
            headers: [
                { text: 'NO', value: 'no', width: "80px", class: 'primary--text custom-header' },
                { text: 'GROUP NAME', value: 'group', class: 'primary--text custom-header' },
                { text: 'ACTIONS', value: 'aksi', width: "80px", class: 'primary--text custom-header' },
                { text: '', value: 'aksi2', width: "80px", class: 'primary--text custom-header' },
                { text: '', value: 'aksi3', width: "80px", class: 'primary--text custom-header' },
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