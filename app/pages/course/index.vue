<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
await navigateTo(useLocalePath()('/course/race-for-parliament'), { redirectCode: 302 })
</script>
