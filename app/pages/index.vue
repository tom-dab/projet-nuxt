<script setup lang="ts">
const tags = [
    {
        texte: "Tag1"
        color: "#F70000",
    },
    {
        texte: "Tag2",
        color: "#00F700",
    },
    {
        texte: "Tag3",
        color: "#0000F7",
    }
];

</script>


<template>
    <span>Index</span>
    <TagComponent texte="Tag1" color="#F70000" />
</template>