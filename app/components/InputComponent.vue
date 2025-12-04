<script setup lang="ts">
defineProps<{
    type: string;
    placeholder: string;
    required: boolean;
}>();

const model = defineModel<string>({ required: true });
</script>

<template>
    <input  
        :type="type" 
        :placeholder="placeholder" 
        v-model="model"
        :value="model"
        :required="required"
    />
</template>