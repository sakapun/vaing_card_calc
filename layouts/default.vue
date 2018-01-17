<template>
  <div>
    <nav class="navbar">
      <div class="navbar-menu is-active">
        <router-link class="navbar-item" to="/">
          <span class="fa fa-language">ヒーロー一覧</span>
        </router-link>
        <router-link class="navbar-item" to="/cards">カード一覧</router-link>
      </div>
    </nav>
    <div class="container">
      <section class="section">
        <nuxt/>
      </section>
    </div>
  </div>
</template>

<style>
</style>
