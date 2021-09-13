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
                <template #cell(menu)="{ item: { menu } }">
                    <span>{{ menu }}</span>
                </template>
                <template #cell(folder)="{ item: { folder } }">
                    <span>{{ folder }}</span>
                </template>
                <template #cell(parent)="{ item: { parent } }">
                    <span>{{ parent }}</span>
                </template>
                <template #cell(desc)="{ item: { desc } }">
                    <span>{{ desc }}</span>
                </template>
                <template #cell(icon)="{ item: { icon } }">
                    <v-icon> {{ icon }} </v-icon>
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
                    menu: 'Dashboard',
                    folder: 'Home',
                    parent: 'Room Tracking',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-home-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 2,
                     menu: 'User Management',
                    folder: 'Home',
                    parent: 'Room Tracking',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 3,
                     menu: 'Role Management',
                    folder: 'Admin',
                    parent: 'Administration',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 4,
                     menu: 'Menu Management',
                    folder: 'Admin',
                    parent: 'Administration',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 5,
                     menu: 'Session Management',
                    folder: 'Admin',
                    parent: 'Administration',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 6,
                     menu: 'Variable Parameters',
                    folder: 'Admin',
                    parent: 'Administration',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                },
                {
                    no: 7,
                     menu: 'Log Activity',
                    folder: 'Admin',
                    parent: 'Administration',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-circle-outline',
                    config: 'Insert, Delete, View'
                }, 
                {
                    no: 8,
                     menu: 'Log Out',
                    folder: 'Home',
                    parent: 'Employee',
                    desc: 'Dashboard home',
                    status: 'ACTIVE',
                    icon: 'mdi-logout',
                    config: 'Insert, Delete, View'
                }
            ],
            headers: [
                { text: 'NO', value: 'no', class: 'primary--text custom-header' },
                { text: 'MENU', value: 'menu', class: 'primary--text custom-header' },
                { text: 'FOLDER', value: 'folder', class: 'primary--text custom-header' },
                { text: 'PARENT', value: 'parent', class: 'primary--text custom-header' },
                { text: 'DESCRIPTION', value: 'desc', class: 'primary--text custom-header' },
                { text: 'STATUS', value: 'status', class: 'primary--text custom-header' },
                { text: 'ICON', value: 'icon', class: 'primary--text custom-header' },
                { text: 'CONFIG', value: 'config', class: 'primary--text custom-header' }
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