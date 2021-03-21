<template>
    <div class="game">
        <div @click="initializeGame" class="flex">
            <a href="#1" class="btn">Initalize</a>
        </div>
        <ion-phaser
            v-bind:game.prop='game'
            v-bind:initalise.prop='initalize'
        />
    </div>
</template>
<script src="../assets/scripts/game.js"></script>
