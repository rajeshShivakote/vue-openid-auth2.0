<template>
    <div>
        Protected
    </div>
</template>

<script>
import Mgr from "../services/securityService";
export default {
    data() {
        return{
            mgr: new Mgr()
        }
    },
    mounted(){
        this.mgr.getSignedIn();
    }
}
</script>