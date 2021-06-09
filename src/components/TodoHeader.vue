<template>
    <header>
        <h1>{{ header }}</h1>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    header: String
  }
}
</script>