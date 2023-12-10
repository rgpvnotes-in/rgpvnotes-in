<script setup></script>

<template>
    <div class="d-flex justify-content-center">
        <div class="post-body-title-card">
            <h2><slot /></h2>
        </div>
    </div>
</template>

<style scoped>
.post-body-title-card {
    text-align: center;
    background: #000;
    border-radius: 2px;
    display: inline-block;
    padding: 10px;
    margin: 1rem;
    width: 90%;
    color: #fff;
    font-weight: 700;
    font-family: inherit;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  
  .post-body-title-card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  
  .post-body-title-card h2 {
    margin-bottom: 0;
    font-size: 30px;
  }
  
</style>