<template>
  <h1 class="main-title">Начни изучать питон</h1>
  <p class="sub-title">Бесплатный курс по программированию с нуля. Работает прямо в браузере.</p>

  <div class="code-editor">
        <pre>
            <code>
34:if:
35:     print("две строки равны")
36: else:
37:     print("так не бывает")
38:
39: # списки (изменяемые последовательности)
40: houses = ['Ravenclaw', 'Hufflepuff', 'Gryffindor']
41: houses.append('Slytherin')
42:
43: # циклы 'for': отступы вновь важны!
44: for house in houses:
45:     print('Ten points to', house, end='!\n')
            </code>
        </pre>
  </div>

  <div class="button-container">
    <a href="/lesson1" class="start-button">Начать</a>
  </div>
</template>

<script>
    export default {
        name: 'IndexComponent'
    };
</script>