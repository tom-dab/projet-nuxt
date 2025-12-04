<script setup lang="ts">
const tags = [
    {
        texte: "Tag",
        color: "#F70000",
    },
    {
        texte: "Tag",
        color: "#00F700",
    },
    {
        texte: "Tag",
        color: "#0000F7",
    }
];
</script>

<template>
    <span >Index</span>
    <div >
        <TagComponent 
            v-for="(tag, i) in tags" 
            :key="i" 
            :id="`${i}.tags`"
            :texte="`${tag.texte} ${i+1}`" 
            :color="tag.color" 
        />
    </div>
    <TagComponent texte="Tag" color="#F70000" />
</template>