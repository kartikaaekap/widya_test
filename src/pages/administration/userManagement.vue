<template>
    <div>
        <h1 class="mx-5 mt-5" style="color: grey">User Management</h1>
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
                <template #cell(full_name)="{ item: { full_name } }">
                    <span>{{ full_name }}</span>
                </template>
                <template #cell(username)="{ item: { username } }">
                    <span>{{ username }}</span>
                </template>
                <template #cell(email)="{ item: { email } }">
                    <span>{{ email }}</span>
                </template>
                <template #cell(mobile)="{ item: { mobile } }">
                    <span>{{ mobile }}</span>
                </template>
                <template #cell(data_created)="{ item: { data_created } }">
                    <span>{{ data_created }}</span>
                </template>
                <template #cell(created_by)="{ item: { created_by } }">
                    <span>{{ created_by }}</span>
                </template>
                <template #cell(last_login)="{ item: { last_login } }">
                    <span>{{ last_login }}</span>
                </template>
                <template #cell(last_active)="{ item: { last_active } }">
                    <span>{{ last_active }}</span>
                </template>
                <template #cell(status)="{ item: { status } }">
                    <span>{{ status }}</span>
                </template>
                <template #cell(group)="{ item: { status } }">
                    <span>{{ status }}</span>
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
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    email: 'hitaprim@gmail.com',
                    mobile: '0812345672',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'ONLINE',
                    group: 'Iwan`s Group'
                },
                {
                    no: 2,
                    full_name: 'Moh. Iwan',
                    username: 'iwanganteng999',
                    email: 'iwanganteng@gmail.com',
                    mobile: '089362736',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'ONLINE',
                    group: 'Iwan`s Group'
                },
                {
                    no: 3,
                    full_name: 'Gisela Ratih',
                    username: 'ratihoyeh',
                    email: 'ratihoyeh@gmail.com',
                    mobile: '083526718',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'BLOCKED',
                    group: 'Iwan`s Group'
                },
                {
                    no: 4,
                    full_name: 'Dave Zain',
                    username: 'davezain',
                    email: 'davezain@gmail.com',
                    mobile: '0856748291',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'ONLINE',
                    group: 'Iwan`s Group'
                },
                {
                    no: 5,
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    email: 'hitaprim@gmail.com',
                    mobile: '0812345672',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'BLOCKED',
                    group: 'Iwan`s Group'
                },
                {
                    no: 6,
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    email: 'hitaprim@gmail.com',
                    mobile: '0812345672',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'ONLINE',
                    group: 'Iwan`s Group'
                },
                {
                    no: 7,
                    full_name: 'Hita Primastuti',
                    username: 'hitaprim',
                    email: 'hitaprim@gmail.com',
                    mobile: '0812345672',
                    data_created: '16-03-2021',
                    created_by: 'iwanadmin',
                    last_login: '10:00AM 16-03-2021',
                    last_active: '10:00AM 16-03-2021',
                    status: 'ONLINE',
                    group: 'Iwan`s Group'
                }
            ],
            headers: [
                { text: 'NO', value: 'no', width: "80px", class: 'primary--text custom-header' },
                { text: 'FULL NAME', value: 'full_name', width: "200px", class: 'primary--text custom-header' },
                { text: 'USERNAME', value: 'username', class: 'primary--text custom-header' },
                { text: 'EMAIL', value: 'email', class: 'primary--text custom-header' },
                { text: 'MOBILE NO.', value: 'mobile', width: "150px", class: 'primary--text custom-header' },
                { text: 'DATA CREATED', value: 'data_created', width: "150px", class: 'primary--text custom-header' },
                { text: 'CREATED BY', value: 'created_by', width: "150px", class: 'primary--text custom-header' },
                { text: 'LAST LOGIN', value: 'last_login', width: "150px", class: 'primary--text custom-header' },
                { text: 'LAST ACTIVE', value: 'last_active', width: "150px", class: 'primary--text custom-header' },
                { text: 'STATUS', value: 'status', width: "100px", class: 'primary--text custom-header' },
                { text: 'GROUP', value: 'group', width: "150px", class: 'primary--text custom-header' },
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