<template>
    <div>
      <h1>Run Code</h1>
      <textarea v-model="code"></textarea>
      <button @click="runCode">Run</button>
      <pre>{{ output }}</pre>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        code: '',
        output: ''
      };
    },
    methods: {
      async runCode() {
        try {
          const response = await axios.post('http://localhost:3003/run', { code: this.code });
          this.output = response.data.output;
        } catch (error) {
          console.error(error);
          this.output = 'Error: ' + error.message;
        }
      }
    }
  };
  </script>
  