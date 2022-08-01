<template>
    <div class="tile">
        <h3>{{tile.Channel_Name}}</h3>
        <p>{{tile.description}}</p>
    </div>
</template>

<script>
export default ({
  name: 'tile',
  props:{
      tile: Object,
  },

})
</script>

<style scoped>
.tile{
    background-color: White;
    border: 2px solid gray;
    color: black;
}

</style>