<template lang="pug">
    v-navigation-drawer(clipped app dark)
      v-list
        v-list-item.px-auto Ambassador Navigation
        v-divider(role="presentation" dark)
        v-list-item(v-for="(route, i) in routes" :key="i" :to="{ name: route.destination }") {{ route.name }}
</template>

<script>
export default {
    data: () => ({
        routes: [ 
            { name: "Dossiers", destination: "AmbassadorDossiers" },
            { name: "Excursion Reports", destination: "AmbassadorReports" },
            { name: "Feedback", destination: "AmbassadorFeedback" },
        ]
    })
}
</script>
