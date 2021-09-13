<template>
  <v-container class="py-4">
    <v-flex>
      <v-row class="mt-4">
        <v-col>
          <h2>Admins</h2>
          <!-- NEW 
                    <v-row>
                        <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>
         <v-tab v-for="(admin, index) in admins" :key="admin"
            :class="{active: current === index}"
            @click="this.current = index">
        {{admin.name}}
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" v-for="admin in admins" :key="admin">
      <v-tab-item
      >
        <v-card flat>
      <div v-if="current === 0">
          <v-card-text>{{ admin.name }}</v-card-text>
      </div>
            <div v-if="current === 1">
          <v-card-text>{{ admin.name }}</v-card-text>
      </div>
            <div v-if="current === 2">
          <v-card-text>{{ admin.name }}</v-card-text>
      </div>
            <div v-if="current === 3">
          <v-card-text>{{ admin.name }}</v-card-text>
      </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
                    </v-row>-->
          <v-row class="ma-4">
            <v-spacer></v-spacer>
            <v-btn target="_blank" plain>
              <span class="blue--text"
                >New Admin <v-icon class="fa fa-plus"></v-icon
              ></span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>
      <v-row justify="center">
        <v-alert>
          <h3 class="red--text">{{ message }}</h3>
        </v-alert>
      </v-row>
      <v-row class="mx-4 pa-3" >
        <v-card flat max-height="auto" >
          <v-card-title>
            <v-btn
              elevation="0"
              id="btn-4"
              @click="change()"
              plain
              color="blue"
              target="_blank"
            >
              <span>Club Admins </span>
            </v-btn>
          </v-card-title>
          
          <div v-for="admin in club_president" :key="admin">
            <v-row>
              <v-col
                ><h5 class="mx-2 my-4">{{ admin.username }}</h5></v-col
              >
              <v-col>
                <h5 class="mx-2 my-4">{{ admin.email }}</h5></v-col
              >
              <v-btn flat class="mx-2 my-4"
                ><v-icon class="fa fa-envelope"></v-icon
              ></v-btn>
              <v-btn class="mx-2 my-4" absolute @click="deleteAdmin(admin._id)"
                ><v-icon class="fa fa-user-slash"></v-icon
              ></v-btn>
               </v-row>
              </div>
           
            <v-spacer></v-spacer>
        </v-card>
      </v-row>

            <v-row class="mx-4 pa-3">
        <v-card flat>
          <v-card-title>
            <v-btn
              elevation="0"
              id="btn-4"
              @click="change()"
              plain
              color="blue"
              target="_blank"
            >
              <span>Events Admin </span>
            </v-btn>
          </v-card-title>
          <v-row>
          <div v-for="admin in info_admin" :key="admin">
            <v-row>
              <v-col
                ><h5 class="mx-2 my-4">{{ admin.username }}</h5></v-col
              >
              <v-col>
                <h5 class="mx-2 my-4">{{ admin.email }}</h5></v-col
              >
              <v-btn flat class="mx-2 my-4"
                ><v-icon class="fa fa-envelope"></v-icon
              ></v-btn>
              <v-btn class="mx-2 my-4" @click="deleteAdmin(admin._id)"
                ><v-icon class="fa fa-user-slash"></v-icon
              ></v-btn>
              </v-row>
              </div>
            </v-row>
            <v-spacer></v-spacer>
        </v-card>
      </v-row>
            <v-row class="mx-4 pa-3">
        <v-card flat>
          <v-card-title>
            <v-btn
              elevation="0"
              id="btn-4"
              plain
              color="blue"
              target="_blank"
            >
              <span>Material Admin </span>
            </v-btn>
          </v-card-title>
          
          <div v-for="admin in material_admin" :key="admin">
            <v-row>
              <v-col
                ><h5 class="mx-2 my-4">{{ admin.username }}</h5></v-col
              >
              <v-col>
                <h5 class="mx-2 my-4">{{ admin.email }}</h5></v-col
              >
              <v-btn flat class="mx-2 my-4"
                ><v-icon class="fa fa-envelope"></v-icon
              ></v-btn>
              <v-btn class="mx-2 my-4" @click="deleteAdmin(admin._id)"
                ><v-icon class="fa fa-user-slash"></v-icon
              ></v-btn>
                 </v-row>
              </div>
         
            <v-spacer></v-spacer>
        </v-card>
      </v-row>
            <v-row class="mx-4 pa-3">
        <v-card flat>
          <v-card-title>
            <v-btn
              elevation="0"
              id="btn-4"
              @click="change()"
              plain
              color="blue"
              target="_blank"
            >
              <span>Forum admin </span>
            </v-btn>
          </v-card-title>
          <v-row >
          <div v-for="admin in forum_admin" :key="admin" >
            <v-row>
              <v-col 
                ><h5 class="mx-2 my-4">{{ admin.username }}</h5></v-col
              >
              <v-col>
                <h5 class="mx-2 my-4">{{ admin.email }}</h5></v-col
              >
              <v-btn flat class="mx-2 my-4"
                ><v-icon class="fa fa-envelope"></v-icon
              ></v-btn>
              <v-btn class="mx-2 my-4" @click="deleteAdmin(admin._id)"
                ><v-icon class="fa fa-user-slash" color="red accent-4"></v-icon
              ></v-btn>
              </v-row>
              <v-divider></v-divider>
              </div>
            </v-row>
            <v-spacer></v-spacer>
        </v-card>
      </v-row>
    </v-flex>
    <super_admin />
  </v-container>
</template>
<script>
import super_admin from "./superadmin2.vue";
//import HelloWorld from './HelloWorld.vue'
const url = "http://localhost:8888/api/getAllAdmins";
const URL = "http://localhost:8888/api/";

import axios from "axios";
export default {
  components: {
    //       HelloWorld,
  },
  data() {
    return {
      current: 0,
      tab: null,
      message: "",
      admins: [
        {
          tab: 1,
          name: "Mr XXX YYY",
          email: "dummy@email.com",
          phone: "*******",
        },
        {
          tab: 1,
          name: "Mr XXX YYY",
          email: "dummy@email.com",
          phone: "*******",
        },
        {
          tab: 1,
          name: "Mr XXX YYY",
          email: "dummy@email.com",
          phone: "*******",
        },
        {
          tab: 1,
          name: "Mr XXX YYY",
          email: "dummy@email.com",
          phone: "*******",
        },
      ],
      forum_admin: "",
      info_admin: "",
      material_admin: "",
      club_president: "",
      response: "",
      mA: false,
      fa: false,
      cp: false,
      ia: false,
    };
  },
  mounted() {
    if (localStorage.getItem("tok") == null) {
      this.message = "you are not logged in. ";
    } else {
      return axios
        .get(`${url}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("tok")}`,
          },
        })
        .then((res) => {
          this.response = res;
          this.material_admin = res.data.data.material_admin;
          this.info_admin = res.data.data.info_admin;
          this.forum_admin = res.data.data.forum_admin;
          this.club_president = res.data.data.club_president;
        })
        .catch((err) => {
          this.response = err;
        });
    }
  },
  methods: {
      deleteAdmin(id){
          
      return axios
        .get(`${URL}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("tok")}`,
          },
        })
        .then((res) => {
          this.response = res;
          this.material_admin = res.data.data.material_admin;
          this.info_admin = res.data.data.info_admin;
          this.forum_admin = res.data.data.forum_admin;
          this.club_president = res.data.data.club_president;
        })
        .catch((err) => {
          this.response = err;
        });
      },
    run() {
      //  $router.push.login
    },
    change(e) {
      if (e.target.id === "btn-1") {
        this.fa = true;
      } else if (e.target.id === "btn-2") {
        this.mA = true;
      } else if (e.target.id === "btn-3") {
        this.ia = true;
      } else if (e.target.id === "btn-4") {
        this.cp = true;
      }
    },
  },
};
</script>
