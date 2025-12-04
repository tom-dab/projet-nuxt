<script setup lang="ts">
    const formFields = [
        {
            label: "Nom",
            type: "text",
            placeholder: "Jonkler Skibidi",
            required: true
        },
        {
            label: "Email",
            type: "email",
            placeholder: "jonkler.skibidi@example.com",
            required: true,
        },
    ];
</script>

<template>
    <FormComponent :formFields="formFields" />
</template> 