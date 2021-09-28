<template lang="pug">
    v-navigation-drawer(clipped app dark)
      v-list
        v-list-item(v-for="(route, i) in routes" :key="i" :to="{ name: route.destination }") {{ route.name }}
        v-list-item(:to="{ name: 'AdminControlPanel' }") Admin Dashboard
</template>

<script>
export default {
    data: () => ({
        routes: [ 
            { name: "Dashboard", destination: "AmbassadorDashboard" },
            { name: "Dossiers", destination: "AmbassadorDossiers" },
            { name: "Excursion Reports", destination: "AmbassadorReports" },
            { name: "Feedback", destination: "AmbassadorFeedback" },
        ]
    })
}
</script>
