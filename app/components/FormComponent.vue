<script setup lang="ts">
import { ref, computed } from 'vue';
import emailjs from "@emailjs/browser";

const {
    public: { serviceKey, templateKey, publicKey },
} = useRuntimeConfig();

interface FortField {
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
}

const props = defineProps<{
    formFields: FortField[];
}>();

const formData = ref<string[]>(props.formFields.map(() => ""));

const templateParams = computed(() => ({
    name: formData.value[0],
    email: formData.value[1],
}));

async function submit() {
    const res = await emailjs.send(
        serviceKey,
        templateKey,
        templateParams.value,
        publicKey
    );
    if (res.status === 200) {
      } else {
      }
    }
</script>

<template>
    <form @submit.prevent="submit">
        <label v-for="(field, i) in formFields" :key="i">
            {{ field.label }}
            <InputComponent
                v-model="formData[i]!"
                :label="field.label"
                :type="field.type"
                :placeholder="field.placeholder"
                :required="field.required"
            />
        </label>
        <button type="submit" @click="submit">Envoyer</button>
    </form>
</template>