<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<template>
   <div class="settings">
      <div class="locales">
         <div>🌐</div>
         <select @change="(x) => changeLocale(x.target!)">
            <option value="en" :selected="localeManager.current === 'en'">English</option>
            <option value="ru" :selected="localeManager.current === 'ru'">Русский</option>
         </select>
      </div>
      <button class="btn-sound" v-on:click="audioManager.toggle()">
         <span v-if="audioManager.on">🔊</span>
         <span v-else>🔈</span>
      </button>
   </div>
   <field-view :audioManager="audioManager" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import FieldView from './components/field-view.vue';
import AudioManager from './components/managers/audio.manager';
import LocaleManager from './storage/locale.manager';
import StorageService from './storage/storage.service';

const storageService = new StorageService();
const localeManager = new LocaleManager();
const audioManager = reactive(new AudioManager(storageService.getAudio()));
const changeLocale = (target: EventTarget) => localeManager.setLocale((target as HTMLSelectElement).value);
</script>
