<template>
    <h2>Учительский контроль</h2>
    <p>Результаты тестирования учеников</p>
    <div class="results">
        <h3>Список</h3>
        <ul id="resultsList">
            <!-- Сюда будут добавлены результаты учеников -->
        </ul>
    </div>
</template>

<style>
    /* Дополнительные стили для сбалансированного внешнего вида */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9; /* Добавляем фоновый цвет для всей страницы */
    }

    header {
        background-color: #94bce9;
        color: white;
        padding: 10px 0;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Добавляем тень для поднятия header'а */
    }

    header .logo img {
        height: 40px; /* Уменьшаем высоту лого для более сбалансированного вида */
        width: auto;
        max-width: 100%;
    }

    header nav a {
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        background-color: #333;
    }

    main {
        display: flex;
        flex-direction: column; /* Устанавливаем направление flex-контейнера в столбец */
        align-items: center; /* Выравниваем содержимое по центру */
        padding: 20px;
    }

    .results {
        margin-top: 20px; /* Добавляем отступ сверху для раздела результатов */
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Добавляем тень для поднятия раздела результатов */
        width: 80%; /* Ширина раздела результатов */
        max-width: 600px; /* Максимальная ширина раздела результатов */
    }

    .results h3 {
        margin-top: 0;
    }

    .results ul {
        list-style: none;
        padding: 0;
    }

    .results li {
        margin-bottom: 10px;
    }

    .results li:last-child {
        margin-bottom: 0; /* Убираем отступ снизу у последнего элемента списка */
    }

    .results li:not(:last-child) {
        border-bottom: 1px solid #ccc; /* Добавляем разделитель между элементами списка */
        padding-bottom: 10px; /* Добавляем отступ снизу для разделителя */
    }

    .results li span {
        font-weight: bold;
    }
</style>

<script>
    export default {
        name: 'DashboardComponent'
    };
    // Получаем результаты учеников при загрузке страницы
    window.onload = function() {
        fetch('/dashboard/results')
            .then(response => response.json())
            .then(results => {
                const resultsList = document.getElementById('resultsList');

                results.forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `Ученик: <span>${result.user.username}</span>, Результат: <span>${result.score}</span>`;
                    resultsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching results:', error));
    };
</script>