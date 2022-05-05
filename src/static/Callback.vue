<template>
   <title>Waiting...</title>
</template>
  <script>
  import Oidc from 'oidc-client'
  export default {
    mounted() {
       const mgr = new Oidc.UserManager({userStore: new Oidc.WebStorageStateStore(), loadUserInfo: true, filterProtocolClaims: true});
      mgr.signinRedirectCallback().then(function () {
        alert("asdf")
      window.location.href = '../protected';
    }).catch(function (err) {
      console.log(err);
    });

  
    },
  }
  </script>
 
