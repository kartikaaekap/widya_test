<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        color="white"
        app
        permanent
        light
    >
      <v-list>
        <v-list-item @click.stop="mini = !mini">
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-2"
              >Dashboard</v-list-item-title
            >
          </v-list-item>

          <v-list-group :value="false" prepend-icon="mdi-file-table-outline">
            <template #activator>
              <v-list-item-title class="text-body-2">Administration</v-list-item-title>
            </template>
            <v-list-item
              v-for="listAdmin in submenuAdministration"
              :key="listAdmin.title"
              :to="listAdmin.page"
              link
            >
            <v-list-item-icon>
              <v-icon x-small>mdi-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-body-2 pl-14">{{
                listAdmin.title
              }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item to="/bendahara/pengaturan">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-2"
              >Log Out</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-spacer></v-spacer>
      <v-menu bottom min-width="200px" rounded offset-y>
        <template #activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-icon large :color="primary"> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-btn depressed rounded text to="/signout"> Keluar </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        colorTheme: '#388E3C',
        selectedItem: 1,
        submenuAdministration: [
            { title: 'User Management', page: '/userManagement' },
            { title: 'Role Management', page: '/roleManagement' },
            { title: 'Menu Management', page: '/menuManagement' },
            { title: 'Session Management', page: '/sessionManagement' },
            { title: 'Variable Parameters', page: '/variableParameters' },
            { title: 'Log Activity', page: '/logActivity' },
        ],
        mini: true,
        defaultItem: {
        nama_pengguna: '',
        email: '',
        role_id: '',
        password: '',
        },
    }),
}
</script>