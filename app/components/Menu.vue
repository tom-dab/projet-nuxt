<script setup lang="ts">
const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
    <nav class="menu">
        <NuxtLink 
            :to="route.path"
            :id="`${i}-link`"
            class="menu__link"
            v-for="(route, i) in routes"
            :key="i"
            >{{ route.name }}</NuxtLink
        >
    </nav>
</template>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .menu__link {
        text-decoration: none;
        color: black;
        font-weight: medium;
        font-size: 1.5rem;
    }

}
</style>