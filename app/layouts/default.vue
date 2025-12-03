<template>
    <Menu />
    <div class="content-wrapper"><slot /></div>
</template>
<style scoped>
.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 2000px;
    margin: 0 auto;
}
</style>