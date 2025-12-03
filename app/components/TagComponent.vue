<script setup lang="ts">
defineProps({
    texte: {
        type: String,
        default: 'Texte'
    },
    color: {
        type: String,
        default: 'blue'
    },
});
</script>

<template>
    <span 
        class="tag-component" :style="{ color, backgroundColor: color + '10' }"
        >{{ texte }}</span
    >
</template>

<style scoped>
.tag-component {
    background-color: #eee;
    padding: 0.25rem 0.5rem;
    border-radius: 0.4rem;
    width: fit-content;
}
</style>