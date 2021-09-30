<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto World Status
        .caption Updated on a monthly basis
    template(v-slot:body)
      EnvironmentalCard
      FundingCard.my-4
      PersonnelCard
</template>

<script>
import PrimaryLayout from "@/views/layouts/Primary"
import FundingCard from "@/components/Statuses/FundingCard"
import EnvironmentalCard from "@/components/Statuses/EnvironmentalCard"
import PersonnelCard from "@/components/Statuses/PersonnelCard"

export default {
  components: {
    PrimaryLayout, 
    FundingCard, 
    EnvironmentalCard, 
    PersonnelCard
  },
};
</script>