<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent :id="$route.params.id" />
            </div>

            <div class="col-10">

                <UserPerfilComponent :id="$route.params.id" />
            </div>
        </div>


    </div>
</template>
    
<script>

import UserPerfilComponent from "@/components/TelaUser/PerfilUserComponent.vue"
import PerfilComponent from "@/components/TelaUser/PerfilUserBarraComponent.vue"

export default {
    name: "UserPerfilSobreView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserPerfilComponent

    },
    created() {
        console.log(this.$route.params.id, "ppppppppppppppppppppppppppppppppppppppppppp")
    }

}


</script>
    
<style scoped></style>