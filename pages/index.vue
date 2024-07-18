<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <h1>Welcome, {{profile.displayName}}!</h1>
    <p>{{profile.mail}}</p>
    <p>{{profile.jobTitle}}</p>
    <p v-if="profile.mobilePhone">Phone: {{profile.mobilePhone}}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
const {$profileInfo, $profileImg, $logout} = useNuxtApp()
const profile = ref()
const profileImg = ref()
const loading = ref(true)

const logout = async () => {
  await $logout()
}

onMounted(async () => {
  loading.value = true
  const profileInfo = await $profileInfo()
  profile.value = profileInfo
  const {data, error} = await $profileImg()
  if (data) {
    profileImg.value = data
  }
  loading.value = false
})
</script>
