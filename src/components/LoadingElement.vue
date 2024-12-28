<template>
    <div class="loading-container">
      <img src="/logo.svg" alt="Logo" class="loading-logo" />
      <p class="loading-text">"Great experiences are worth the wait!"</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Loading",
  };
  </script>
  
  <style scoped>
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3b5d50; /* Matches your preferred background color */
    overflow: hidden;
  }
  
  .loading-logo {
    width: 100px;
    height: 100px;
    animation: fadeInOut 2s ease-in-out infinite;
  }
  
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .loading-text {
    margin-top: 1rem;
    color: #e69737; /* Text highlight color */
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    animation: fadeInOut 2s ease-in-out infinite;
  }
  </style>
  