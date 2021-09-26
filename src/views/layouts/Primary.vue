<template lang="pug">
    v-card.mx-auto(width="66%" height="100%")
        v-card-title
            slot(name="header")
        v-card-text
            slot(name="body")
        v-card-actions
            slot(name="actions")
</template>