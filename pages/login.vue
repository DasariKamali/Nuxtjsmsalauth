<template>
    <ClientOnly>
      <div>
        <h1>MSAL Authentication in Nuxtjs</h1>
        <button @click="loginUser">Login with Microsoft</button>
      </div>
    </ClientOnly>
  </template>
  
  <script setup>
  const {$login} = useNuxtApp()
  
  const loginUser = async () => {
    clearSiteData()
    const loginResponse = await $login()
    if (loginResponse) navigateTo('/')
  }
  
  function clearSiteData() {
    document.cookie.split(";").forEach((cookie) => {
      const [name, _] = cookie.split("=").map((c) => c.trim())
      document.cookie = `${name}=; expires=Fri, 10 March 2060 00:00:00 UTC; path=/;`
    })
    localStorage.clear()
    sessionStorage.clear()
  }
  </script>
  